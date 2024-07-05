import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@shared'] = resolve(__dirname, '../shared/src/components');
    return config;
  },
};

export default nextConfig;
