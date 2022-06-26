/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPwa = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig

module.exports = withPwa({
  pwa: {
    // destino dos arquivos de service worker
    dest: 'public',
    disable: !isProd
  }
})
