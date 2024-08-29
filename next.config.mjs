/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        api_url: "http://127.0.0.1:10000"
    }
};

export default nextConfig;
