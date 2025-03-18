# MERN Stack Code Reviewer AI

A web application that automatically reviews code snippets using Google Gemini AI, providing feedback, suggestions, and best practices to improve code quality.

## Overview

This project combines the MERN stack (MongoDB, Express, React, Node.js) with Google Gemini AI to create an interactive code review tool. Users can submit code snippets in various programming languages and receive AI-powered feedback on code quality, potential bugs, style issues, and optimization suggestions.

## Features

- **AI-Powered Code Reviews**: Leverages Google Gemini to analyze code and provide intelligent feedback
- **Multiple Language Support**: Reviews code written in JavaScript, Python, Java, and more
- **User Authentication**: Secure login and registration system
- **Review History**: Store and access previous code reviews
- **Interactive UI**: Clean and responsive user interface for submitting code and viewing feedback

## Tech Stack

### Frontend

- React.js
- Redux for state management
- Axios for API requests
- CSS for styling

### Backend

- Node.js with Express
- MongoDB for database
- JWT for authentication

### AI Integration

- Google Gemini API for code analysis

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Google Gemini API key

### Setup Instructions

1. **Clone the repository**

   ```
   git clone https://github.com/anishaxtha/CodeReviewer-AI.git
   cd CodeReviewerAI
   ```

2. **Install dependencies**

   ```
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the server directory:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Start the application**

   ```
   # Start backend server
   cd backend
   npm start

   # In a new terminal, start frontend
   cd frontend
   npm run dev
   ```

5. **Access the application**

   Open your browser and navigate to `http://localhost:5173`

## Usage

1. Register an account or log in to your existing account
2. Paste your code snippet into the editor
3. Select the programming language
4. Click "Review Code" to get AI-powered feedback
5. View the detailed analysis and suggestions
6. Save the review or make changes based on feedback

## API Endpoints

### Authentication

<!-- - `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user -->

### Code Reviews

- `POST /api/ai/get-response` - Submit code for review
<!-- - `GET /api/reviews` - Get all reviews for the current user
- `GET /api/reviews/:id` - Get a specific review
- `DELETE /api/reviews/:id` - Delete a review -->

## Future Enhancements

- Collaborative code reviews
- Code formatting options
- Support for more programming languages
- Integration with GitHub repositories
- Real-time code editing with suggestions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Gemini AI for powering the code analysis
- MongoDB Atlas for database hosting
- The MERN stack community for resources and inspiration
