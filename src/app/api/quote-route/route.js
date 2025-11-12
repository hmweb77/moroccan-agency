import { NextResponse } from 'next/server';

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

    // Here you would typically:
    // 1. Send an email notification to your team
    // 2. Send a confirmation email to the client
    // 3. Save to CRM/Database
    // 4. Create a lead in your sales pipeline
    
    // Log the submission (replace with actual services)
    console.log('Quote Request Submission:', {
      prenom,
      nom,
      email,
      telephone,
      service: serviceNames[service] || service,
      businessSize: businessSizeNames[businessSize] || businessSize,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending
    // In production, replace this with actual email service:
    /*
    // Email to team
    await sendEmail({
      to: 'devis@nextdigits.com',
      subject: `Nouvelle demande de devis - ${serviceNames[service]}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom:</strong> ${prenom} ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Service demandé:</strong> ${serviceNames[service]}</p>
        <p><strong>Taille de l'entreprise:</strong> ${businessSizeNames[businessSize]}</p>
        <p><strong>Date de soumission:</strong> ${new Date().toLocaleString('fr-FR')}</p>
      `
    });

    // Confirmation email to client
    await sendEmail({
      to: email,
      subject: 'Confirmation de votre demande de devis - NextDigits',
      html: `
        <h2>Merci ${prenom}!</h2>
        <p>Nous avons bien reçu votre demande de devis pour ${serviceNames[service]}.</p>
        <p>Notre équipe vous contactera dans les 24 heures pour discuter de votre projet.</p>
        <br>
        <p>Cordialement,</p>
        <p>L'équipe NextDigits</p>
      `
    });
    */

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