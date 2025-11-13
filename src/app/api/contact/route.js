import { NextResponse } from 'next/server';
import { sendContactNotification } from '@/lib/brevo';

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

    // Send email notifications via Brevo
    try {
      await sendContactNotification(body);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails - log it
    }

    // Log the submission for backup
    console.log('Contact Form Submission:', {
      prenom,
      nom,
      email,
      telephone,
      sujet,
      message,
      timestamp: new Date().toISOString()
    });

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