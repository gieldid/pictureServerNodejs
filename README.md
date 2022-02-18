# pictureServerNodejs

Username: pi
password: robotlab

## Basic usage
Go to the following url when the server is running: http://raspberrypi.local/getColor

This will take a picture and get the color of the object back.

Result is in json and looks like this:

```
["{\"primaryColor\": [56, 113, 113], \"secondaryColor\": [80, 163, 163], \"picturePath\": \"/home/pi/Pictures/im_36.jpg\"}"]
```

## Start the server
Run the server by going to the directory(/home/pi/Documents/webserver) and run the followng commands:

```
sudo node server.js
```


## Install the server
Incase you want to reinstall the server or on a different device follow the following steps:

- Setup the pi with nodejs: https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp (mainly the nodejs part at the bottem of the page)

Find a suitable directory on your pi and download this git repo to it. In the same directory as the package.json run the following command:

```
npm install
```

Sometimes it requires you to change the read/write rights to access the python scripts.
