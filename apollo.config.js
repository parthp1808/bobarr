/* eslint import/no-commonjs: off */
module.exports = {
  client: {
    service: {
      name: 'bobarr',
      url: process.env.WEB_UI_API_URL+'/graphql' || `http://${host}:4000/graphql`,
    },
    excludes: ['**/*.{ts,tsx,js,jsx}'],
  },
};
