# EJS Express Login Application

A simple and beautiful login application built with Express.js and EJS templating engine.

## Features

- 🔐 Secure login system
- 🎨 Modern and responsive UI design
- 📱 Mobile-friendly interface
- ✅ Form validation
- 🚀 Fast and lightweight

## Screenshots

- **Login Page**: Clean login form with gradient background
- **Dashboard**: Personalized dashboard with user statistics

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <your-github-repo-url>
cd Ejsex
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the application:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:3000/login
```

3. Login with the following credentials:
   - **Username**: `Ajay`
   - **Password**: `1234`

## Project Structure

```
Ejsex/
├── views/
│   ├── login.ejs      # Login page template
│   └── dashboard.ejs  # Dashboard page template
├── server.js          # Main server file
├── package.json       # Project dependencies and scripts
└── README.md         # This file
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with modern design patterns

## API Endpoints

- `GET /login` - Display login page
- `POST /login` - Process login form submission

## Development

To run the application in development mode:

```bash
npm start
```

The server will start on `http://localhost:3000`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Created by Ajay Kumar

---

**Note**: This is a demo application with hardcoded credentials for demonstration purposes. In a production environment, implement proper authentication, password hashing, and database integration.
