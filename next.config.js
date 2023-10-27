/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    env: {
        "URL": "http://localhost:3000/api"
    }
}

module.exports = nextConfig
