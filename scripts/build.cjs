const esbuild = require('esbuild');

async function build() {
  try {
    await esbuild.build({
      entryPoints: ['src/index.ts'],
      bundle: true,
      outfile: 'dist/index.js',
      platform: 'node',
      target: 'node18',
      format: 'cjs',
      sourcemap: true,
    });

    await esbuild.build({
      entryPoints: ['src/index.ts'],
      bundle: true,
      outfile: 'dist/index.esm.js',
      platform: 'node',
      target: 'node18',
      format: 'esm',
      sourcemap: true,
    });

    console.log('Build success');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();