# Search App

A full-stack application that allows users to search for content using the Exa API and provides the option to search directly on Google. This project is built with Flask for the backend, HTML/CSS/JavaScript for the frontend, and includes live search functionality.
Features

    Search Functionality: Users can search for content using the Exa API.
    Google Search Integration: Users can also search directly on Google.
    Live Updates: Results are updated in real-time without refreshing the page.
    CORS Support: Configured to handle cross-origin requests.

Tech Stack

    Backend: Flask
    Frontend: HTML, CSS, JavaScript
    API: Exa API
    Package Manager: pip

Installation

    Clone the Repository:

    

git clone https://github.com/yourusername/search-app.git
cd search-app

Set Up Virtual Environment:

  python3 -m venv venv
  source venv/bin/activate

Install Dependencies:

  pip install -r requirements.txt

Configure Environment Variables:

  Create a .env file in the root directory and add your API key:
  
  env
  
  API_KEY=your_api_key_here

Run the Application:

    python app.py

    The application will be running on http://localhost:5000.

Usage

    Open http://localhost:5000 in your browser.
    Enter a search query in the input field and click "Search" to get results from the Exa API.
    Click "Search on Google" to perform a Google search with the entered query.

Folder Structure

plaintext

search_app/
├── app.py
├── requirements.txt
├── .env
├── templates/
│   └── index.html
└── static/
    ├── styles.css
    └── script.js

    app.py: Main Flask application file.
    requirements.txt: Lists project dependencies.
    .env: Stores environment variables.
    templates/: Contains HTML files.
    static/: Contains CSS and JavaScript files.

Contributing

    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Make your changes.
    Commit your changes (git commit -am 'Add new feature').
    Push to the branch (git push origin feature-branch).
    Create a new Pull Request.

License

This project is licensed under the Apache License 2.0. See the LICENSE file for details.


For any inquiries, please contact:

    Email: mabubakr601@gmail.com
    GitHub: Abubakr-Mohammed
