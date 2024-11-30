module.exports = ({ env }) => {
  console.log('TRANSFER_TOKEN_SALT:', env('TRANSFER_TOKEN_SALT')); // Add this for debugging
  return {
    auth: {
      secret: 'f5d8b1a9c6e2447890123456789abcdef',
    },
    apiToken: {
      salt: 'MoX8Thqvsdx2Z8db76IctQ==',
    },
    transfer: {
      token: {
        salt: 'MvI9nBpERQvmF1W4uE5UQA==',
      },
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  };
};
