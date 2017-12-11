# app-social-condominium
ReactNative app for api https://github.com/Bastiani/social-condominium (app) (Entria challenge)

![](https://s3-sa-east-1.amazonaws.com/rfdev/entria_test.gif)

## Install Watchman
* [Watchman](https://facebook.github.io/watchman/docs/install.html#installing-from-source)

## Install all requeriments for running android emulator
* [Alternative for Android Studio](https://medium.com/skyshidigital/install-react-native-without-android-studio-366317419e7e)
* [Emulator, Genymotion](https://www.genymotion.com/fun-zone/)

## Clone and run
```
npm install
cd android
./gradlew assembleDebug
adb install app/build/outputs/apk/app-debug.apk (with emulator run or device)
cd ..
npm run relay
react-native start
```
### And now open app in emulator or device connected in usb
