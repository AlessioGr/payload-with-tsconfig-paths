import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import {resolveTsconfigPathsToAlias} from './convert-tsconfig-path-to-webpack-alias';

export default buildConfig({
  admin: {
    user: Users.slug,
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...(config.resolve.alias || {}),
          ...resolveTsconfigPathsToAlias({
            tsConfigPath: 'tsconfig.json', // Using custom path
            webpackConfigBasePath: './', // Using custom path
          })
        },
      }
    }) 
  },
  collections: [
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
