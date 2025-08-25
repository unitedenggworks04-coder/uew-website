import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Rate limiting storage (in production, use Redis or similar)
const submissionTimes = new Map<string, number>()

interface RFQRequest {
  name: string
  company: string
  email: string
  phone: string
  product: string
  sizeQty: string
  message: string
}

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'unitedenggworks04@gmail.com',
    pass: process.env.EMAIL_PASS || process.env.EMAIL_APP_PASSWORD,
  },
})

// Spam protection: Rate limiting per IP
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const lastSubmission = submissionTimes.get(ip) || 0
  
  // Allow max 1 submission per 30 seconds per IP
  if (now - lastSubmission < 30000) {
    return false
  }
  
  submissionTimes.set(ip, now)
  
  // Clean up old entries (older than 1 hour)
  for (const [key, time] of Array.from(submissionTimes.entries())) {
    if (now - time > 3600000) {
      submissionTimes.delete(key)
    }
  }
  
  return true
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number (Indian format)
function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 15
}

// Sanitize input to prevent injection attacks
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000) // Limit length
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    
    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many requests. Please wait 30 seconds before submitting again.' 
        },
        { status: 429 }
      )
    }
    
    // Parse request body
    const body: RFQRequest = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'company', 'email', 'phone', 'product', 'sizeQty', 'message'] as const
    for (const field of requiredFields) {
      if (!body[field] || typeof body[field] !== 'string' || !body[field].trim()) {
        return NextResponse.json(
          { 
            success: false, 
            message: `Missing required field: ${field}` 
          },
          { status: 400 }
        )
      }
    }
    
    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid email format' 
        },
        { status: 400 }
      )
    }
    
    // Validate phone number
    if (!isValidPhone(body.phone)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid phone number format' 
        },
        { status: 400 }
      )
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      company: sanitizeInput(body.company),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      product: sanitizeInput(body.product),
      sizeQty: sanitizeInput(body.sizeQty),
      message: sanitizeInput(body.message),
    }
    
    // Prepare email content
    const emailSubject = `New RFQ Request - ${sanitizedData.product}`
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0B1B2B; border-bottom: 2px solid #B08D57; padding-bottom: 10px;">
          New Quote Request
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2B2B2B; margin-top: 0;">Customer Information</h3>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Company:</strong> ${sanitizedData.company}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2B2B2B; margin-top: 0;">Product Details</h3>
          <p><strong>Product:</strong> ${sanitizedData.product}</p>
          <p><strong>Size & Quantity:</strong> ${sanitizedData.sizeQty}</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2B2B2B; margin-top: 0;">Additional Details</h3>
          <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
        </div>
        
        <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #2d5a2d;">
            <strong>Submission Time:</strong> ${new Date().toLocaleString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
          <p style="margin: 5px 0 0 0; color: #2d5a2d;">
            <strong>IP Address:</strong> ${ip}
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #6B7280; font-size: 14px;">
            This is an automated message from the UEW website contact form.
          </p>
        </div>
      </div>
    `
    
    const emailText = `
New Quote Request

Customer Information:
- Name: ${sanitizedData.name}
- Company: ${sanitizedData.company}
- Email: ${sanitizedData.email}
- Phone: ${sanitizedData.phone}

Product Details:
- Product: ${sanitizedData.product}
- Size & Quantity: ${sanitizedData.sizeQty}

Additional Details:
${sanitizedData.message}

Submission Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
IP Address: ${ip}

---
This is an automated message from the UEW website contact form.
    `
    
    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'unitedenggworks04@gmail.com',
      to: 'unitedenggworks04@gmail.com',
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      replyTo: sanitizedData.email, // Allow direct reply to customer
    }
    
    await transporter.sendMail(mailOptions)
    
    // Log successful submission (in production, use proper logging service)
    console.log(`RFQ submitted successfully by ${sanitizedData.email} from IP ${ip}`)
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully. We will get back to you within 24 hours.',
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('RFQ submission error:', error)
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit quote request. Please try again later or contact us directly.' 
      },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  )
}
