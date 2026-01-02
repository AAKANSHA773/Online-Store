# Online Product Dashboard  Web Application

A modern product dashboard built with **React**, featuring product listing, search, filter, sorting, product details, favorites management, and comprehensive testing.

 
https://online-store-lilac-psi.vercel.app/

---

##  Features

- Product listing in a responsive grid
- Search products by title (debounced)
- Filter products by category
- Sort products by price (Low → High, High → Low)
- Product detail page with full product information
- Add and remove favorite products (Redux)
- Shimmer UI for loading states
- Accessible and responsive UI using Tailwind CSS

---

## Tech Stack

- **React**
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS**
- **Jest & React Testing Library** (Unit & Integration Testing)

---

## Setup Instructions

### Clone the Repository

git  clone AAKANSHA773/Online-Store
cd Online-Store

### Install Dependencies
npm install

### Run the Application
npm start

### The app will run on:
http://localhost:3000

### Run all unit & integration tests
npm run test

### Generate Coverage Report
npm run test -- --coverage

A coverage report will be generated inside:
coverage/


## Testing Strategy
 # Unit Tests

Redux slices (favorites add/remove logic)

Individual UI components

# Integration Tests

Search functionality

Filter by category

Sort by price

End-to-end favorite flow (UI → Redux)

Tests are written using Jest and React Testing Library, focusing on real user behavior.

