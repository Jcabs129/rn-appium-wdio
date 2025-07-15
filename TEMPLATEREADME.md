# 📱 RN Appium WebdriverIO — Testing React Native Apps with Expo Builds

> To tackle the challenge of testing cross-platform mobile apps efficiently, this project uses **WebdriverIO**, a powerful automation framework that allows writing tests for both **iOS and Android** using a single language — **JavaScript**.

By combining **React Native** (for building apps) with **WebdriverIO** (for testing), we can develop and automate native mobile applications across platforms **without switching tech stacks**.  
In this project, we’ll:

1. Build a stock price checker app  
2. Refactor it to make it testable  
3. Write automated tests to validate its core functionality  

---

## 📚 Table of Contents

- [Features](#-features)
- [Requirements](#-requirements)
- [Installation](#-installation)
- [Usage](#-usage)
  - [Commands](#-commands)
- [Material](#-material)

---

## 🚀 Features

- ✅ Fetch real-time stock prices  
- 🔍 Search for stocks by ticker symbol  
- 💻 User-friendly CLI interface  
- 📱 Supports multiple platforms (iOS, Android)  

---

## 📦 Requirements

### Xcode and Android Studio
To test on both iOS Simulator and Android Emulator, make sure you have:
- [Xcode (latest stable version)](https://developer.apple.com/xcode/)
- [Android Studio](https://developer.android.com/studio)

### Node and CLI Tools
- [Node.js](https://nodejs.org/) `>= 18`
- [npm](https://www.npmjs.com/) `>= 9`
- [watchman](https://facebook.github.io/watchman/docs/install) — improves file watching on macOS
- [Expo CLI](https://docs.expo.dev/get-started/installation/) — for managing React Native apps  
  Install with:  
  ```bash
  npm install -g expo-cli


### 📦 Expo CLI

**Expo CLI** is a command line tool that helps scaffold React Native projects and provides the easiest way to get started. It also has a companion Expo client app that you can install on iOS and Android devices that allows you to preview your apps wirelessly.

Used for running and building React Native apps via Expo.
Install with:

```bash
npm install -g expo-cli
```

### ⚙️ EAS CLI

**EAS CLI** is a tool provided by Expo to help you build, submit, and manage React Native apps in the cloud. It enables you to create production-ready or development builds for iOS and Android without needing a local native development environment. (Optional)

Install with:

```bash
npm install -g eas-cli
```

### ⚙️ EAS login

eas login connects your local machine to your Expo account, enabling you to use Expo Application Services (EAS) features that require authentication.

Log in to your Expo account:

```bash
eas login
```


### 🤖 Appium (Server)
Appium Server acts as a bridge between your WebdriverIO test scripts and the native test frameworks like XCUITest (iOS) and UIAutomator2 (Android).
Install globally with:

```bash
npm install -g appium
```

### 🧪 WebdriverIO
WebdriverIO is a JavaScript testing framework for browser and mobile automation.
Install it as a development dependency:


open-source automation test framework for web and mobile applications. It provides a simple and flexible API for writing end-to-end tests using the WebDriver protocol and supports modern automation tools and services.

```bash
npm install --save-dev webdriverio
```


You may also need supporting packages depending on your test setup:

```bash
npm install --save-dev @wdio/cli @wdio/local-runner @wdio/mocha-framework
```


### 🛠️ Installation
Clone the project and install dependencies:

1. git clone repo
2. cd your-repo-name
3. npm install

Install watchman (macOS):

```bash
brew install watchman
```

Install global CLIs if you haven’t already:

```bash
npm install -g expo-cli eas-cli appium
```





**Appium** is an open-source automation tool for testing mobile applications. It allows you to write tests for native, hybrid, and mobile web apps on iOS, Android, and Windows platforms using the same API.

### 🧪 Usage
Make sure to build the development version of your app first using EAS:

```bash
eas build:dev
```

Run your app on an iOS simulator:

```bash
npx expo start --ios
```

Or launch Expo dev server for all platforms:

```bash
npx expo start
```

Start the Appium server with inspector and CORS enabled:

```bash
appium server --use-plugins=inspector --allow-cors`
``

## 🛠️ Material
- [Building and testing native mobile apps](https://medium.com/tauk-blog/building-and-testing-native-mobile-apps-with-react-native-and-webdriverio-part-1-d51e73fbf573)
- [Configure a development build in cloud](hhttps://docs.expo.dev/tutorial/eas/configure-development-build/)
- [Create and run a cloud build for iOS Simulator](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/)
- [How to create and run a cloud build for iOS Simulator | EAS Tutorial](https://www.youtube.com/watch?v=SgL97PFZctg&ab_channel=Expo)