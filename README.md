# All In One Downloader

A simple web application to download videos and media from various platforms including YouTube, Facebook, Instagram, TikTok, Twitter, Mediafire, Capcut, Google Drive, and Pinterest.

## Features

- Download videos and media from multiple platforms
- Automatic platform detection from URL
- Clean and modern UI with Tailwind CSS
- Supports both video and audio downloads (where available)

## Supported Platforms

- YouTube
- Facebook
- Instagram
- TikTok
- Twitter/X
- Mediafire
- Capcut
- Google Drive
- Pinterest
- Others (via AIO fallback)

## Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/yourusername/unduh.git
   cd unduh
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

Start the server:

```sh
npm start
```

The app will run on [http://localhost:9000](http://localhost:9000) by default.

## Deployment

This project is ready for deployment on platforms like Heroku. The `Procfile` is included for compatibility.

## Credits

- [btch-downloader](https://www.npmjs.com/package/btch-downloader) for media extraction
- [Express](https://expressjs.com/) for the web server
- [EJS](https://ejs.co/) for templating

## License

ISC
