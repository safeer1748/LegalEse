# LegalEse - Legal Document Management System

## Overview
LegalEse is a web-based legal document management system built with React and Node.js. The application provides a modern interface for managing legal documents with features like document generation, email notifications, and user authentication.

## Project Structure
```
├── frontend/           # React frontend application
│   ├── src/           # Source files
│   ├── public/        # Public assets
│   └── ...
└── nodemailer/        # Backend email service
    ├── routes/        # API routes
    └── ...
```

## Technologies Used

### Frontend
- React.js
- Vite
- TailwindCSS
- Flowbite React Components
- Firebase (Authentication & Storage)
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- Nodemailer
- CORS
- dotenv

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account and configuration

### Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

3. Install Backend Dependencies
```bash
cd nodemailer
npm install
```

4. Configure Environment Variables
Create `.env` files in both frontend and backend directories with necessary configurations.

Frontend `.env`:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Backend `.env`:
```
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### Running the Application

1. Start the Frontend
```bash
cd frontend
npm run dev
```

2. Start the Backend
```bash
cd nodemailer
node app.js
```

## Features
- User Authentication
- Document Management
- Email Notifications
- Modern Responsive UI
- Secure Document Storage
- Real-time Updates