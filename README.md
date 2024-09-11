# CRUD Application

This is a CRUD (Create, Read, Update, Delete) application built using React.js for the frontend, Node.js for the backend, and MongoDB for the database. It allows users to perform basic CRUD operations on data.

## Features

- Create new records
- Read (view) existing records
- Update existing records
- Delete records

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Others:** Mongoose, Cors, Axios

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (running instance)

## Installation

Follow these steps to get the application running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/Aditya-Mohite/CRUD-APP.git
cd CRUD-APP
```

## Run the Applicaition

### 1. Setup Frontend
- Navigate to the 'client' directory

    ```bash
    cd client
    ```
- Start the development server.

    ```bash
    npm run dev
    ```

### 2. Setup Backend
- Navigate to the 'server' directory

    ```bash
    cd server
    ```

- Configure MongoDB connection.
    ```bash
    MONGODB_URI="Your_MongoDB_cluster_link"
    PORT=8003
    ```

- Start the backend server using nodemon.
    ```bash
    nodemon app.js
    ```

------------------
