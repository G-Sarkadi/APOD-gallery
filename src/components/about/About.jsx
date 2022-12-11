
const About = () => {
    return (
        <div className="contentContainer">
            <h1>About</h1>
            <div className="aboutContainer">
                <img className="aboutImage" src="/aboutBackground.png" alt="astronaut" />
                <div className="aboutTextContainer">
                    <p>This is a variation of NASA's Astronomy Picture of the Day site.
                        The main page shows the actual picture of the day and the gallery is a random selection
                        from previous days.
                    </p>
                    <p>
                        This page started as a weekly school project but after that I decided to continue to work on it and make it better.
                        The source of the data is an open NASA API (<a href="https://api.nasa.gov/">https://api.nasa.gov/</a>).
                        The front-end uses React, Bootstrap and CSS, and the back-end is a light-weight Express proxy server,
                        which handles the communication with the API.
                    </p>
                    <p>Thank you for visiting and please check out the GitHub repository of the project: <a href="https://github.com/G-Sarkadi/APOD-gallery">
                        <img className="GitHubLogo" src="/github-mark.png" alt="GitHub logo" height="20px" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About