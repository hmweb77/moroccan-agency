import { NextResponse } from 'next/server';
import { sendQuoteNotification } from '@/lib/brevo';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { prenom, nom, email, telephone, service, businessSize } = body;
    
    if (!prenom || !nom || !email || !telephone || !service || !businessSize) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s+()-]+$/;
    if (!phoneRegex.test(telephone)) {
      return NextResponse.json(
        { error: 'Format de téléphone invalide' },
        { status: 400 }
      );
    }

    // Service mapping for better readability
    const serviceNames = {
      'conseil-strategie': 'Conseil & Stratégie de Marque',
      'identite-visuelle': 'Identité Visuelle',
      'digital': 'Digital',
      'studio-creation': 'Studio de Création',
      'publicite': 'Publicité & Médiatisation'
    };

    const businessSizeNames = {
      'startup': 'Startup (1-10 employés)',
      'pme': 'PME (10-250 employés)',
      'grande-entreprise': 'Grande entreprise (250+ employés)',
      'freelance': 'Freelance/Indépendant'
    };

    // Send email notifications via Brevo
    try {
      await sendQuoteNotification(body);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails - log it
    }

    // Log the submission for backup
    console.log('Quote Request Submission:', {
      prenom,
      nom,
      email,
      telephone,
      service: serviceNames[service] || service,
      businessSize: businessSizeNames[businessSize] || businessSize,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demande de devis envoyée avec succès! Nous vous contacterons sous 24h.',
        data: {
          service: serviceNames[service],
          businessSize: businessSizeNames[businessSize]
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}