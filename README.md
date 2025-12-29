# SpeakGenie Assignment

A modern language learning application built with React, TypeScript, and Vite, featuring interactive lessons, peer-to-peer calling, story-based learning, and progress tracking.

## 🚀 How to Run the Project

### Prerequisites
- Node.js (v16 or higher)
- npm or bun package manager

### Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/Sanju-Barsiwal/Assignment_speakgenie.git
cd Assignment_speakgenie
```

2. **Install dependencies**
```bash
npm install
# or if you're using bun
bun install
```

3. **Run the development server**
```bash
npm run dev
# or
bun run dev
```

4. **Open in browser**
   - Hot reload is enabled for development

### Build for Production

```bash
npm run build
# or
bun run build
```

To preview the production build:
```bash
npm run preview
# or
bun run preview
```

## 📋 Assumptions Made

1. **User Authentication**: The application doesn't include backend authentication. User profile data is assumed to be static/mocked for UI demonstration purposes.

2. **Peer Calling**: The peer-to-peer call feature UI is implemented, but actual WebRTC functionality would require additional backend services (TURN/STUN servers).

3. **Story Content**: Story cards and learning content are assumed to be fetched from a future API. Currently displaying mock data for demonstration.

4. **Progress Tracking**: XP (experience points) and progress data are managed in the frontend. In production, these would be persisted in a database.

5. **Responsive Design**: The application is designed with a mobile-first approach, optimized primarily for mobile devices with responsive breakpoints for larger screens.

6. **Theme Support**: Dark mode is implemented using `next-themes`, defaulting to system preferences.

7. **Navigation**: Single Page Application (SPA) architecture using React Router for client-side routing.

## 📁 Folder Structure

```
Assignment_speakgenie/
│
├── public/                      # Static assets
│   ├── placeholder.svg          # Placeholder images
│   └── robots.txt              # SEO robots file
│
├── src/
│   ├── assets/                 # Images, fonts, and other static resources
│   │
│   ├── components/             # Reusable React components
│   │   ├── screens/            # Main screen components
│   │   │   ├── CallScreen.tsx          # Peer calling interface
│   │   │   ├── HomeScreen.tsx          # Home dashboard
│   │   │   ├── LearnScreen.tsx         # Learning modules view
│   │   │   ├── NowPlayingScreen.tsx    # Active story/lesson player
│   │   │   └── ProfileScreen.tsx       # User profile and stats
│   │   │
│   │   ├── ActionIcon.tsx      # Reusable icon button component
│   │   ├── BottomNav.tsx       # Bottom navigation bar
│   │   ├── NavLink.tsx         # Navigation link component
│   │   ├── PeerCallCard.tsx    # Peer call card UI
│   │   ├── SectionHeader.tsx   # Section header with actions
│   │   ├── StoryCard.tsx       # Story/lesson card component
│   │   └── XPProgress.tsx      # XP progress bar component
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx      # Mobile detection hook
│   │   └── useTheme.ts         # Theme management hook
│   │
│   ├── pages/                  # Page-level components
│   │   ├── Index.tsx           # Main entry page
│   │   └── NotFound.tsx        # 404 error page
│   │
│   ├── App.css                 # Global application styles
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Global CSS and Tailwind imports
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts           # Vite environment type definitions
│
├── .gitignore                  # Git ignore rules
├── README.md                   # Project documentation
├── bun.lockb                   # Bun package lock file
├── components.json             # shadcn/ui configuration
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # App-specific TypeScript config
├── tsconfig.node.json          # Node-specific TypeScript config
└── vite.config.ts              # Vite build configuration
```

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with animations
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📱 Features

- **Home Dashboard**: Overview of learning progress and quick actions
- **Learn Screen**: Browse and access learning modules
- **Story Player**: Interactive story-based learning
- **Peer Calling**: Connect with language partners
- **Profile**: Track XP, achievements, and personal stats
- **Responsive Design**: Optimized for mobile and desktop
- **Dark Mode**: System-based theme switching


