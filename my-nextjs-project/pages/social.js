import Head from 'next/head';
import React from 'react';
import Link from 'next/link'; // Import the Link component
import Image from 'next/image';


function Joinus() {
  return (
    <>
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
      <body className="body">
        <div className="nav">
        <Image src='/logo.jpg' height={60} width={60} />
          <ul className="button">
            <li className="item">
              <Link href="/">
                <a className="button-c">Home</a>
              </Link>
            </li>
            <li className="item">
                <Link href="/joinus">
                <a className="button-c">Join us</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/social">
                <a className="button-c">Social</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/about">
                <a className="button-c">About Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <header>
          <div>
            <p className="name">OUR SOCIALS</p>
          </div>
          <pre className="pre-container">
        🎮 Join Our Gaming Community! 🎮<br /><br />

Welcome to the TryOut Esports Community! 🚀🎉<br /><br />

Looking for a place to connect with fellow gamers, discuss strategies, and stay updated on the latest gaming events? Look no further! Whether you're a casual gamer or a competitive esports enthusiast, our community is the perfect place for you.<br /><br />

🔗 Join our Discord server to:<br /><br />

📣 Engage in Meaningful Discussions: Share your gaming experiences, ask questions, and exchange tips with like-minded gamers.<br /><br />

🏆 Stay Informed: Get exclusive access to information about upcoming tournaments, leagues, and gaming events.<br /><br />

💬 Voice Channels: Team up with others, communicate effectively, and enhance your gaming experience through voice communication.<br /><br />

🎮 Game-specific Channels: Connect with players of specific games and build friendships based on shared interests.<br /><br />

Follow us on Instagram to:<br /><br />

📸 Experience Gaming Highlights: Dive into the exciting world of gaming with stunning gameplay moments and epic victories.<br /><br />

🎉 Stay Updated: Get a sneak peek into our gaming tournaments, events, and behind-the-scenes action.<br /><br />

🤝 Connect with the Community: Meet fellow gamers, content creators, and esports enthusiasts who are part of the TryOut Esports family.<br /><br />

💬 Engage in Interactive Content: Participate in polls, quizzes, and gaming discussions to share your insights and opinions.<br /><br />

Join our vibrant gaming community and become a part of the journey! Let's level up together! 🚀🎮<br /><br />

🔗 Discord Invite Link: <Link href="https://discord.gg/cZyghsfmMp"><a>Discord</a></Link><br />
🔗 Follow us on Instagram: <Link href="https://instagram.com/tryout_esports?igshid=OGQ5ZDc2ODk2ZA=="><a>Instagram</a></Link><br />
          </pre>
        </header>
      </body>
    </>
  );
}

export default Joinus;