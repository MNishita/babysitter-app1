# 👶 Babysitter Hiring Application

A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) for hiring babysitters. Users can create profiles with their pay rate per hour and list the tasks they can perform for babies.

## 🚀 Features

- **User Registration**: Babysitters can create profiles with personal information
- **Pay Rate Management**: Set and display hourly rates prominently
- **Task Selection**: Choose from a comprehensive list of baby care tasks
- **Search & Filter**: Find babysitters by name, experience, or pay rate
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Updates**: Instant feedback and data synchronization

## 🛠️ Tech Stack

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling tool
- **CORS**: Cross-origin resource sharing
- **Body-parser**: Request body parsing middleware

### Frontend
- **React**: JavaScript library for building user interfaces
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **CSS3**: Modern styling with responsive design

## 📁 Project Structure

```
babysitter-app/
├── backend/                 # Backend server code
│   ├── models/             # MongoDB schemas
│   │   └── Babysitter.js  # Babysitter data model
│   ├── routes/             # API endpoints
│   │   └── babysitters.js # CRUD operations
│   ├── config.env         # Environment variables
│   ├── package.json       # Backend dependencies
│   └── server.js          # Main server file
├── frontend/               # React frontend code
│   ├── public/            # Static files
│   │   └── index.html     # Main HTML file
│   ├── src/               # React source code
│   │   ├── components/    # React components
│   │   │   ├── Header.js           # Navigation header
│   │   │   ├── Home.js             # Landing page
│   │   │   ├── BabysitterForm.js   # Profile creation form
│   │   │   └── BabysitterList.js   # Display all profiles
│   │   ├── App.js         # Main app component
│   │   ├── index.js       # React entry point
│   │   └── *.css          # Component stylesheets
│   └── package.json       # Frontend dependencies
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd babysitter-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up MongoDB**
   - Install MongoDB locally, or
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Update the connection string in `backend/config.env`

5. **Configure environment variables**
   ```bash
   cd ../backend
   # Edit config.env file with your MongoDB connection string
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The server will start on `http://localhost:5000`

2. **Start the frontend application**
   ```bash
   cd frontend
   npm start
   ```
   The React app will open in your browser at `http://localhost:3000`

3. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 📖 How It Works

### 1. **Home Page** (`/`)
- Welcome message and app description
- Navigation to add profiles or browse babysitters
- Feature highlights and how-to guide

### 2. **Add Babysitter Profile** (`/add-babysitter`)
- **Personal Information**: Name, phone, email
- **Pay Rate Section**: Enter hourly rate (prominently displayed)
- **Experience Level**: Beginner, Intermediate, or Expert
- **Task Selection**: Checkboxes for available baby care tasks
- Form validation and error handling

### 3. **View Babysitters** (`/babysitters`)
- **Search & Filter**: Find by name or experience
- **Sort Options**: Sort by name, pay rate, or experience
- **Profile Cards**: Display each babysitter's information
- **Pay Rate Highlight**: Prominently shows hourly rate
- **Task Tags**: Visual representation of available tasks
- **Contact Information**: Phone and email for each babysitter

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/babysitters` | Get all babysitters |
| GET | `/api/babysitters/:id` | Get specific babysitter |
| POST | `/api/babysitters` | Create new babysitter |
| PUT | `/api/babysitters/:id` | Update babysitter |
| DELETE | `/api/babysitters/:id` | Delete babysitter |

## 💡 Key Features Explained

### Pay Rate Management
- Users input their hourly rate in the form
- Pay rate is prominently displayed in green cards
- Sorting by pay rate helps families find affordable options

### Task Selection System
- Predefined list of baby care tasks
- Checkbox selection for multiple tasks
- Visual tags display selected tasks in profiles
- Tasks include: feeding, diaper changing, sleep routines, etc.

### Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox for layouts
- Media queries for different screen sizes
- Touch-friendly interface elements

## 🎨 Styling & UI

- **Modern Design**: Clean, professional appearance
- **Color Scheme**: Blue primary, green success, responsive colors
- **Typography**: Inter font family for readability
- **Animations**: Smooth hover effects and transitions
- **Cards**: Material design-inspired profile cards
- **Gradients**: Subtle background gradients for visual appeal

## 🔒 Data Validation

- **Frontend Validation**: Real-time form validation
- **Backend Validation**: Mongoose schema validation
- **Required Fields**: Name, pay rate, phone, email, tasks
- **Data Types**: Proper type checking for all inputs
- **Error Handling**: User-friendly error messages

## 🚀 Deployment

### Backend Deployment
- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Set environment variables for production
- Use MongoDB Atlas for cloud database

### Frontend Deployment
- Build the React app: `npm run build`
- Deploy to Netlify, Vercel, or GitHub Pages
- Update API endpoints for production backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify MongoDB connection
3. Ensure all dependencies are installed
4. Check that both servers are running

## 🎯 Learning Outcomes

This project demonstrates:
- **Full-stack development** with MERN stack
- **Database design** with MongoDB schemas
- **API development** with RESTful endpoints
- **Frontend state management** with React hooks
- **Responsive design** with modern CSS
- **Form handling** and validation
- **Error handling** and user feedback
- **Component architecture** in React

---

**Happy coding! 👨‍💻👩‍💻**
