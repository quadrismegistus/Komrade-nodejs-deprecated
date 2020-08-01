const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  // console.log('using proxy!')
  // app.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'http://localhost:9050',
  //     changeOrigin: true,
  //   })
  // );
};
