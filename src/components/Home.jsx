import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
    <main>
        <h1>AsadTech</h1>
        <p>Solutions to all your problems</p>
    </main>
    </div>
    <div className='home2'>
      <img src={vg} alt="Graphics" />
      <div>
        <p>
        A tech support website helps users quickly resolve technical issues with easy-to-follow guides, FAQs, and troubleshooting tips for software, hardware, and networks. It offers search tools for finding specific help topics and options for personalized support, such as live chat or ticket submissions. Designed for all users, it provides practical solutions to get people back on track fast, without needing deep technical knowledge.
        </p>
      </div>

    </div>

<div className='home3' id='about'>
    <div>
       <h1>Who we are?</h1> 
       <p>We are a dedicated team of tech experts passionate about helping you solve your technical challenges. From software glitches to hardware issues and network troubleshooting, we provide clear, practical solutions to keep your devices running smoothly. Our mission is to make tech support accessible and stress-free, offering expert guidance, helpful resources, and personalized assistance when you need it most. Whether you're a tech novice or an experienced user, we’re here to ensure you get the support you need, every step of the way.</p>
    </div>
</div>

<div className='home4' id='brands'>
    <div>
        <h1>Brands</h1>
        <article> 
        <div style={{
            animationDelay:"0.3s", 
        }}>
         <AiFillGoogleCircle />
         <p>Google</p>
        </div>
        <div style={{
            animationDelay:"0.5s", 
        }}>
         <AiFillAmazonCircle />
         <p>Amazon</p>
        </div>
        <div style={{
            animationDelay:"0.7s", 
        }}>
         <AiFillYoutube />
         <p>Youtube</p>
        </div>
        <div style={{
            animationDelay:"1s", 
        }}>
         <AiFillInstagram />
         <p>Instagram</p>
        </div>
        </article>
    </div>
</div>
    </>
  )
}

export default Home
