import Head from 'next/head';
import React from 'react';
import Link from 'next/link'; // Import the Link component
import Image from 'next/image';

function Joinus() {
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
            <p className="name">WHY JOIN US?</p>
          </div>
          <pre className="pre-container">
           "Join Our Esports Team or Clan and Level Up Your Gaming Experience!<br />

Are you a passionate gamer looking for a community where you can take your skills to the next level? Look no further – our esports team or clan is the perfect place for you to thrive!<br />

🎮 Competitive Spirit: Join a team of like-minded gamers who share your passion for competition. Whether you're a seasoned pro or just starting out, our diverse community welcomes players of all skill levels.<br />

🌐 Global Network: Connect with fellow gamers from around the world. Our esports team brings together players from different backgrounds, cultures, and regions, creating an international gaming family.<br />

🤝 Teamwork and Camaraderie: Experience the thrill of teamwork as you strategize and collaborate with your teammates. Build strong bonds and lasting friendships as you work together towards victory.<br />

🏆 Professional Development: Elevate your gaming skills with access to top-notch coaching and training. Our experienced coaches and mentors are dedicated to helping you improve and reach your full potential.<br />

🎉 Exciting Tournaments: Showcase your skills in thrilling tournaments and leagues. From local events to international competitions, our esports team provides opportunities to prove your prowess on the global stage.<br />

🔥 Exclusive Resources: Gain access to exclusive resources, tips, and strategies that will enhance your gameplay. Stay updated with the latest trends and insights to stay ahead of the curve.<br />

💬 Vibrant Community: Join discussions, share strategies, and engage with fellow gamers in our vibrant online community. Exchange tips, tricks, and experiences to continuously enhance your gaming journey.<br />

👑 Recognition and Rewards: Earn recognition for your achievements and stand a chance to win exciting rewards. From in-game achievements to real-world accolades, your hard work doesn't go unnoticed.<br />

👀 Future Opportunities: Joining our esports team or clan opens doors to exciting opportunities in the gaming industry. From sponsorships to professional contracts, the possibilities are endless.<br />

Ready to take your gaming passion to new heights? Join our esports team or clan today and embark on a journey filled with competition, camaraderie, and endless gaming adventures. Let's game on, together!"<br />
Click <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfb2JeM9lvxvu25ubpKDOGvu2mSdp2v3PbUqAG_KnFmQp8hYw/viewfor"><a>Join us</a></Link> and be part of our story.

          </pre>
        </header>
      </body>
  </div>
  );
}

export default Joinus;