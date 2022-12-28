# Astronomy Picture of the Day
## What is this?
This is a variation of NASA's Astronomy Picture of the Day site (https://apod.nasa.gov/apod/astropix.html). It started as a school project but after that I decided to continue to work on it and make it better. (The original repo: https://github.com/CodecoolGlobal/ask-nasa-javascript-G-Sarkadi)<br />
### Main page
The main page shows the actual picture of the day and the gallery is a random selection from previous days.<br />
On the main page you can select a date from a dropdown calendar and the site fetches and show the content of that day. This could be a picture, a video, or sometimes an embedded HTML file. If you click the picture, it opens full-size in a new tab. This shows a hd version of the image, if available.<br />
### Gallery
In the gallery the content is shown in cards. The image of the card is the actual image (if it's a picture) or a video thumbnail (in case of a video). The daily data served by the API starts in 1995. This can cause issues, because some of the early videos don't have a thumbnail image, or it contains Adobe Flash or embedded HTML. These things are filtered out from the gallery to avoid cards with no image. If you click on the card, a modal windows pops up, with similar information like on the main page. Again, if you click on the picture, it opens in a new tab.<br />
### Other
There is also an about page, with the short version of this readme, and a custom 404 page, in case something breaks.

## How is it working?
The source of the data is an open NASA API (https://api.nasa.gov/). The front-end uses React, Bootstrap and CSS. React handles the server-side routing, state management and fetching data from the server. The back-end is a light-weight Express proxy server, which handles the communication with the API, hides the API keys and does some basic cache control and rate limiting.

## Where can I see it?
The site is currently hosted by: https://www.cyclic.sh/. You can check it at: https://apod-gallery.cyclic.app/
