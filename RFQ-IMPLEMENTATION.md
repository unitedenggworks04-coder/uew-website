# RFQ (Request for Quote) Implementation

This document describes the complete RFQ flow implementation for United Engineering Works website.

## 🚀 Features

### Frontend Components
- **Floating RFQ Button**: Always visible, positioned bottom-right
- **Mobile Quick Actions**: Call and WhatsApp buttons on mobile (bottom-left)
- **Slide-in Drawer**: Full-screen form on mobile, side drawer on desktop
- **Form Validation**: Client-side validation with error messages
- **Success/Error States**: Clear feedback for users
- **Responsive Design**: Mobile-first approach

### Backend API
- **Email Integration**: Sends RFQ requests to unitedenggworks04@gmail.com
- **Spam Protection**: Honeypot field + rate limiting (30s per IP)
- **Input Validation**: Server-side validation and sanitization
- **Error Handling**: Comprehensive error responses
- **Logging**: Submission tracking and debugging

## 📱 User Experience

### RFQ Button
- **Position**: Fixed bottom-right corner
- **Icon**: Message circle icon
- **Animation**: Hover effects and smooth transitions
- **Accessibility**: Screen reader support

### Mobile Quick Actions
- **Call Button**: Direct `tel:` link to +91-8979820228
- **WhatsApp Button**: Pre-filled message for quick chat
- **Position**: Bottom-left corner (mobile only)
- **Colors**: Green for call, lighter green for WhatsApp

### Form Fields
1. **Full Name** * (required)
2. **Company** * (required)
3. **Email** * (required, validated format)
4. **Phone Number** * (required, Indian format +91 XXXXX XXXXX)
5. **Product** * (required, dropdown from product database)
6. **Size & Quantity** * (required, textarea)
7. **Additional Details** * (required, textarea)

## 🛡️ Security Features

### Spam Protection
- **Honeypot Field**: Hidden field that bots might fill
- **Rate Limiting**: Max 1 submission per 30 seconds per IP
- **Input Sanitization**: Removes HTML tags and limits length
- **Validation**: Server-side validation of all inputs

### Data Protection
- **No Storage**: Form data not stored in database
- **Email Only**: Data sent directly to business email
- **Input Limits**: Maximum 1000 characters per field
- **Sanitization**: Prevents XSS and injection attacks

## 🔧 Technical Implementation

### Frontend Components
```typescript
// Main RFQ button component
src/components/rfq-button.tsx

// Form drawer component
src/components/rfq-drawer.tsx
```

### Backend API
```typescript
// API route handler
src/app/api/rfq/route.ts
```

### Integration
```typescript
// Added to main layout
src/app/layout.tsx
```

## 📧 Email Configuration

### Environment Variables
Create a `.env.local` file with:

```env
# Gmail account for sending emails
EMAIL_USER=unitedenggworks04@gmail.com

# Gmail App Password (NOT regular password)
EMAIL_APP_PASSWORD=your_gmail_app_password_here

# Base URL for the website
NEXT_PUBLIC_BASE_URL=https://uew.com
```

### Gmail Setup
1. Enable 2-Step Verification in Google Account
2. Generate App Password (Security > 2-Step Verification > App Passwords)
3. Use App Password in EMAIL_APP_PASSWORD variable

### Email Template
- **Subject**: "New RFQ Request - [Product Name]"
- **HTML Format**: Professional styling with UEW branding
- **Text Format**: Plain text fallback
- **Reply-To**: Customer's email for direct responses

## 🎨 Styling & Animation

### Design System
- **Colors**: UEW brand colors (navy, brass, graphite)
- **Typography**: Consistent with site design
- **Spacing**: Mobile-first responsive spacing
- **Shadows**: Subtle shadows for depth

### Animations
- **Framer Motion**: Smooth slide-in/out transitions
- **Hover Effects**: Scale and shadow changes
- **Loading States**: Spinner animations
- **Success States**: Checkmark animations

### Responsive Behavior
- **Mobile**: Full-screen drawer with floating actions
- **Desktop**: Side drawer with full functionality
- **Tablet**: Adaptive layout based on screen size

