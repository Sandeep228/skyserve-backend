# Geolocator App Documentation
## Introduction
The Geolocator App is a web application designed to provide geolocation services to users. It allows users to mark locations on a map, view them, and perform various operations related to geographical data. This document outlines the architecture, setup instructions, and usage guidelines for the Geolocator App.

## Technologies Used
### Backend:
Express.js </br>
Mongoose</br>
MongoDB</br>
### Frontend:
React</br>
React Leaflet</br>
Chakra UI</br>
### Authentication:
JSON Web Token (jsonwebtoken)</br>

## Setup Instructions
#### Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

Install dependencies.
```bash
npm i
```

Configure environment variables. Ensure you have MongoDB installed and running. Create a .env file and provide necessary environment variables (e.g., mongoURL, JWT_SECRET, PORT).</br>

Start the backend server.</br>
```bash
npm run server
```

#### Frontend Setup
Navigate to the frontend directory.
```bash
cd frontend
```
Install dependencies.
```bash
npm install
```
Start the frontend development server.
```bash
npm run dev
```
