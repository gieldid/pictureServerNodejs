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
Run the server by going to the directory and run the follow8ng commands:

```
sudo node server.js
```


## Install the server
- Setup the pi with nodejs: https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp

Find a suitable directory on your pi and download this git repo to it. In the same directory as the package.json run the following command:

```
npm install
```
