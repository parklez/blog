import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'blog',
  distFolder: '../docs', // output directory of your Angular build artifacts
  outDir: '../scullyOutput', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};