## 📊 Form Validation

### Client-Side Validation
- **Required Fields**: All fields marked with asterisk
- **Email Format**: Standard email validation
- **Phone Format**: Indian phone number validation
- **Real-time Feedback**: Immediate error display

### Server-Side Validation
- **Field Presence**: All required fields checked
- **Data Types**: String validation and sanitization
- **Length Limits**: Maximum character restrictions
- **Format Validation**: Email and phone format checking

## 🔄 State Management

### Form States
- **Idle**: Initial form state
- **Submitting**: Form submission in progress
- **Success**: Successful submission
- **Error**: Validation or submission errors

### Error Handling
- **Validation Errors**: Field-specific error messages
- **Network Errors**: Connection failure handling
- **Server Errors**: API error responses
- **Rate Limit Errors**: Too many requests handling

## 📱 Mobile Experience

### Touch-Friendly Design
- **Large Buttons**: Minimum 44px touch targets
- **Easy Navigation**: Simple form flow
- **Quick Actions**: Direct call and WhatsApp access
- **Responsive Layout**: Optimized for small screens

### Performance
- **Fast Loading**: Minimal bundle size
- **Smooth Animations**: 60fps transitions
- **Efficient Rendering**: Optimized component updates
- **Offline Handling**: Graceful error states

## 🚀 Deployment

### Prerequisites
1. **Environment Variables**: Set up email configuration
2. **Gmail Access**: Enable app passwords
3. **Domain Configuration**: Update base URL
4. **SSL Certificate**: HTTPS required for production

### Production Considerations
- **Rate Limiting**: Consider Redis for distributed rate limiting
- **Email Service**: Consider dedicated email service (SendGrid, Mailgun)
- **Monitoring**: Add logging and analytics
- **Backup**: Implement form data backup if needed

## 🧪 Testing

### Manual Testing
1. **Form Submission**: Test all field combinations
2. **Validation**: Test error scenarios
3. **Mobile Experience**: Test on various devices
4. **Email Delivery**: Verify email receipt

### Automated Testing
- **Unit Tests**: Component and function testing
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Full user flow testing
- **Accessibility Tests**: Screen reader compatibility

## 📈 Analytics & Tracking

### Metrics to Track
- **Form Views**: How many users open the form
- **Completion Rate**: Percentage of started forms completed
- **Submission Rate**: Successful submissions
- **Error Rate**: Validation and submission errors
- **Mobile vs Desktop**: Device usage patterns

### Implementation
- **Google Analytics**: Track form interactions
- **Custom Events**: Form-specific tracking
- **Error Logging**: Server-side error tracking
- **Performance Monitoring**: Load time and responsiveness

## 🔮 Future Enhancements

### Planned Features
- **Form Analytics**: Detailed submission tracking
- **Auto-Response**: Immediate confirmation emails
- **CRM Integration**: Lead management system
- **File Uploads**: Document attachments
- **Multi-language**: International language support

### Technical Improvements
- **Real-time Validation**: Live field validation
- **Auto-save**: Form data persistence
- **Progressive Enhancement**: Advanced features for modern browsers
- **Offline Support**: Service worker integration

## 🆘 Troubleshooting

### Common Issues
1. **Email Not Sending**: Check Gmail app password
2. **Form Not Loading**: Verify component imports
3. **Validation Errors**: Check field requirements
4. **Mobile Issues**: Test responsive breakpoints

### Debug Steps
1. **Console Logs**: Check browser console for errors
2. **Network Tab**: Verify API calls and responses
3. **Environment Variables**: Confirm .env.local setup
4. **Gmail Settings**: Verify app password generation

## 📚 Resources

### Documentation
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Nodemailer Documentation](https://nodemailer.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

### Support
- **Technical Issues**: Check console logs and network tab
- **Email Problems**: Verify Gmail configuration
- **Styling Issues**: Review Tailwind classes and CSS
- **Performance**: Monitor bundle size and loading times

---

This RFQ implementation provides a seamless, secure, and user-friendly way for customers to request quotes while maintaining high security standards and excellent user experience across all devices.
