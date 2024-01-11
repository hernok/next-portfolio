# Next Portfolio

## Overview

Welcome to **Next Portfolio**, a modern and responsive portfolio template designed by me. This portfolio is built using Next.js 14 and TypeScript, and it's styled with the Tailwind CSS framework.

## Features

- **Next.js 14 and TypeScript:** The latest version of Next.js with the robustness of TypeScript for scalable and maintainable code.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development. The default theme is set to Dark Mode, providing a sleek and modern look.
- **Responsive Dark Mode:** Integrated dark mode support in the navigation bar for a comfortable viewing experience in different lighting conditions.
- **AWS S3 Integration:** CV download functionality implemented using AWS S3, ensuring secure and reliable file hosting and retrieval.
- **Rate-Limited API:** The Next.js API is utilized with rate limiting to ensure the application's stability and prevent abuse.
- **Project Card Data:** Dynamic loading of project information from a `data.json` file located in the public folder, making it easy to update and maintain project details.
- **Environment Variables:** Use of `.env.local` for securely storing and accessing API keys and other sensitive data.
- **Vercel Hosting:** The project is deployed on Vercel, showcasing the power of serverless deployment. [View Live Site](https://next-portfolio-ruby-two.vercel.app/)
- **Interactive Hero Section:** The hero section uses `tsparticles` for an engaging and interactive user experience.

## Getting Started

To get started with this project, clone the repository to your local machine. Ensure you have Node.js installed, and then run the following commands:

```bash
npm install   # Install dependencies
npm run dev   # Run the development server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

Before running the project, create a `.env.local` file in the root directory and add your API keys and other sensitive data:

```env
# Example
NEXT_PUBLIC_API_KEY=your_api_key_here
```

## Author

**Herman Novak**
