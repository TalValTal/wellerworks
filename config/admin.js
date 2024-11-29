module.exports = ({ env }) => ({
  auth: {
    secret: 'f5d8b1a9c6e2447890123456789abcdef',
  },
  apiToken: {
    salt: 'MoX8Thqvsdx2Z8db76IctQ=='  // Replace with your actual API token salt
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});