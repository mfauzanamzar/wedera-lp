import { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    domains: [`${process.env.NEXT_IMAGE_URL}`],
  },
};

export default config;
