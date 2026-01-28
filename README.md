# 🖥️ Screen Share Test Application

A modern, production-quality **Screen Sharing Test App** built with **React + Vite + Tailwind CSS**.  
This app simulates real-world screen sharing behavior (similar to Google Meet / Zoom) with a **polished UI, explicit lifecycle handling, and clean architecture**.

---

## 🌟 Project Overview

This project demonstrates how to:

- Request screen-sharing permissions from the browser
- Preview the shared screen inside the application
- Handle pause, resume, stop, retry flows
- Gracefully manage permission errors and unexpected stream endings
- Build a modern **glass-morphism UI** with animations

Designed to be **interview-ready** and **real-world practical**.

---

## 🚀 Key Features

### ✅ Screen Sharing Lifecycle
- Start screen sharing
- Pause screen capture
- Resume capture
- Stop sharing explicitly
- Retry safely after stopping

---

### 🔐 Permission Status Handling
Visual permission indicators using badges:

- 🟢 **Granted**
- 🟡 **Requesting**
- 🔴 **Denied**
- ⚪ **Cancelled**
- 🔵 **Ended**

---

### 🎥 Live Preview Panel
- Embedded live screen preview
- “Live Preview” indicator
- No empty or confusing states
- Clean fallback while stream initializes

---

### 🧭 Share Type Indicator
Displays what the user is sharing:
- Entire Screen
- Application Window
- Browser Tab

Uses:
```js
stream.getVideoTracks()[0].label
🧹 Auto Cleanup & Safety

Stops all media tracks on stop

Handles:

User cancels screen picker

Browser “Stop sharing” button

Unexpected stream termination

Prevents memory leaks

🎨 Polished UI / UX

Glass-morphism panels

Subtle glow effects

Hover animations

Smooth transitions

Center-aligned responsive layout

🛠️ Tech Stack

React 18

Vite

Tailwind CSS

React Router DOM

Web Media API (getDisplayMedia)

📁 Project Structure
screen-share-test/
│
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   ├── PermissionBadge.jsx
│   │   ├── ScreenControls.jsx
│   │   └── ShareInfo.jsx
│   │
│   ├── hooks/
│   │   └── useScreenShare.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ScreenTest.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

🧠 Architecture Explanation
📄 Pages (src/pages)

Home.jsx → Landing page

ScreenTest.jsx → Screen sharing workflow

Pages compose multiple components and do not contain low-level logic.

🧩 Components (src/components)

Reusable, presentational UI components:

Navbar → App navigation

Button → Consistent button styles

PermissionBadge → Permission state indicator

ScreenControls → Pause / Resume / Stop

ShareInfo → Displays what is being shared

🪝 Custom Hook (useScreenShare.js)

Encapsulates all screen-sharing logic:

Requests screen capture

Manages permission state

Handles pause / resume

Cleans up tracks

Handles edge cases safely

Keeps UI clean and logic reusable.

📦 Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/your-username/screen-share-test.git
cd screen-share-test

2️⃣ Install Dependencies
npm install

⚠️ Node Version

Recommended:

Node.js >= 20

🎨 Tailwind CSS Setup

Already configured.
If needed manually:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

▶️ Running the Application
npm run dev


Open in browser:

http://localhost:5173

🧪 How to Use the App

Open the Home page

Click Start Screen Test

Choose what to share:

Entire Screen

Window

Browser Tab

Live preview appears inside the app

Use controls:

⏸ Pause

▶ Resume

⛔ Stop

Retry or navigate back to Home

🌐 Browser Support

Best supported:

✅ Chrome

✅ Edge

✅ Brave

⚠️ Firefox has limited preview support due to browser restrictions.

🧹 Cleanup Logic Example
stream.getTracks().forEach(track => track.stop());


Ensures:

No memory leaks

No background screen capture

Safe retry behavior

🎤 Interview Talking Points

This project demonstrates:

Real browser API usage

Permission lifecycle handling

Clean React architecture

Custom hooks

UX-driven state management

Explicit resource cleanup

This project alone can carry a frontend interview discussion.

🚀 Future Enhancements (Optional)

Screen recording

Screenshot capture

FPS / resolution display

Audio sharing toggle

Picture-in-picture preview

Theme switcher

🏁 Final Notes

This is not a toy demo.
It is a production-style implementation built to demonstrate strong frontend fundamentals.

If you can explain this clearly:

You will stand out in interviews.


---

If you want next:
- ✅ **Resume bullet points**
- ✅ **GitHub repo description**
- ✅ **60-second interview explanation**
- ✅ **Deployment steps (Vercel / Netlify)**

Just tell me 👊
