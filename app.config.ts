import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "FEA SMM",
  slug: "smm",
  version: "1.0.0",
  sdkVersion: "49.0.0",
  orientation: "default",
  icon: "./core/assets/images/icon_fea.png",
  scheme: "com.feavn.smm",
  userInterfaceStyle: "automatic",
  runtimeVersion: {
    policy: "appVersion",
  },
  splash: {
    image: "./core/assets/images/splash_its.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },

  updates: {
    url: "https://portal.feavn.com.vn:2222/update",
    enabled: true,
    requestHeaders: {
      "expo-channel-name": "smm",
    },
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.feavn.smm",
    buildNumber: "1",
  },

  android: {
    package: "com.feavn.smm",
    versionCode: 1,
    googleServicesFile: "./google-services.json",
  },

  extra: {
    eas: {
      projectId: "94824009-53ca-475d-b619-24aabf817f7a",
    },
  },
});
