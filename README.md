# WebdriverIO and Appium
Goal of this repository is to get familiar with writing a simple test for a native application and run it on:

1. A local simulator
1. Sauce Labs Legacy RDC
1. Sauce Labs Unified Platform

## Prerequisites 
### Install needed software
Because we want to start locally we need to install the following things:

- [ ] Install XCODE through the App store
- [ ] Install NodeJS:
    - Check if Homebrew is installed by opening a terminal and enter the following command
        
            brew -v 
    
      If brew is installed you should see something like this
      
            Homebrew 2.2.17
            Homebrew/homebrew-core (git revision 572fc; last commit 2020-05-24)
            Homebrew/homebrew-cask (git revision ca81bd; last commit 2020-05-23) 

      If not then install brew with this command
      
            /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
            
      After the installation you should be able to check the version with the above command
      
    - Install NodeJS with the following command
    
            brew install node
            
      When you are done you should be able to check the version of NodeJS by entering this command
      
            node -v

      It will give something back like this
      
            v12.16.1

- [ ] Install carthage with the following command

        brew install carthage
        
- [ ] Install Appium with the following command
    
        npm install -g appium
        
    After installation check if it succeeded by entering
    
        appium -v
        
    That should give you the version

- [ ] Install `appium-doctor` with the following command

         npm install -g appium-doctor
         
    `appium-doctor` is used to diagnose and fix common Node, iOS and Android configuration issues before starting Appium. 
    You only run it once to check your local machine. See an example output below.
    
    Run this command
    
        appium-doctor --ios
    
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
        info AppiumDoctor ### Diagnostic for optional dependencies completed, 5 fixes possible. ###
        info AppiumDoctor
        info AppiumDoctor ### Optional Manual Fixes ###
        info AppiumDoctor The configuration can install optionally. Please do the following manually:
        WARN AppiumDoctor  ➜ Why opencv4nodejs is needed and how to install it: https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/image-comparison.md
        WARN AppiumDoctor  ➜ ffmpeg is needed to record screen features. Please read https://www.ffmpeg.org/ to install it
        WARN AppiumDoctor  ➜ mjpeg-consumer module is required to use MJPEG-over-HTTP features. Please install it with 'npm i -g mjpeg-consumer'.
        WARN AppiumDoctor  ➜ set-simulator-location is needed to set location for Simulator. Please real https://github.com/lyft/set-simulator-location to install it
        WARN AppiumDoctor  ➜ Why idb is needed and how to install it: https://github.com/appium/appium-idb
        info AppiumDoctor
        info AppiumDoctor ###
        info AppiumDoctor
        info AppiumDoctor Bye! Run appium-doctor again when all manual fixes have been applied!
        info AppiumDoctor
    
    Fix the necessary dependencies if they are failing, otherwise you're done with this
    
- [ ] Download Appium desktop from [here](https://github.com/appium/appium-desktop/releases)

### Demo apps
We need to use a demo app, you can download it from [here](https://github.com/saucelabs/sample-app-mobile/releases).
Create a folder in this project and call it `apps`, download the files there (all 3).

