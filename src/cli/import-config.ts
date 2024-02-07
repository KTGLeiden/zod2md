import { bundleRequire } from 'bundle-require';
import type { Config } from '../types';

export async function importConfig(path: string): Promise<Config> {
  const { mod } = await bundleRequire({ filepath: path });
  // TODO: validation
  return mod.default || mod;
}
