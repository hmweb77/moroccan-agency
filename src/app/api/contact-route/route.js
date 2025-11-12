import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { prenom, nom, email, telephone, sujet, message } = body;
    
    if (!prenom || !nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to database
    // 3. Send to CRM
    
    // Example with console logging (replace with actual email service)
    console.log('Contact Form Submission:', {
      prenom,
      nom,
      email,
      telephone,
      sujet,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending
    // In production, replace this with actual email service:
    /*
    await sendEmail({
      to: 'contact@nextdigits.com',
      from: email,
      subject: `Nouveau contact: ${sujet}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${prenom} ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone || 'Non fourni'}</p>
        <p><strong>Sujet:</strong> ${sujet}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès! Nous vous répondrons dans les 24h.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}