import { ConfigContext, ExpoConfig } from '@expo/config'
import dotenv from 'dotenv'

dotenv.config()

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECT_ID || '8aacffc2-2df8-47f9-af6d-ee783515b5fa',
    },
  },
  owner: process.env.EAS_OWNER || 'nilesh936',
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  platforms: ['ios', 'android'],
  name: 'T4 App',
  slug: 'rn-t4-app',
  updates: {
    url: 'https://u.expo.dev/8aacffc2-2df8-47f9-af6d-ee783515b5fa',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
})
