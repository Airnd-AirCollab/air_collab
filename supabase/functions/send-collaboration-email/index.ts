import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CollaborationEmailRequest {
  type: 'request' | 'accepted' | 'rejected';
  recipientEmail: string;
  recipientName: string;
  senderName: string;
  senderInstitution?: string;
  projectDescription?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      type,
      recipientEmail, 
      recipientName, 
      senderName, 
      senderInstitution,
      projectDescription 
    }: CollaborationEmailRequest = await req.json();

    console.log('Sending collaboration email:', { to: recipientEmail, type, from: senderName });

    let subject: string;
    let htmlContent: string;

    switch (type) {
      case 'request':
        subject = `New Collaboration Request from ${senderName}`;
        htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #333; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
              New Collaboration Request
            </h1>
            
            <p style="font-size: 16px; color: #555;">
              Hello ${recipientName},
            </p>
            
            <p style="font-size: 16px; color: #555;">
              You have received a new collaboration request from <strong>${senderName}</strong>
              ${senderInstitution ? ` from ${senderInstitution}` : ''}.
            </p>
            
            ${projectDescription ? `
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Project Details:</h3>
                <p style="color: #555; margin-bottom: 0;">${projectDescription}</p>
              </div>
            ` : ''}
            
            <div style="margin: 30px 0; text-align: center;">
              <a href="https://aircollab.vercel.app/collaboration" 
                 style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                View Request & Respond
              </a>
            </div>
            
            <p style="font-size: 14px; color: #777; margin-top: 30px;">
              You can review this request and choose to accept or decline it by logging into your AirCollab account.
            </p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
            
            <p style="font-size: 12px; color: #999;">
              This email was sent from AirCollab. If you didn't expect this email, you can safely ignore it.
            </p>
          </div>
        `;
        break;

      case 'accepted':
        subject = `${senderName} Accepted Your Collaboration Request!`;
        htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
              🎉 Collaboration Request Accepted!
            </h1>
            
            <p style="font-size: 16px; color: #555;">
              Hello ${recipientName},
            </p>
            
            <p style="font-size: 16px; color: #555;">
              Great news! <strong>${senderName}</strong>${senderInstitution ? ` from ${senderInstitution}` : ''} has <strong style="color: #22c55e;">accepted</strong> your collaboration request.
            </p>
            
            ${projectDescription ? `
              <div style="background: #f0fdf4; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #22c55e;">
                <h3 style="color: #333; margin-top: 0;">Collaboration Details:</h3>
                <p style="color: #555; margin-bottom: 0;">${projectDescription}</p>
              </div>
            ` : ''}
            
            <div style="margin: 30px 0; text-align: center;">
              <a href="https://aircollab.vercel.app/collaboration" 
                 style="background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                View Collaboration
              </a>
            </div>
            
            <p style="font-size: 14px; color: #777; margin-top: 30px;">
              You can now start collaborating! Visit your AirCollab dashboard to begin working together.
            </p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
            
            <p style="font-size: 12px; color: #999;">
              This email was sent from AirCollab. If you didn't expect this email, you can safely ignore it.
            </p>
          </div>
        `;
        break;

      case 'rejected':
        subject = `Update on Your Collaboration Request`;
        htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #333; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
              Collaboration Request Update
            </h1>
            
            <p style="font-size: 16px; color: #555;">
              Hello ${recipientName},
            </p>
            
            <p style="font-size: 16px; color: #555;">
              We wanted to let you know that <strong>${senderName}</strong>${senderInstitution ? ` from ${senderInstitution}` : ''} has declined your collaboration request at this time.
            </p>
            
            ${projectDescription ? `
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Request Details:</h3>
                <p style="color: #555; margin-bottom: 0;">${projectDescription}</p>
              </div>
            ` : ''}
            
            <div style="margin: 30px 0; text-align: center;">
              <a href="https://aircollab.vercel.app/discover-collaborators" 
                 style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                Find Other Collaborators
              </a>
            </div>
            
            <p style="font-size: 14px; color: #777; margin-top: 30px;">
              Don't be discouraged! There are many other researchers on AirCollab who would love to collaborate with you.
            </p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
            
            <p style="font-size: 12px; color: #999;">
              This email was sent from AirCollab. If you didn't expect this email, you can safely ignore it.
            </p>
          </div>
        `;
        break;

      default:
        throw new Error(`Unknown email type: ${type}`);
    }

    const emailResponse = await resend.emails.send({
      from: "AirCollab <noreply@aidevelopmentgroup.net>",
      to: [recipientEmail],
      subject: subject,
      html: htmlContent,
    });

    console.log("Collaboration email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-collaboration-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
