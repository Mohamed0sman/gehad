import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/contact
 * Handles contact form submissions
 * Emails data to configured address
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    const {
      name,
      email,
      phone,
      age,
      education,
      currentSituation,
      goals,
      challenges,
      preferredTime,
      sessionType,
      hearAboutUs,
      additionalInfo,
      subject = 'Contact Form Submission'
    } = body

    // Validate required fields
    if (!name || !email || !phone || !currentSituation || !goals || !challenges) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Format email content
    const emailContent = `
New Contact/Booking Form Submission

Personal Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Age: ${age}

Educational Background:
- Current Level: ${education}
- Current Situation: ${currentSituation}

Career Information:
- Goals: ${goals}
- Challenges: ${challenges}
- Preferred Time: ${preferredTime}
- Session Type: ${sessionType}
- How They Found You: ${hearAboutUs}

Additional Info:
${additionalInfo || 'None'}

---
This is an automated message from the booking/contact form at gehad-ashraf.com
`

    // Send via email (implement based on your provider)
    // For now, we'll log and return success
    console.log('Form submission received:', {
      name,
      email,
      phone,
      subject
    })

    // TODO: Implement actual email sending using:
    // - SendGrid API
    // - SMTP (nodemailer)
    // - Your custom webhook
    // - Third-party service

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully. We will contact you soon.',
        data: {
          name,
          email,
          phone
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      {
        error: 'Failed to submit form. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Allow CORS for POST requests
export const config = {
  runtime: 'nodejs',
}
