# Simple Searching API integration

This is a simple web application that allows users to enter a keyword, fetch organic search results from Google (via the SerpAPI), display them on screen, and download them as a structured JSON file.

---

## Features

- Fetches organic search results from the first page of Google
- Displays result titles as linked URLs
- Allows JSON export of the results
- Fully client-side — no framework required
- Includes unit test for the result-parsing function

---

## Live Demo

[Click here to try the live app](https://simple-searching-api-integration.vercel.app/)

---

## How to Run Locally

if you want to change the code to make your own personal project:
- You can run the server using
```bash
npm start // which will run node backend/app.js on port 4000
```
- And change the url in fetch (in index.html scripts) to http://localhost:4000/search... because the server was deploy onto Render to be able to run publicly on the internet

### 1. Clone the repository

```bash
git clone https://github.com/khanh892002/simple-searching-API-integration.git
cd simple-searching-API-integration
```

### 2. Tests:
```bash
npm test
```
At the moment, the tests only cover the normal and empty input cases. The function used to test the input and API fetching is just similar but not as same as the actual one in api folder.
