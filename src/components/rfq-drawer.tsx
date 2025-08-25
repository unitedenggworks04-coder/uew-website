'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, AlertCircle, Loader2, Phone, MessageSquare } from 'lucide-react'
import { getAllProducts } from '@/lib/products'

interface RFQFormData {
  name: string
  company: string
  email: string
  phone: string
  product: string
  sizeQty: string
  message: string
  honeypot: string // Hidden field for spam protection
}

interface RFQDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function RFQDrawer({ isOpen, onClose }: RFQDrawerProps) {
  const [formData, setFormData] = useState<RFQFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    sizeQty: '',
    message: '',
    honeypot: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0)
  
  const drawerRef = useRef<HTMLDivElement>(null)
  const products = getAllProducts()

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Close drawer on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleInputChange = (field: keyof RFQFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '')
    
    // Format as Indian phone number: +91 XXXXX XXXXX
    if (digits.length <= 5) {
      return `+91 ${digits}`
    } else if (digits.length <= 10) {
      return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
    } else {
      return `+91 ${digits.slice(0, 5)} ${digits.slice(5, 10)}`
    }
  }

  const validateForm = (): string[] => {
    const errors: string[] = []
    
    if (!formData.name.trim()) errors.push('Name is required')
    if (!formData.company.trim()) errors.push('Company is required')
    if (!formData.email.trim()) errors.push('Email is required')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.push('Invalid email format')
    if (!formData.phone.trim()) errors.push('Phone is required')
    if (formData.phone.replace(/\D/g, '').length < 10) errors.push('Phone number must be at least 10 digits')
    if (!formData.product.trim()) errors.push('Product is required')
    if (!formData.sizeQty.trim()) errors.push('Size/Quantity is required')
    if (!formData.message.trim()) errors.push('Message is required')
    
    // Check honeypot
    if (formData.honeypot) errors.push('Invalid submission')
    
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Rate limiting: max 1 submission per 30 seconds
    const now = Date.now()
    if (now - lastSubmissionTime < 30000) {
      setErrorMessage('Please wait 30 seconds before submitting another request')
      setSubmitStatus('error')
      return
    }
    
    const errors = validateForm()
    if (errors.length > 0) {
      setErrorMessage(errors.join(', '))
      setSubmitStatus('error')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/rfq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          product: formData.product.trim(),
          sizeQty: formData.sizeQty.trim(),
          message: formData.message.trim(),
        }),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setLastSubmissionTime(now)
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            product: '',
            sizeQty: '',
            message: '',
            honeypot: ''
          })
          setSubmitStatus('idle')
        }, 3000)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit request')
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit request')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      product: '',
      sizeQty: '',
      message: '',
      honeypot: ''
    })
    setSubmitStatus('idle')
    setErrorMessage('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-background border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Request Quote</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Request Submitted!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We'll get back to you within 24 hours with a detailed quote.
                  </p>
                  <button
                    onClick={resetForm}
                    className="btn-primary"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => handleInputChange('honeypot', e.target.value)}
                    className="absolute left-[-9999px] opacity-0"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="input w-full"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="input w-full"
                      placeholder="Enter company name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input w-full"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', formatPhoneNumber(e.target.value))}
                      className="input w-full"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  {/* Product */}
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">
                      Product *
                    </label>
                    <select
                      id="product"
                      value={formData.product}
                      onChange={(e) => handleInputChange('product', e.target.value)}
                      className="input w-full"
                      required
                    >
                      <option value="">Select a product</option>
                      {products.map((product) => (
                        <option key={product.slug} value={product.name}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Size/Quantity */}
                  <div>
                    <label htmlFor="sizeQty" className="block text-sm font-medium text-foreground mb-2">
                      Size & Quantity *
                    </label>
                    <textarea
                      id="sizeQty"
                      value={formData.sizeQty}
                      onChange={(e) => handleInputChange('sizeQty', e.target.value)}
                      className="input w-full min-h-[80px] resize-none"
                      placeholder="Specify sizes, quantities, and any special requirements"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Additional Details *
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="input w-full min-h-[100px] resize-none"
                      placeholder="Describe your requirements, timeline, or any other details"
                      required
                    />
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && errorMessage && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-destructive">{errorMessage}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Quote Request
                      </>
                    )}
                  </button>

                  {/* Contact Info */}
                  <div className="text-center pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">
                      Need immediate assistance?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="tel:+918979820228"
                        className="btn-outline text-sm flex items-center justify-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                      <a
                        href="https://wa.me/918979820228?text=Hi! I need help with a quote request."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
