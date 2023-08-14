const dotenv = require('dotenv').config();
const headers = require('./config/headers');
const nextComposePlugins = require('next-compose-plugins');
const plugins = require('./config/plugins');
const { withPlugins } = nextComposePlugins.extend(() => ({}));


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
  },
  experimental: {
    appDir: true,
    swcPlugins: [
      ['@graphql-codegen/client-preset-swc-plugin', { artifactDirectory: 'lib/graphql/**/*.graphql', gqlTagName: 'graphql' }]
    ]
  },
  headers: headers,
  /**
   * https://nextjs.org/docs/basic-features/image-optimization
   * Settings are the defaults
   */
  images: {
    domains: ["images.ctfassets.net"],
  },
  /**
   * add the environment variables you would like exposed to the client here
   * documentation: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
   */
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}
/**
 * Next config
 * documentation: https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = withPlugins(nextConfig);

 