# Astronomy Picture of the Day
## What is this?
This is a variation of NASA's Astronomy Picture of the Day site (https://apod.nasa.gov/apod/astropix.html). It started as a weekly school project but after that I decided to continue to work on it and make it better. Because I worked on a private repo managed by the school, I can't deploy or fork that, so I migrated my project to this public repo. (The original repo: https://github.com/CodecoolGlobal/ask-nasa-javascript-G-Sarkadi)<br />
### Main page
The main page shows the latest picture of the day. This could be a picture, a video, or sometimes an embedded HTML file. If you click the picture, it opens full-size in a new tab. This shows a HD version of the image, if available. At the bottom of the page, you can select a different date from a dropdown calendar. The daily data served by the API starts in 1995. This can cause issues, because some of the data points to a dead link or the data contains Adobe Flash or the embedded HTML doesn't open correctly.<br />
### Gallery
The gallery is a random selection from previous days, shown as cards. The image of the card is the actual image (if it's a picture) or a video thumbnail (in case of a video). Some of the early videos don't have a thumbnail image, or the data contains embedded HTML. These things are filtered out from the fetched data and don't show up in the gallery to avoid cards without images. Card duplications can occur because of the random selection from the API, and also because some pictures are used at multiple dates. If you click on the card, a modal window pops up, with similar information like on the main page. Again, if you click on the picture, it opens in a new tab.<br />
### Other
There is also an about page, with the short version of this readme, and a custom 404 page, in case something breaks. The main page and the gallery shows a short loading error message if the fetching of the data from the API fails.

## How is it working?
The source of the data is an open NASA API (https://api.nasa.gov/). The front-end uses React, Bootstrap and CSS. React handles the server-side routing, state management and fetching data from the server. The back-end is a light-weight Express proxy server, which handles the communication with the API, hides the API keys and does some basic cache control and rate limiting.

## Where can I see it?
The site is currently hosted by: https://www.cyclic.sh/. You can check it at: https://apod-gallery.cyclic.app/
