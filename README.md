# BellAI Frontend

This repository contains a production-style static frontend dashboard for the BellAI app.

## Included
- modern dark dashboard layout
- sidebar with time, date, city, weather widgets
- top navigation and hero banner
- chat UI
- login/register modal
- responsive mobile layout
- JavaScript behavior for splash text, time updates, and UI interactions

## Files
- `index.html` — page structure
- `style.css` — production-ready styling
- `main.js` — UI logic and interactions

## Run locally
Open `index.html` directly in a browser, or serve the folder with a small local web server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes
This is a front-end shell intended to be connected to your backend auth and AI endpoints.
The existing demo does not yet send requests to a live server; it is ready for backend integration.
