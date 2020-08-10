# ERC20 TOKEN DEMO
This app will show you how to get erc20 tokens that I named "Hereum" or "HRE". You need metamask browser extension installed to run this app, you can get it from [here](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)<br>
Click [here](https://hereum.herokuapp.com/) for live demo. You can claim HRE in three ways.
* By **clicking the _Get 10 HREs_'** button. That will give you 10 HREs. To see your current HRE click on the **_Get 10 HREs_'** button.
* By **sending HREs using your metamsk wallet**
* By **clicking the _Play Peewpeew to gain HREs_**. You can only do that from [Hereum](https://hereum.herokuapp.com/).

## Installation
If somehow you want to download this as a guide, you can. This app also uses a [backend](https://github.com/JoshMatthew/API-erc20-demo-Hereum-) which have a different repo. You can check the guide on how to install the backend as well by going [here](https://github.com/JoshMatthew/API-erc20-demo-Hereum-).

### 1. Set up file structure
Make a new directory by going in to your command line and typing
```console
user@me:~$ mkdir erc20demo && cd erc20demo && mkdir client && cd client
```
That will create a folder called **erc20demo** and place your current directory there, then creates a folder called **client** then finally change your current directory there.

### 2. Clone repo and Install dependencies
The next step is cloning the repo and also installing the dependencies. First you have to initialize npm by
```console
user@me:~$ npm init -y
```
That will initialize npm in default because of `-y` flag. Now you have to clone this git repo but first, you also need to initialize a local git repo by
```console
user@me:~$ git init
```
Once that's done, we can now clone this repo by
```console
user@me:~$ git clone https://github.com/JoshMatthew/CLIENT-erc20-hereum.git
```
Once it's done, you can now install the dependencies by doing
```console
user@me:~$ npm install
```
Wait for it to finish.

### 3. Run the app
Before running, make sure to install and configure the [backend](https://github.com/JoshMatthew/API-erc20-demo-Hereum-) first. After you finish it you should now have a file structure that looks like this
```
-erc20demo
|--client
|--server
```
If that's right, you can now open two separate terminals (one for backend and one for frontend). If you want to use concurrently, just edit the `package.json` of client or server. If you don't know how, just follow the official (documentation)[https://www.npmjs.com/package/concurrently]. <br>
In the first terminal cd to the client directory then type
```console
user@me:~$ npm start
```
And at the second terminal, cd to the server's directory then type
```console
user@me:~$ npm run dev
```

### Hooray! :blue_heart:
You're done! If you did it right you should now be able to visit (http://localhost:3000)[http://localhost:3000] 

