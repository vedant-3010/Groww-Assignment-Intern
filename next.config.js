const withImages = require('next-images');
module.exports = withImages();

// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/user/:userId',
        destination: '/user/[userId]',
      },
    ];
  },
};
