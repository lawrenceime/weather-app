This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



# Weather App

## Description

A simple weather application built with Next.js, TypeScript, and Tailwind CSS. This app fetches and displays the current weather for a user-specified location, using the OpenWeatherMap API or mock data if the API call fails.

## Installation Instructions

Follow these steps to set up and run the project locally:

1. **Unzip the file**


2. **install dependencies**
     npm install

3.   **Setup Environmental Variables**

    NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweathermap_api_key

4.  **Run the Development Server**      
     npm run dev or yarn dev

5.   **Run tests** 
    npx jest

6.  **Additional Information**

    Tech Stack: Next.js, TypeScript, Tailwind CSS, Axios, Jest, Testing Library
    
    API Usage: The application fetches weather data from the OpenWeatherMap API. If the API is not reachable, mock data is used.

    Components:
        WeatherCard: Displays weather information.
        fetchWeatherData: Fetches weather data from the API or returns mock data if the API fails.