

import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function About() {
  return (
    <div style={{ fontFamily: 'Lato, sans-serif', color: '#f0f0f0' }}>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: rgb(33, 33, 33);
          color: #fff;
          font-family: Arial, sans-serif;
        }

        /* Add a general rule for mobile-first responsiveness */
        @media (max-width: 767px) {
          /* ... Other styles ... */
          .body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgb(33, 33, 33) /* Adjust the opacity as needed */
            z-index: -1; /* Place the overlay below the content */
          }
          /* Rest of your styles ... */
        }

        /* Larger screens */
        @media (min-width: 768px) {
          /* ... Other styles ... */
          .body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgb(33, 33, 33); /* Adjust the opacity as needed */
            z-index: -1; /* Place the overlay below the content */
          }
          /* Rest of your styles ... */
        }

        /* Tablet and larger screens */
        @media (min-width: 1024px) {
          /* ... Other styles ... */
          .body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgb(33, 33, 33); /* Adjust the opacity as needed */
            z-index: -1; /* Place the overlay below the content */
          }
          /* Rest of your styles ... */
        }

        /* Large screens and beyond */
        @media (min-width: 1200px) {
          /* ... Other styles ... */
          .body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgb(33, 33, 33); /* Adjust the opacity as needed */
            z-index: -1; /* Place the overlay below the content */
          }
          /* Rest of your styles ... */
        }

        /* Your existing CSS goes here... */

        .nav {
          display: flex;
          background-color: rgba(0, 0, 0, 0.9);
          height: 100px;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }

        .logo {
          height: 60px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .button-c {
          font-family: "Arial", sans-serif;
          margin-top: 10px;
          align-self: self-start;
          padding: 0.6em 2em;
          border: none;
          outline: none;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          cursor: pointer;
          position: relative;
          z-index: 0;
          border-radius: 5px;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          transition: background-color 0.3s;
        }

        .button-c:hover {
          background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00);
        }

        .button {
          align-items: end;
          gap: 30px;
          display: flex;
          list-style: none;
        }

        .name {
          margin-top: 30px;
          font-family: "Impact", sans-serif;
          text-align: center;
          font-size: 60px;
          color: #fff;
          text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
        }

        .pre-container {
          margin: 15px;
          padding: 25px;
          border-radius: 10px;
          white-space: pre-wrap;
          font-family: "Courier New", monospace;
          font-size: 20px;
          color: #f0f0f0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
          background-color: rgba(0, 0, 0, 0.7);
        }
      `}</style>
      <div className="nav">
        <Image src='/logo.jpg' height={60} width={60} />
      <ul className="button">
          <li className="item"><Link href="/"><a className="button-c">Home</a></Link></li>
          <li className="item"><Link href="/joinus"><a className="button-c">Join us</a></Link></li>
          <li className="item"><Link href="/career"><a className="button-c">Career</a></Link></li>
          <li className="item"><Link href="/social"><a className="button-c">Socials</a></Link></li>
          <li className="item"><Link href="/about"><a className="button-c">About Us</a></Link></li>
        </ul>
      </div>
      <header>
        <div>
          <p className="name">OUR FAMILY</p>
        </div>
        <pre className="pre-container">
          **About Us: Welcome to TryOut Esports**<br /><br />

At TryOut Esports, we're more than just a gaming community – we're a family united by our passion for competitive gaming. Founded with a shared love for esports, our journey began with a vision to provide a platform where gamers of all levels can come together, showcase their skills, and forge lasting connections.<br /><br />

**Meet Our Team:**<br /><br />

👑 **Strike (Owner & In-Game Leader)** 🎮<br />
Strike, our visionary founder and in-game leader, guides our team with both strategic prowess and gaming expertise. Leading by example, Strike not only sets the tone for our community but also paves the way to victory in every match.<br /><br />

🏴‍☠️ **Pirate (Head Manager & Support Player)** ⚓<br />
Pirate, our Head Manager and support player, ensures that our community sails smoothly through every challenge. Just as a support player boosts the team, Pirate lifts us with exceptional management skills and dedication.<br /><br />

🧙‍♂️ **Godlin (Manager & Entry Fragger)** 🪄<br />
Godlin, our manager and entry fragger, possesses the ability to break through barriers and initiate action. With keen management and fragging skills, Godlin keeps us moving forward both in-game and off.<br /><br />

🦸‍♂️ **Alex (Staff & Assaulter)** 🦹‍♂️<br />
Alex, a staff member and assaulter, brings energy and action to every aspect of our community. Their dedication to fostering a vibrant atmosphere parallels their determination on the virtual battleground.<br /><br />

**Our Lineup:**<br /><br />

🐍 **Viper (Assaulter)** 🐍<br />
Viper strikes fear into opponents with their aggressive playstyle. As an assaulter, Viper leads the charge, overwhelming enemies and securing critical advantages.<br /><br />

🦊 **Wentox (Entry Fragger)** 🦊<br />
Wentox, our entry fragger, is the frontline force that opens the path for success. With fearless determination, Wentox ensures our team is always one step ahead.<br /><br />

🥛 **Doodhwala (Mid-Range Spray)** 🥛<br />
Doodhwala covers the mid-range with precision and skill. Their calculated approach and accurate shots make them a cornerstone of our strategic gameplay.<br /><br />


At TryOut Esports, we're more than a team – we're a community of individuals who share a common goal: to elevate esports and share its excitement with the world. Join us as we embark on a journey filled with camaraderie, competition, and the thrill of gaming. Together, we're rewriting the rules and shaping the future of esports.<br /><br />

Let's make every match count and every victory legendary. Welcome to TryOut Esports – where the game never ends!<br /><br />


        </pre>
      </header>
    </div>
  );
}