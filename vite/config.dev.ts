import { defineConfig } from 'vite';
import configShared from './config.shared';

const devConfig = defineConfig({ ...configShared });

export default devConfig;