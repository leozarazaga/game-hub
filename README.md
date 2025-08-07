# Game Hub

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vite](https://img.shields.io/badge/Built%20With-Vite-646CFF?logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Code Style](https://img.shields.io/badge/Code%20Style-ESLint%20%2B%20Type%20Coverage-blue)

**Game Hub** is a React + TypeScript web application inspired by [RAWG](https://rawg.io/). Users can browse and search for games using the RAWG Video Games Database API. The app includes game details, screenshots, filters, and a responsive UI.

## Preview

![Game Hub Preview](./src/assets/game-hub-preview.gif)

**Live Demo:** [game-hub-portal.netlify.app](https://game-hub-portal.netlify.app/)

## Features

-   Browse popular video games
-   Filter by genre, platform and order by
-   Light/dark mode toggle
-   Responsive design
-   Caching with React Query

## Installation

To set up this project locally, follow these steps:

```bash
git clone https://github.com/leozarazaga/game-hub.git
cd game-hub
npm install
```

## Environment Variables

Before running the project, you **must** set up an API key from [RAWG](https://rawg.io/apidocs).

1. Create a `.env` file in the root of your project.
2. Add the following variable and add your API key.

```env
VITE_API_KEY=your_rawg_api_key_here
```

##### If you don’t set this, running the app will fail with an error ⚠️

## Running the Project

To start the development server:

```bash
npm run dev
```

## Quality Checks

Run all linting, type-checking, and type-coverage checks with:

```bash
npm run check
```

This will run:

-   ESLint (`check:0-lint`)
-   TypeScript strict check (`check:1-tsc`)
-   Type coverage (requires 100%) (`check:2-type-coverage`)

## Technologies Used

-   **React 19 + TypeScript** – Component-based UI with strong typing
-   **Vite** – Fast development server and build tool
-   **Chakra UI** – Modern UI framework with built-in dark mode
-   **Zustand** – Minimal and scalable state management library
-   **Axios** – Promise-based HTTP client for API requests
-   **React Query** – Data fetching and caching
-   **ESLint + Type Coverage** – Code quality and type safety

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](./LICENSE).

You are free to use, modify, and distribute this software, provided that the original copyright notice and permission statement are included in all copies.

**Disclaimer:** This project is inspired by [RAWG](https://rawg.io/) and uses their public API to fetch video game data.  
It is a personal project for learning and demonstration purposes only. Please refer to RAWG’s [API Terms of Use](https://rawg.io/apidocs) for guidelines and restrictions.
