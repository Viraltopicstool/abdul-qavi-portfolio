# Abdul Qavi Portfolio Website

A responsive five-page static portfolio website built with HTML, CSS and JavaScript. It is suitable for GitHub Pages.

## Files

- `index.html` — Home
- `about.html` — About
- `services.html` — Services
- `portfolio.html` — Portfolio
- `contact.html` — Contact
- `css/style.css` — shared design, layout and responsive styling
- `js/script.js` — mobile menu, scroll animations, footer year and contact form email preparation

## Before publishing

1. Replace the sample portrait and project image URLs in the HTML files with your own images. To use repository images, upload them into `images/` and use paths such as `images/qavi.jpg`.
2. Replace `YOUR_EMAIL@example.com` in `js/script.js` with the email address that should receive enquiries. Also update the visible email address in `contact.html`.
3. Replace the sample LinkedIn and Instagram links with your actual profile URLs.
4. Replace sample portfolio items with real projects. Do not present sample images as completed client work.
5. Add your real experience and achievements to `about.html`.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `abdul-qavi-portfolio`.
2. Upload all files and folders in this project to the repository root. Make sure `index.html` is at the root, not inside another nested folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to publish your site. The public URL will appear in the Pages settings.

## Contact form note

The contact form currently prepares a message using the visitor's default email application (`mailto:`). It does not send messages directly through GitHub Pages. For direct online submissions, connect a form provider or a backend service.

## Image notes

The included design uses remote sample photos from Unsplash. Replace them with your own images before launching your personal brand website. You can use the `images/` folder for your local project images.
