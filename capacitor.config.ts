import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dictionaryapp.app',
  appName: 'dictionaryapp',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: [
        "profile",
        "email"
      ],
      serverClientId: "677665023154-otkc8oq6583perpbi0omr19erq8ce123.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }

};

export default config;
