export const otpMailTemplate = (otp) => `
  <div style="font-family:sans-serif">
    <h2>Your OTP Code</h2>
    <p>Use the OTP below to complete your process. It will expire in 5 minutes:</p>
    <h3 style="color:blue">${otp}</h3>
  </div>
`;

export const verifiedTemplate = () => `
  <div style="font-family:sans-serif">
    <h2>Email Verified Successfully!</h2>
    <p>You can now login to your account.</p>
  </div>
`;
