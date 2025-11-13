// Brevo (Sendinblue) Email Service
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

export async function sendEmail({ to, subject, htmlContent, replyTo }) {
  if (!BREVO_API_KEY) {
    throw new Error('BREVO_API_KEY is not configured');
  }

  try {
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: 'NextDigits',
          email: process.env.BREVO_SENDER_EMAIL || 'contact@hmwebs.com'
        },
        to: Array.isArray(to) ? to : [{ email: to }],
        subject,
        htmlContent,
        ...(replyTo && { replyTo: { email: replyTo } })
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Brevo API Error: ${JSON.stringify(error)}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}

export async function sendQuoteNotification(formData) {
  const { prenom, nom, email, telephone, service, businessSize, note } = formData;
  
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

  // Email to team
  await sendEmail({
    to: process.env.ADMIN_EMAIL || 'contact@nextdigits.com',
    subject: `Nouvelle demande de devis - ${serviceNames[service] || service}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #48A9FE 0%, #002144 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 5px; }
          .label { font-weight: bold; color: #002144; }
          .value { color: #555; }
          .note-box { background: white; padding: 20px; border-left: 4px solid #48A9FE; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 Nouvelle Demande de Devis</h1>
          </div>
          <div class="content">
            <div class="info-row">
              <span class="label">👤 Nom complet:</span>
              <span class="value">${prenom} ${nom}</span>
            </div>
            <div class="info-row">
              <span class="label">📧 Email:</span>
              <span class="value">${email}</span>
            </div>
            <div class="info-row">
              <span class="label">📱 Téléphone:</span>
              <span class="value">${telephone}</span>
            </div>
            <div class="info-row">
              <span class="label">🎨 Service demandé:</span>
              <span class="value">${serviceNames[service] || service}</span>
            </div>
            <div class="info-row">
              <span class="label">🏢 Taille de l'entreprise:</span>
              <span class="value">${businessSizeNames[businessSize] || businessSize}</span>
            </div>
            ${note ? `
            <div class="note-box">
              <strong>💬 Message du client:</strong><br><br>
              ${note.replace(/\n/g, '<br>')}
            </div>
            ` : ''}
            <div class="info-row">
              <span class="label">📅 Date de soumission:</span>
              <span class="value">${new Date().toLocaleString('fr-FR')}</span>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    replyTo: email
  });

  // Confirmation email to client
  await sendEmail({
    to: email,
    subject: 'Confirmation de votre demande de devis - NextDigits',
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #48A9FE 0%, #002144 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .highlight { background: #48A9FE; color: white; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ Merci ${prenom}!</h1>
          </div>
          <div class="content">
            <p>Nous avons bien reçu votre demande de devis pour <strong>${serviceNames[service] || service}</strong>.</p>
            
            <div class="highlight">
              <strong>⏱️ Notre équipe vous contactera dans les 24 heures</strong>
            </div>
            
            <p>En attendant, n'hésitez pas à consulter nos réalisations et nos services sur notre site web.</p>
            
            <p>À très bientôt,<br>
            <strong>L'équipe NextDigits</strong></p>
            
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            
            <p style="font-size: 12px; color: #888;">
              📧 contact@nextdigits.com | 📱 07 08 00 00 18 | 📍 Rabat, Maroc
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  });
}

export async function sendContactNotification(formData) {
  const { prenom, nom, email, telephone, sujet, message } = formData;

  // Email to team
  await sendEmail({
    to: process.env.ADMIN_EMAIL || 'contact@nextdigits.com',
    subject: `Nouveau contact: ${sujet}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #48A9FE 0%, #002144 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 5px; }
          .label { font-weight: bold; color: #002144; }
          .value { color: #555; }
          .message-box { background: white; padding: 20px; border-left: 4px solid #48A9FE; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>💌 Nouveau Message de Contact</h1>
          </div>
          <div class="content">
            <div class="info-row">
              <span class="label">👤 Nom:</span>
              <span class="value">${prenom} ${nom}</span>
            </div>
            <div class="info-row">
              <span class="label">📧 Email:</span>
              <span class="value">${email}</span>
            </div>
            <div class="info-row">
              <span class="label">📱 Téléphone:</span>
              <span class="value">${telephone || 'Non fourni'}</span>
            </div>
            <div class="info-row">
              <span class="label">📋 Sujet:</span>
              <span class="value">${sujet}</span>
            </div>
            <div class="message-box">
              <strong>Message:</strong><br><br>
              ${message.replace(/\n/g, '<br>')}
            </div>
            <div class="info-row">
              <span class="label">📅 Date:</span>
              <span class="value">${new Date().toLocaleString('fr-FR')}</span>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    replyTo: email
  });

  // Confirmation email to client
  await sendEmail({
    to: email,
    subject: 'Confirmation de votre message - NextDigits',
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #48A9FE 0%, #002144 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ Merci pour votre message!</h1>
          </div>
          <div class="content">
            <p>Bonjour ${prenom},</p>
            <p>Nous avons bien reçu votre message concernant: <strong>${sujet}</strong></p>
            <p>Notre équipe vous répondra dans les plus brefs délais, généralement sous 24 heures.</p>
            <p>Cordialement,<br>
            <strong>L'équipe NextDigits</strong></p>
            
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            
            <p style="font-size: 12px; color: #888;">
              📧 contact@nextdigits.com | 📱 07 08 00 00 18 | 📍 Rabat, Maroc
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  });
}