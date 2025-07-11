# [rn appium webdriverio - testing react native app on builds with expo]

> To tackle the challenge of testing cross-platform mobile apps efficiently, i'll use WebdriverIO, a powerful automation framework that write tests for both iOS and Android using a single language — JavaScript.

By combining React Native (for building apps) with WebdriverIO (for testing), to develop and automate native mobile applications across platforms without switching tech stacks. we’ll build a stock price checking app, refactor it to make it testable, and then create automated tests to validate its functionality. 

---

## 📚 Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Material](#material)


---

## 🚀 Features

- ✅ Fetch real-time stock prices
- 🔍 Search for stocks by ticker symbol
- 💻 User-friendly CLI interface
- 📱 Supports multiple platforms (iOS, Android)

---

## 📦 Requirements
Xcode and Android Studio
Having both installed allows us to test on the iOS Simulator and Android Emulator.

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) >= 9
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (for React Native apps)
- [EAS CLI/ login](https://docs.expo.dev/tutorial/eas/configure-development-build/#install-eas-cli)
- [Appium](https://docs.expo.dev/develop/development-builds/create-a-build/)
- [webdriverio](https://webdriver.io/)
- [watchman](https://facebook.github.io/watchman/docs/install)

---

## 🛠️ Installation

bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
Or if using Expo:

bash
brew install watchman
npm install -g expo-cli
npm install -g appium
npm install webdriverio --dev
expo install
📈 Usage


bash
npm start
Or with Expo:

bash
expo start
🧪 Commands
npm start - Starts the development server

npm run build - Builds the app for production

npm test - Runs unit tests



## 🛠️ Material
- [Building and testing native mobile apps](https://medium.com/tauk-blog/building-and-testing-native-mobile-apps-with-react-native-and-webdriverio-part-1-d51e73fbf573)
- [Configure a development build in cloud](hhttps://docs.expo.dev/tutorial/eas/configure-development-build/)
- [Create and run a cloud build for iOS Simulator](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/)
- [How to create and run a cloud build for iOS Simulator | EAS Tutorial](https://www.youtube.com/watch?v=SgL97PFZctg&ab_channel=Expo)