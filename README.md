# Paradise Nursery Shopping Application

Paradise Nursery is a React-based online plant shop. Users can browse houseplants by category, add plants to a shopping cart, change quantities, remove items, and view the cart total.

## Features
- Landing page with a **Get Started** button.
- About Us page with company information.
- Three plant categories with six products in each category.
- Product thumbnails, names, descriptions, and prices.
- Add-to-cart buttons that disable after a product is added.
- Dynamic cart item count in the navigation bar.
- Cart quantity controls, remove buttons, item subtotals, and grand total.
- Checkout message: "Coming Soon".
- Redux Toolkit for cart state management and React Router for navigation.

## Technology
- React
- Vite
- React Router
- Redux Toolkit
- CSS

## Run locally
1. Install Node.js (LTS).
2. Extract this project folder.
3. Open the folder in Visual Studio Code.
4. Open Terminal → New Terminal.
5. Run `npm install`.
6. Run `npm run dev`.
7. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Main project files
- `src/App.jsx` — application routes and landing page.
- `src/App.css` — application styling and landing-page background.
- `src/components/AboutUs.jsx` — company information.
- `src/components/ProductList.jsx` — plant categories and product listing.
- `src/components/CartItem.jsx` — shopping cart page.
- `src/redux/CartSlice.jsx` — Redux cart slice.
- `src/redux/store.js` — Redux store configuration.
