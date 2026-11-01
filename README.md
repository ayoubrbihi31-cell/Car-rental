# Atlas Drive – Car Rental Booking App
Static web app (HTML + Tailwind CDN + vanilla JS). Data lives in the browser's LocalStorage.

## Run locally
Open `index.html`, or run `npx serve .`.

## Deploy
1. Push `index.html`, `style.css`, `app.js`, `README.md` to a GitHub repo.
2. On vercel.com choose **Add New → Project**, import the repo.
3. Framework Preset: **Other**. No build command, no output directory. Click **Deploy**.

## Admin
Open `#admin`. Default PIN: `1234` (change `ADMIN_PIN` in `app.js`).

## Important limits
- LocalStorage is per-browser: bookings made on a customer's phone do **not** appear on the admin's device. For real use, replace `load()`/`save()` in `app.js` with calls to a backend (e.g. Supabase, Firebase).
- The admin PIN is client-side only and not real security.
