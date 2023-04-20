// popup.js
// Define arrays of words to use in the sentence
const nouns = ["climate+change", "social+media", "machine+learning", "virtual+reality", "sleep+deprivation", "exercise", "parental+involvement", "programming+paradigms", "blockchain+technology", "artificial+intelligence", "music", "meditation", "brain-computer+interfaces", "robotics", "nanotechnology", "biofuels", "gene+editing", "quantum+computing", "neuroscience", "cybersecurity", "renewable+energy", "smart+cities", "augmented+reality", "e-commerce", "cryptocurrencies", "big+data", "internet+of+things", "wearable+technology", "3D+printing", "digital+marketing", "autonomous+vehicles", "precision+medicine", "agricultural+biotechnology", "smart+grids", "smart+homes", "hydrogen+fuel+cells", "mobile+computing", "cloud+computing", "natural+language+processing", "computer+vision", "edge+computing", "digital+twins", "gamification", "virtual+assistants", "blockchain-based+supply+chains", "social+robotics", "artificial+general+intelligence"]
const verbs = ["impact", "use", "study", "explore", "examine", "investigate", "analyze", "evaluate", "assess", "test", "probe", "develop", "design", "implement", "deploy", "model", "simulate", "predict", "understand", "improve", "optimize", "discover", "detect", "diagnose", "treat", "detect", "prevent", "mitigate", "manage", "monitor", "secure", "protect", "enhance", "facilitate", "streamline", "transform", "augment", "assist", "enable", "empower", "facilitate", "integrate", "leverage", "utilize", "validate", "communicate"]
const adjectives = ["effective", "ethical", "innovative", "sustainable", "promising", "controversial", "challenging", "complex", "fascinating", "cutting-edge", "interdisciplinary", "disruptive", "revolutionary", "groundbreaking", "game-changing", "transformational", "novel", "advanced", "state-of-the-art", "leading-edge", "innovative", "dynamic", "flexible", "scalable", "resilient", "robust", "secure", "efficient", "cost-effective", "user-friendly", "reliable", "accessible", "inclusive", "personalized", "responsive", "intelligent", "smart", "autonomous", "distributed", "decentralized", "open-source", "collaborative", "crowdsourced", "agile", "creative", "imaginative", "data-driven", "knowledge-intensive", "context-aware", "adaptive", "human-centered"]

// Function to generate a random sentence
function generateSentence() {
  // Choose a random word from each array
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  // Construct the sentence
  const sentence = `${noun}+${verb}+${adjective}.`;

  // Return the sentence
  return sentence;
}

// Example usage
console.log(generateSentence()); // Output: "bird fights happy."

// Add a click event listener to the button
document.getElementById("searchButton").addEventListener("click", function () {
    // Get the active tab
      for (let i = 0; i < 10; i++) {
        let sentence = generateSentence();
        chrome.tabs.create({ url: "https://www.bing.com/search?q=" + sentence}); 
      }
  });