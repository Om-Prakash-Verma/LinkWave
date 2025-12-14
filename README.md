# LinkWave - Open Resource Index 🌊

LinkWave is a modern, curated directory of free tools, developer resources, and privacy-focused software. Inspired by the documentation-style layout of [FMHY](https://fmhy.net), it aims to provide a clean, fast, and searchable interface for discovering high-quality digital assets.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

- **📂 Organized Documentation**: Resources categorized into clear sections and subsections.
- **🔍 Command Palette Search**: Powerful fuzzy search (Cmd/Ctrl + K) powered by [Fuse.js](https://fusejs.io/).
- **🌙 Dark/Light Mode**: Automatic system detection with a persistent toggle.
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop viewing.
- **⚡ Blazing Fast**: Built with [Vite](https://vitejs.dev/) for instant HMR and optimized builds.
- **♿ Accessible**: Semantic HTML and keyboard navigation support.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Search**: [Fuse.js](https://fusejs.io/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/linkwave.git
   cd linkwave
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist` folder, ready for deployment.

## ☁️ Deployment

### Vercel (Recommended)

LinkWave is optimized for deployment on Vercel.

1. Install the Vercel CLI or go to the [Vercel Dashboard](https://vercel.com/new).
2. Import your GitHub repository.
3. Vercel will automatically detect the Vite framework settings:
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

## 🤝 Contributing

This project currently uses a static data file (`src/data.ts`) as its database. To add a new resource:

1. Open `src/data.ts`.
2. Find the appropriate category or create a new one.
3. Add a new `LinkItem` object:
   ```typescript
   {
     title: 'Resource Name',
     url: 'https://example.com',
     description: 'A brief description of the tool.',
     tags: ['Tag1', 'Tag2'],
     isRecommended: false
   }
   ```
4. Submit a Pull Request!

## 📄 License

This project is licensed under the MIT License.
