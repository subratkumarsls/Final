

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

          <li className="item"><Link href="/social"><a className="button-c">Socials</a></Link></li>
          <li className="item"><Link href="/about"><a className="button-c">About Us</a></Link></li>
        </ul>
      </div>
      <header>
        <div>
          <p className="name">About Us</p>
        </div>
        <pre className="pre-container">
          <br /><br />

          Greetings, fellow eSports enthusiasts! Welcome to the virtual realm of Tryout eSports. We're elated that you've found your way to our digital doorstep. Allow us to introduce ourselves—Tryout eSports is more than just a name; it's a fusion of eSports prowess and exceptional management. As of the present, this dynamic venture rests under the vigilant guidance of none other than Strike.<br /><br />

In this pixelated haven, we embody both affection and discipline. Our virtual battlegrounds echo with the clatter of keystrokes and the hum of strategic discussions. Always in motion, we're a team that thrives on our shared passion for gaming.<br /><br />

For those who share our zeal, we extend an earnest invitation. Whether you're a seasoned player or a rising star, your unique journey aligns seamlessly with ours. Embrace our virtual handshake, as we welcome you into the fold with open arms. Your dedication and fervor for the game are the cornerstones of our collective ambition.<br /><br />

Our trajectory is one of growth, a trajectory that we traverse with unwavering determination. Like pixels on a screen, we're assembling the bigger picture by relentlessly honing our skills and strategies. Each click, each maneuver, and each victory bring us closer to our goals.<br /><br />

We're thrilled to have you here, exploring what makes Tryout eSports tick. So take a virtual stroll through our digital domain, get to know us better, and catch a glimpse of the boundless potential that our team embodies. The journey is ours to navigate, and we're excited to have you along for the ride.


        </pre>
      </header>
    </div>
  );
}