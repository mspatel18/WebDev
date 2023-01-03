var inputField = document.getElementById('inputID');
// var downloadButton = document.getElementById('downloadButton');
function getInputText() {
  // Select the input element
  const inputElement = document.getElementById('inputID');

  // Get the value of the input element
  const inputText = inputElement.value;

  // Return the input text
  return inputText;
}
// Listen for clicks on the save button

console.log(document.getElementById('output'))
inputField.addEventListener('change', function() {
  console.log(getInputText());
  function displaylink(link){
    // console.log(document.getElementById('output'))
    chrome.tabs.create({url: link});
  }
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
    }
  };
  fetch('https://youtube-mp3-download1.p.rapidapi.com/dl?id=PXGycbkbtW0', options)
    .then(response => response.json())
    .then(response => displaylink(response.link))
    .catch(err => console.error(err));
  
});

