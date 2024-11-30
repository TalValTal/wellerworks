module.exports = {
  'upload': {
    config: {
      providerOptions: {
        sizeLimit: 10000000 // 10mb in bytes
      }
    }
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.ionos.com',
        port: 587,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      settings: {
        defaultFrom: 'your@wellerworks.co.uk',
        defaultReplyTo: 'your@wellerworks.co.uk',
      },
    },
  },
};