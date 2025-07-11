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
