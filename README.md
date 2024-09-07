
# PICT Student Leave Management System (PLMS)

This is a comprehensive leave management system designed for students, faculty, and mentors of Pune Institute of Computer Technology (PICT), Pune. The system allows students to apply for leave, which is reviewed by mentors and approved by faculty.

## Features
- Student registration
- Leave applications
- Mentor and Faculty approval system
- Profile management for students and faculty
- Admin functionalities for managing system users

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** installed
- **MongoDB** running locally or a connection string to a MongoDB cluster
- A terminal or command prompt
- Environment file (`.env`) with appropriate keys (details below)

## Dependencies

- **axios**: "^1.2.1"
- **bcrypt**: "^5.0.1"
- **cors**: "^2.8.5"
- **dotenv**: "^16.0.3"
- **express**: "^4.18.2"
- **jsonwebtoken**: "^9.0.0"
- **mongoose**: "^6.7.0"
- **react**: "^18.2.0"
- **react-bootstrap**: "^2.7.0"
- **react-dom**: "^18.2.0"
- **react-hot-toast**: "^2.2.0"
- **react-icons**: "^4.4.0"
- **react-router-dom**: "^6.3.0"
- **xlsx**: "^0.18.5"

Use the following command to install the dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following variables. Ensure these values are replaced with your own private keys:

```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
AZURE_OCR_ENDPOINT=your_azure_ocr_endpoint
AZURE_OCR_KEY=your_azure_ocr_key
```

## Steps to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/PICT-Leave-Management-System.git
```

2. Navigate to the project directory:

```bash
cd PICT-Leave-Management-System
```

3. Install the dependencies:

```bash
npm install
```

4. Set up your environment variables by creating a `.env` file and adding the required keys (as shown above).

5. Run the application:

```bash
npm start
```

6. The project will be running on `http://localhost:3000/`.

## Project Structure

- `backend/`: Contains the Express.js API for user registration, login, and leave management.
- `frontend/`: Contains the React.js components for handling the user interface, including registration, login, and leave application forms.
- `context/`: Manages the global state for user authentication.
- `routes/`: Defines the API routes for various actions, such as registration, login, and leave application submission.

## Key Components

- **RegisterStudent.jsx**: Page for student registration.
- **LeavePage.jsx**: Page where students can apply for leave.
- **Faculty_Applications.jsx**: Page for faculty to view and approve/reject leave applications.
- **UpdateFacultyProfile.jsx**: Page for faculty to update their profile.
- **UpdateStudentProfile.jsx**: Page for students to update their profile.

## Additional Features

- **Export to Excel**: Faculty can export student leave data to Excel from the `Faculty_Applications.jsx` page.
- **Password Visibility Toggle**: Implemented for registration and login forms.
- **Mentor & Faculty Tables**: Faculty can view students associated with them as a mentor or faculty.

## Future Enhancements

- **Leave Data Visualization**: Faculty can view leave data using graphs and charts.
- **Admin Dashboards**: Additional admin functionalities for monitoring system usage.
- **Read the report for all the possible future scopes.**
