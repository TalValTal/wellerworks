module.exports = ({ env }) => ({
  admin: {
    auth: {
      secret: 'f5d8b1a9c6e2447890123456789abcdef',
    },
    apiToken: {
      salt: env('API_TOKEN_SALT', '+tIqbghvKhI6U2uvIzYy8Q=='),
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
  },
});