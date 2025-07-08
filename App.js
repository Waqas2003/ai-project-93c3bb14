import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Argentina Football Team</h1>
      </header>
      <main>
        <section className="hero">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Argentina_national_football_team_logo.svg/1200px-Argentina_national_football_team_logo.svg.png" alt="Argentina Football Team Logo" />
          <h2>La Albiceleste</h2>
        </section>
        <section className="players">
          <h2>Players:</h2>
          <ul>
            <li>Lionel Messi</li>
            <li>Sergio Agüero</li>
            <li>Paulo Dybala</li>
            <li>Ángel Di María</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Argentina Football Team</p>
      </footer>
    </div>
  );
}

export default App;