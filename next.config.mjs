/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      optimizeFonts: true,
    },
    reactStrictMode: true, // Mantém o modo estrito ativado, o que pode ajudar na detecção de erros
  };
  
  export default nextConfig;
  