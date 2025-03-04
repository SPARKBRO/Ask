export const getEmailTemplate = (name: string, senderName: string, response: "accepted" | "rejected") => {
  const subject = response === "accepted" 
    ? `🎉 Great News! ${name} said YES to your date invitation!`
    : `💔 Update on your date invitation to ${name}`;

  const acceptedHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #FF69B4; text-align: center;">🎉 Wonderful News! 🎉</h1>
      <p style="font-size: 18px; line-height: 1.6;">
        Dear ${senderName},
      </p>
      <p style="font-size: 18px; line-height: 1.6;">
        We're excited to let you know that <strong>${name}</strong> has accepted your date invitation! 
        Your romantic journey is about to begin! 💕
      </p>
      <div style="background-color: #FFE6F2; padding: 20px; border-radius: 10px; margin: 20px 0;">
        <p style="text-align: center; font-size: 20px; color: #FF1493;">
          "Sometimes the perfect moment starts with a simple 'Yes'" ❤️
        </p>
      </div>
      <p style="font-size: 16px; color: #666;">
        Wishing you both a wonderful time together!
      </p>
    </div>
  `;

  const rejectedHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #666; text-align: center;">💌 Update on Your Invitation 💌</h1>
      <p style="font-size: 18px; line-height: 1.6;">
        Dear ${senderName},
      </p>
      <p style="font-size: 18px; line-height: 1.6;">
        We wanted to let you know that ${name} has viewed your date invitation. While it wasn't a match this time, 
        remember that the right person is out there! 🌟
      </p>
      <div style="background-color: #F5F5F5; padding: 20px; border-radius: 10px; margin: 20px 0;">
        <p style="text-align: center; font-size: 20px; color: #666;">
          "Every 'no' brings you closer to the right 'yes'" 💫
        </p>
      </div>
      <p style="font-size: 16px; color: #666;">
        Keep spreading love and joy!
      </p>
    </div>
  `;

  return {
    subject,
    html: response === "accepted" ? acceptedHTML : rejectedHTML
  };
}; 