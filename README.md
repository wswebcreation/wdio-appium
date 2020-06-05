# WebdriverIO and Appium
Goal of this repository is to get familiar with writing a simple test for a native application and run it on:

1. A local iOS simulator or local Android emulator
1. Sauce Labs Legacy RDC
1. Sauce Labs Unified Platform

## Prerequisites 
### Install needed software
Because we want to start locally we need to install the following things:

- Install XCODE through the App store
    - When the XCODE is installed open it
    - Go to the `Preferences > Locations` and select the Command Line Tools
    - Accept notifications if needed and when done close XCODE again
- Download Android Studio from [here](https://developer.android.com/studio/) and install it
    - Follow the instructions to download and setup Android studio and configure your emulators with [this](https://developer.android.com/studio/run/managing-avds) tutorial. 
- Install NodeJS:
    - Check if Homebrew is installed by opening a terminal and enter the following command
        
            brew -v 
    
      If brew is installed you should see something like this
      
            Homebrew 2.2.17
            Homebrew/homebrew-core (git revision 572fc; last commit 2020-05-24)
            Homebrew/homebrew-cask (git revision ca81bd; last commit 2020-05-23) 

      If not then install brew with this command
      
            /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
            
      After the installation you should be able to check the version with the above command
      
    - Check if NodeJS is installed by opening a terminal and enter the following command
    
            node -v
            
      If NodeJS is installed you should see something like this
            
            v12.16.1
      
      If not then install NodeJS with this command
    
            brew install node
            
      After the installation you should be able to check the version with the above command

- Install carthage with the following command

        brew install carthage

- Install Git if you don't have it yet, you can check that by opening a terminal and enter this command

        git

    You should get some logs about `git`, if not download it from [here](https://git-scm.com/downloads)
        
- Install Appium with the following command
    
        npm install -g appium
        
    After installation check if it succeeded by entering
    
        appium -v
        
    That should give you the version

- Install `appium-doctor` with the following command

         npm install -g appium-doctor
         
    `appium-doctor` is used to diagnose and fix common Node, iOS and Android configuration issues before starting Appium. 
    You only run it once to check your local machine. See an example output below.
    
    Run this command
    
        appium-doctor
    
    That will generate an output like this
    
         info AppiumDoctor Appium Doctor v.1.15.1
         info AppiumDoctor ### Diagnostic for necessary dependencies starting ###
         info AppiumDoctor  ✔ The Node.js binary was found at: /Users/wswebcreation/.nvm/versions/node/v12.16.1/bin/node
         info AppiumDoctor  ✔ Node version is 12.16.1
         info AppiumDoctor  ✔ Xcode is installed at: /Applications/Xcode.app/Contents/Developer
         info AppiumDoctor  ✔ Xcode Command Line Tools are installed in: /Applications/Xcode.app/Contents/Developer
         info AppiumDoctor  ✔ DevToolsSecurity is enabled.
         info AppiumDoctor  ✔ The Authorization DB is set up properly.
         info AppiumDoctor  ✔ Carthage was found at: /usr/local/bin/carthage. Installed version is: 0.34.0
         info AppiumDoctor  ✔ HOME is set to: /Users/wswebcreation
         info AppiumDoctor  ✔ ANDROID_HOME is set to: /Users/wswebcreation/Library/Android/sdk
         info AppiumDoctor  ✔ JAVA_HOME is set to: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
         info AppiumDoctor  ✔ adb exists at: /Users/wswebcreation/Library/Android/sdk/platform-tools/adb
         info AppiumDoctor  ✔ android exists at: /Users/wswebcreation/Library/Android/sdk/tools/android
         info AppiumDoctor  ✔ emulator exists at: /Users/wswebcreation/Library/Android/sdk/tools/emulator
         info AppiumDoctor  ✔ Bin directory of $JAVA_HOME is set
         info AppiumDoctor ### Diagnostic for necessary dependencies completed, no fix needed. ###
         info AppiumDoctor
         info AppiumDoctor ### Diagnostic for optional dependencies starting ###
         WARN AppiumDoctor  ✖ opencv4nodejs cannot be found.
         WARN AppiumDoctor  ✖ ffmpeg cannot be found
         WARN AppiumDoctor  ✖ mjpeg-consumer cannot be found.
         WARN AppiumDoctor  ✖ set-simulator-location is not installed
         WARN AppiumDoctor  ✖ idb and idb_companion are not installed
         info AppiumDoctor  ✔ applesimutils is installed at: /usr/local/bin/applesimutils. Installed versions are: applesimutils 0.7.7
         info AppiumDoctor  ✔ ios-deploy is installed at: /usr/local/bin/ios-deploy. Installed version is: 1.10.0
         WARN AppiumDoctor  ✖ bundletool.jar cannot be found
         WARN AppiumDoctor  ✖ gst-launch-1.0 and/or gst-inspect-1.0 cannot be found
         info AppiumDoctor ### Diagnostic for optional dependencies completed, 7 fixes possible. ###
         info AppiumDoctor
         info AppiumDoctor ### Optional Manual Fixes ###
         info AppiumDoctor The configuration can install optionally. Please do the following manually:
         WARN AppiumDoctor  ➜ Why opencv4nodejs is needed and how to install it: https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/image-comparison.md
         WARN AppiumDoctor  ➜ ffmpeg is needed to record screen features. Please read https://www.ffmpeg.org/ to install it
         WARN AppiumDoctor  ➜ mjpeg-consumer module is required to use MJPEG-over-HTTP features. Please install it with 'npm i -g mjpeg-consumer'.
         WARN AppiumDoctor  ➜ set-simulator-location is needed to set location for Simulator. Please real https://github.com/lyft/set-simulator-location to install it
         WARN AppiumDoctor  ➜ Why idb is needed and how to install it: https://github.com/appium/appium-idb
         WARN AppiumDoctor  ➜ bundletool.jar is used to handle Android App Bundle. Please read http://appium.io/docs/en/writing-running-appium/android/android-appbundle/ to install it
         WARN AppiumDoctor  ➜ gst-launch-1.0 and gst-inspect-1.0 are used to stream the screen of the device under test. Please read https://appium.io/docs/en/writing-running-appium/android/android-screen-streaming/ to install them and for more details
         info AppiumDoctor
         info AppiumDoctor ###
         info AppiumDoctor
         info AppiumDoctor Bye! Run appium-doctor again when all manual fixes have been applied!
         info AppiumDoctor   
    
    When appium-doctor can, it will fix the problems for you, otherwise fix them manually. If you have some ENV issues make sure you have set them like this
    
        export ANDROID_HOME=/Users/wswebcreation/Library/Android/sdk
        export JAVA_HOME=$(/usr/libexec/java_home)
        export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools/adb:$ANDROID_HOME/build-tools:$JAVA_HOME/bin
    
- Download Appium desktop from [here](https://github.com/appium/appium-desktop/releases)
    Appium Desktop is an open source app which gives us the ability of the Appium automation server in a UI. It is a combination of a few Appium-related tools:
    
    - A graphical interface for the Appium Server. You can set options, start/stop the server, see logs, etc...
    - An Inspector that you can use to look at your app's elements, get basic information about them, and perform basic interactions with them. This is useful as a way to learn about Appium or as a way to learn about your app so you can write tests for it.
    
    > This tool is mainly used to view the UI-hierarchy and locate elements of native apps to be sure that all elements can be found.
    
    See [this readme](https://github.com/appium/appium-desktop) about how to use the Appium Desktop.
    
    When Appium Destkop is started make sure the Automatic Server-tab is enabled. Use the following settings for Android 
    (also check [here](./test/configs/wdio.android.local.emu.conf.js))
    
        {
          "deviceName": "{the-name-of-the-emualtor-you-configured-in-android-studio}",
          "platformName": "Android",
          "platformVersion": "{verison-of-your-configured-emulator}",
          "automationName": "UiAutomator2"
          "app": "{path-to-the-app}",
        }
    
    And the following settings for iOS (also check [here](./test/configs/wdio.ios.local.sim.conf.js))
    
        {
          "deviceName": "{the-exact-name-of-the-simulator-you-want-to-use}",
          "platformName": "Android",
          "platformVersion": "{verison-of-your-configured-simulator}",
          "automationName": "XCUITest"
          "app": "{path-to-the-app}",
        }


### Clone the project
Clone the project and install all dependencies with the following steps

1. Open a terminal and go to a folder where you want to store your project
1. Enter
    
        git clone https://github.com/wswebcreation/wdio-appium.git
        
1. When the clone is successful install all dependencies with by doing the following

        cd wdio-appium
        npm install

### Demo apps
We need to use a demo app, you can download it from [here](https://github.com/saucelabs/sample-app-mobile/releases).
Create a folder in this project and call it `apps`, download the files there (all 3).

