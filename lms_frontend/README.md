# LMS Frontend (Ocean Professional)

Modern, lightweight React LMS UI with routing, theme tokens, and minimal dependencies.

## Quick Start

1) Copy environment file
- cp .env.example .env
- Adjust REACT_APP_API_BASE to your backend URL (or leave blank for same-origin)

2) Install dependencies
- npm install

3) Run dev server
- npm start
- App runs at http://localhost:3000

## Environment Variables

The app reads configuration from REACT_APP_* variables:
- REACT_APP_API_BASE or REACT_APP_BACKEND_URL: Base URL for API requests
- REACT_APP_WS_URL: WebSocket endpoint (unused stub now)
- REACT_APP_LOG_LEVEL: debug | info | warn | error | silent
- REACT_APP_FEATURE_FLAGS: Comma-separated list of enabled flags
- See .env.example for full list

## Architecture

- Routing: react-router-dom v6
- Layout: Header (theme toggle), Sidebar (search/filter placeholder), Main content
- Theme: Ocean Professional CSS variables in src/styles/theme.css
- Services: fetch/AbortController wrapper in src/services/http.js
- Hooks: useAsync + feature hooks (courses, course, lesson, profile)
- Error Handling: ErrorBoundary at App level
- ProtectedRoute: Stub that can be extended with auth

## Routes
- / : Courses list
- /courses/:courseId : Course detail
- /courses/:courseId/lessons/:lessonId : Lesson viewer
- /account : Account profile
- * : 404

## Notes
- Placeholder API calls fall back to mock data if backend is not available.
- Logs are guarded by REACT_APP_LOG_LEVEL.

Reviewed & Approved by Frontend Engineering.
