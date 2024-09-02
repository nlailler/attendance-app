// src/Home.js
import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to My Website</h1>
      </header>

      <main className="main-content">
        <section>
          <h2>Introduction</h2>
          <p>
            This is a sample home page created with React. It showcases a basic layout with a header, main
            content area, and footer.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
