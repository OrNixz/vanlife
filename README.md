# VanLife 🚐

## Brief Explanation

VanLife is a front‑end web application created as a project for the **[Advanced React course on Scrimba](https://scrimba.com/learn/react)**. It emulates a van‑rental marketplace, enabling visitors to search, filter, and inspect van information, while van owners (hosts) can administrate their listings via a dedicated dashboard.

The purpose of this project extends beyond delivering a functional UI; it also demonstrates advanced React techniques, especially the use of React Router for sophisticated navigation and MirageJS to provide a realistic mock API server.

## Demo & Key Features 🚀
### Public Features
- **Van Gallery**: The home page displays all available vans for rent.
- **Smart Filtering**: Users can easily filter vans by type (`Simple`, `Luxury`, `Rugged`) to find one that suits their needs.
- **Detail Pages**: Each van has its own detail page displaying comprehensive information, including a description, price, and images.
- **Seamless Navigation**: A smooth user experience thanks to the implementation of client-side routing with React Router.

### Host Dashboard Features
- **Authentication**: A simple login page to verify hosts.
- **Main Dashboard:** Provides a quick overview of income and reviews (static data for learning purposes).
- **Van Management**: Hosts can view a list of their rented vans, each with its own detail page within the dashboard.
- **Protected Routing**: The entire dashboard area is secured and can only be accessed after a successful login. This demonstrates the implementation of protected routes, a key concept in this course.

## Technologies Used 🛠️
- React: A JavaScript library for building user interfaces.
- Vite: A modern front-end build tool for fast development.
- Firebase: Backend platform for the database (Firestore) and user authentication (Firebase Auth).
- React Router: For client-side routing and navigation within the app.
- MirageJS: Used for API mocking during the initial development stages.

## Running The Project Locally ⚡️

Follow these steps to set up and run the project on your local machine. **Configuring Firebase is required.**

1.  **Clone the Repository**:
    ```bash
    git clone [https://github.com/OrNixz/vanlife.git](https://github.com/OrNixz/vanlife.git)
    cd vanlife
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Set Up Firebase**:
    * Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    * In your project, create a new **Web App**.
    * Firebase will give you a `firebaseConfig` object. You will need these keys.
    * Go to the **Firestore Database** section and create a database. Start in **test mode** for easy setup.
    * Go to the **Authentication** section, enable the **Email/Password** sign-in method.

4.  **Configure Environment Variables**:
    * In the root of your project folder, create a new file named `.env`.
    * Copy the keys from your Firebase `firebaseConfig` object into the `.env` file. **Important**: You must prefix each variable with `VITE_` for Vite to recognize it.

      ```env
      # .env file
      VITE_API_KEY="your-api-key"
      VITE_AUTH_DOMAIN="your-auth-domain"
      VITE_PROJECT_ID="your-project-id"
      VITE_STORAGE_BUCKET="your-storage-bucket"
      VITE_MESSAGING_SENDER_ID="your-messaging-sender-id"
      VITE_APP_ID="your-app-id"
      ```

5.  **Run the Development Server**:
    ```bash
    npm run dev
    ```

6.  **Access the Application**:

    Open your browser and navigate to `http://localhost:5173`. The app is now running with your own Firebase backend!

##  Learnings & Key Concepts 🎓

This full-stack version of the project is an excellent case study for understanding:

* **Integrating a BaaS (Firebase) with a React Application**: The complete workflow of connecting a front-end app to a cloud backend.
* **Real-time CRUD Operations**: Performing Create, Read, Update, and Delete operations against a live Firestore database.
* **Live Authentication Management**: Handling user sign-up, login, and logout, and persisting auth state in a real-world scenario.
* **Environment Variables**: The importance of securely managing API keys and configuration secrets.
* **Evolution from Mocking to Production**: Understanding the development lifecycle from a mocked front-end to a data-persistent application.

## License 📄
This project is licensed under the MIT License. See the `LICENSE` file for more details.
