/** @type {import('next').NextConfig} */
const nextConfig = {
      experimental: {
            reactCompiler: true,
            ppr: 'incremental'
      },

      images: {
            remotePatterns: [
                  {protocol: 'https',
                        hostname: 'i.redd.it'},
                  {protocol: 'https',
                        hostname: 'images.unsplash.com'},
                  {protocol: 'https',
                        hostname: 'img.clerk.com'},
                  {protocol: 'https',
                        hostname: 'upload.wikimedia.org'},
                  {protocol: 'https',
                        hostname: 'res.cloudinary.com'},
            ]
      }
};

export default nextConfig;
