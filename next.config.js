/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    env: {
        "URL": "https://gurwinder.vercel.app/api"
    }
}

module.exports = nextConfig
