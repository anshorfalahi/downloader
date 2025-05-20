const express = require("express");
const bodyParser = require("body-parser");
const btchDownloader = require("btch-downloader");

const app = express();
const PORT = process.env.PORT || 9000; // Use Heroku's PORT or fallback to 9000

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Set EJS as View Engine
app.set("view engine", "ejs");

// Halaman utama (Form input)
app.get("/", (req, res) => {
    res.render("index");
});

// Endpoint download
app.post("/download", async (req, res) => {
    const { url, platform } = req.body;

    if (!url || !platform) {
        return res.render("index", { error: "URL dan platform harus diisi!" });
    }

    try {
        let response;
        if (platform === "youtube") {
            response = await btchDownloader.youtube(url);
        } else if (platform === "facebook") {
            response = await btchDownloader.fbdown(url);
        } else if (platform === "instagram") {
            response = await btchDownloader.igdl(url);
        } else if (platform === "tiktok") {
            response = await btchDownloader.ttdl(url);
        } else if (platform === "twitter") {
            response = await btchDownloader.twitter(url);
        } else if (platform === "aio") {
            response = await btchDownloader.aio(url);
        } else if (platform === "mediafire") {
            response = await btchDownloader.mediafire(url);
        } else if (platform === "capcut") {
            response = await btchDownloader.capcut(url);
        } else if (platform === "gdrive") {
            response = await btchDownloader.gdrive(url);
        } else if (platform === "pinterest") {
            response = await btchDownloader.pinterest(url);
        } else {
            return res.render("index", { error: "Platform tidak didukung!" });
        }

        // Cek jika response error dari btchDownloader
        if (response && response.status === false) {
            return res.render("index", { error: response.message });
        }

        res.render("result", { data: response, platform });
    } catch (error) {
        res.render("index", { error: error.message });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});