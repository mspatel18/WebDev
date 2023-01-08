async function getPageURL() {
  const tabs = await new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      resolve(tabs);
    });
  });
  const url = tabs[0].url;
  console.log("The URL of the active tab is: " + url);
  return url;
}

(async () => {
  let pageURL = await getPageURL();
  console.log(pageURL);
  function getYouTubeVideoId(url) {
    // Parse the URL into its component parts
    var parsedUrl = new URL(url);
    // Get the value of the `v` parameter
    var videoId = parsedUrl.searchParams.get("v");
    // If the `vi` parameter is not present, check for the last part of the pathname
    if (!videoId) {
      var pathnameParts = parsedUrl.pathname.split("/");
      videoId = pathnameParts[pathnameParts.length - 1];
    }
    if (!videoId) {
      // Split the hostname by the `.` character
      var hostnameParts = parsedUrl.hostname.split(".");
      // Check if the hostname starts with `youtu`
      if (hostnameParts[0] === "youtu") {
        // The last part of the hostname is the video ID
        videoId = hostnameParts[hostnameParts.length - 1];
      }
    }
    return videoId;
  }
  let inputElement = document.getElementById("input");
  inputElement.addEventListener("change", (event) => {
    pageURL = event.target.value;
    console.log(pageURL + " " + getYouTubeVideoId(pageURL));
    fetch(`https://youtube-mp3-download1.p.rapidapi.com/dl?id=${getYouTubeVideoId(pageURL)}`, options)
      .then((response) => response.json())
      .then((response) => displaylink(response.link))
      .catch((err) => console.error(err));
      
  });
  function displaylink(url) {
    console.log('inside display link')
    if(url != undefined){
      document.getElementById('desc').innerHTML = "Click the link below to download the mp3 file";
      document.getElementById('link').innerHTML = "Download link";
      document.getElementById('link').setAttribute('href',url);
    }else{
      document.getElementById('desc').innerHTML = "Sorry, we couldn't find the file. Try pasting the link below";
    }
  }  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'API_KEY',
      'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
    }
  };  
  fetch(`https://youtube-mp3-download1.p.rapidapi.com/dl?id=${getYouTubeVideoId(pageURL)}`, options)
    .then(response => response.json())
    .then(response => displaylink(response.link))
    .catch(err => console.error(err));
})();