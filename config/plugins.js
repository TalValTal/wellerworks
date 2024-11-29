module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'b1a9c6e2f5d8447890123456789abcdef')
    },
  },
});