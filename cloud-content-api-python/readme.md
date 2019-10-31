# XD Cloud API Example: Python

This sample app will show you how to use XD Cloud APIs in Python using the Flask framework.

After setting up the sample, you will have a Python app that:

1. Serves `templates/index.html` on `https://localhost:8000`
1. Lets a user input a cloud document ID
1. Returns the metadata of the cloud document

<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 3 -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

1. [GitHub](#github)
1. [Technology Used](#technologyused)
1. [Prerequisites](#prerequisites)
1. [Configuration](#configuration)
    1. [Create an OpenSSL cert](#createanopensslcert)
    1. [Install Python libraries](#installpythonlibraries)
    1. [Enter your Flask secret and  Adobe API credentials](#enteryourflasksecretandadobeapicredentials)
1. [Usage](#usage)
1. [Other Resources](#otherresources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitHub

You can find a companion repo for this developer guide [on GitHub]().

Be sure to follow all instructions in the `readme`.


## Technology Used

1. Python 2.6 or greater and the `pip` package manager
1. OpenSSL CLI


## Prerequisites

This guide will assume that you have read the [Adobe OAuth 2.0 Guide for Web](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/OAuthIntegration.md).

You must also have an API key by [registering your app with us](https://adobe.allegiancetech.com/surveys/JDQ78F/). 

## Configuration

The following steps will help you get this sample up and running.


### Create an OpenSSL cert

This example requires SSL, so you will need to create a self-signed cert using the OpenSSL CLI:

```
$ openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
```

Make sure that after running this command you have the `cert.pem` and `key.pem` files at the top level of the sample app.


### Install Python libraries

This sample app uses the [Flask](https://palletsprojects.com/p/flask/), [Requests](https://pypi.org/project/requests/2.7.0/), and [Six](https://pypi.org/project/six/) libraries. You can install them using the `pip` package manager:

```
$ pip install flask
$ pip install requests
$ pip install six
```


### Enter your Flask secret and Adobe API credentials

Enter the required credentials in `config.py`:

```
class Config(object):
    FLASK_SECRET = 'PLACEHOLDER_SECRET_KEY'
    API_KEY = 'YOUR_API_KEY'
    ACCESS_TOKEN = 'YOUR-ACCESS-TOKEN'
```

You can get your API Key by [contacting us](https://adobe.allegiancetech.com/surveys/JDQ78F/). Note that `ACCESS_TOKEN` is only required if your application is going to access private XD cloud documents. In order to get the `ACCESS_TOKEN`, your app has to [integrate Adobe IO OAuth workflow](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/OAuth/OAuth.md).


## Usage

After completing the configuration steps, run `adobe-xd-cloud.py`:

```
$ python adobe-xd-cloud.py
```

To access the app, go to `https://localhost:8000`. Click through any cert warnings in the browser.
