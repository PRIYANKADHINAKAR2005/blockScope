``BlockScope``
BlockScope is an interactive platform that leverages modern web technologies to deliver features like blockchain integration, voice-based search, category-specific news aggregation, rumor verification, and a vibrant event and community hub.

Key Features
Blockchain Integration

Ensures data integrity and secure storage.
Useful for verifying news authenticity and protecting user-generated content.
Voice-Based Search

Search functionality through voice commands for an enhanced user experience.
Category-Based News Aggregation

Fetches news articles based on user preferences (e.g., sports, technology, business).
Rumor Verification

Utilizes blockchain and APIs to cross-verify news authenticity.
Event and Community Hub

Connects users through event sharing, community discussions, and collaborative tools.
Dependencies
Core Dependencies
Axios
Used for making API requests to fetch news, geolocation, and blockchain data.
CDN:

html
Copy code
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
Web3.js / Ethers.js
Facilitates blockchain interaction for verifying and storing data.
CDN (Web3.js):

html
Copy code
<script src="https://cdn.jsdelivr.net/npm/web3/dist/web3.min.js"></script>
SpeechRecognition API
Enables voice-based search functionality (browser-native API).

Optional Libraries/Frameworks
Bootstrap
Provides responsive design and UI components.
CDN:
html
Copy code
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
How to Use BlockScope Features
Blockchain Integration

Verifies and stores news or rumors securely to ensure authenticity.
Voice-Based Search

Speak queries directly using the voice search button for seamless interaction.
Category-Specific News Aggregation

Select categories (e.g., technology, sports) to view personalized news articles.
Rumor Verification

Cross-verify any news or information by submitting it to the rumor verification feature.
Event and Community Hub

Participate in or organize events, and connect with the community to share ideas.
Dependencies in Use
Dependency	Purpose
Axios	API requests for news, location, and blockchain.
Web3.js/Ethers.js	Blockchain interaction and data storage.
SpeechRecognition	Voice-based search.
Bootstrap (optional)	Responsive and styled UI.
How to Start
Ensure API Keys are Configured:

Update your API keys (e.g., NEWS_API_KEY) in the JavaScript configuration files.
Open in Browser:

Launch home.html in a modern browser.
Features to Try:

Voice-based search: Click the microphone icon.
Rumor verification: Submit text to verify its authenticity.
News browsing: Use the categories or region filters.
Community Hub: Explore or create events.
Recommended Browsers:

Use Google Chrome or other browsers that support modern JavaScript APIs.
