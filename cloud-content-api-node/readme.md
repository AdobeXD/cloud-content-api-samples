# XD Cloud API Example: Node.js

This sample app will show you how to make XD Cloud Content API calls using Node.js.

After setting up the sample, you will have a Node.js app that:

1. Runs on `https://localhost:8000`
1. Lets a user input a cloud document ID
1. Returns the metadata of the cloud document

<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 3 -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

1. [GitHub](#github)
1. [Technology Used](#technology-used)
1. [Prerequisites](#prerequisites)
1. [Configuration](#configuration)
    1. [Create an OpenSSL cert](#create-an-openssl-cert)
    1. [Install Node.js packages](#install-nodejs-packages)
    1. [Enter your Adobe XD Cloud Content API credentials](#enter-your-adobe-xd-cloud-api-credentials)
1. [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitHub

You can find a companion repo for this developer guide [on GitHub]().

Be sure to follow all instructions in the `readme`.

## Technology Used

1. Node.js and the `npm` package manager
1. OpenSSL CLI

## Prerequisites

This guide will assume that you have read the [Adobe OAuth 2.0 Guide for Web](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/OAuthIntegration.md).

You must also have an API key by [registering your app with us](https://adobe.allegiancetech.com/surveys/JDQ78F/). 

## Configuration

The following steps will help you get this sample up and running.

### Create an OpenSSL cert

This example requires SSL, so you will need to create a self-signed cert using the OpenSSL CLI. Be sure to run this in the `./server` directory:

```
$ cd server
$ openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
```

Make sure that after running this command you have the `cert.pem` and `key.pem` files at the top level of the `.server` directory.

### Install Node.js packages

The `package.json` file contains a list of dependencies. Run the following command from the top level directory of the app to install these dependencies:

```
$ cd ..
$ npm install
```

### Enter your Adobe XD Cloud Content API credentials

Enter the required credentials in `public/config.js`:

```javascript
const apiKey = "YOUR-API-KEY";
const accessToken = "USER-ACCESS-TOKEN"

try {
        if (module) {
                module.exports = {
                        apiKey,
                        accessToken
                }
        }
}
catch (err) { }
```

You can get your API Key by [contacting us](https://adobe.allegiancetech.com/surveys/JDQ78F/). Note that `accessToken` is only required if your application is going to access private XD cloud documents. In order to get the `accessToken`, your app has to [integrate Adobe IO OAuth workflow](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/OAuth/OAuth.md).

## Usage

After completing the configuration steps, start the server:

```
$ npm start
```

To access the app, go to `https://localhost:8000`. Click through any cert warnings in the browser.
