import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Results: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Results 2022 | Digex Society</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/DigexIcon.png" />
      </Head>
      <Navbar/>
      <div className="text-center">
        <h1 className="text-5xl font-bold pt-16">Results 2022</h1>
        <h3 className="flex text-2xl font-bold py-3 justify-center items-center">
            
          Winning Entries : <a href="https://drive.google.com/drive/folders/1TCjrnlts-dGWwwKy-1O7Ko8SdIwCWLA3?usp=sharing">  https://bit.ly/Digex2022Winners
                
                </a>
          </h3>
        <div className="py-8">
          
          <h1 className="text-3xl font-bold py-4">Overall Winner</h1>
          <p className="text-xl font-semibold">ITL Public School</p>
        </div>
        <div className="py-8">
          <h1 className="text-3xl font-bold py-4">Hi-Res</h1>
          <p className="text-xl font-semibold">First - ITL Public School - Prashant, Azmat, Mrinal, Riyaana</p>
          <p className="text-xl font-semibold">Second - Mount Carmel School - Harjas Kaur Bedi, Parisa Mehta, Shivi Chaudhary, Aditya Sarkar</p>
          <p className="text-xl font-semibold">Third- Delhi Public School Indirapuram - Sagar Raj, Raheemen Rizvi, Arjun Kapoor, Kanav Gera</p>
        </div>
        <div className="py-8">
          <h1 className="text-3xl font-bold py-4">CreADive</h1>
          <p className="text-xl font-semibold">First - Delhi Public School, Sonepat - Darsh Vatsa, Sanah Ahluwalia, Arsh Khan</p>
          <p className="text-xl font-semibold">Second - Delhi Public School, Gurgaon - Janav Dhingra, Devashi Tawar, Aniya Gulati</p>
          <p className="text-xl font-semibold">Third- Delhi Public School, Panipat Refinery - Madhav Raj, Shahzeb Shahzad, Soham Mayank</p>
        </div>
        <div className="py-8">
          <h1 className="text-3xl font-bold py-4">Rendered</h1>
          <p className="text-xl font-semibold">First - Bal Bharti Public School, Pitampura - Ayushi Agrawal</p>
          <p className="text-xl font-semibold">Second - Delhi Public School Knowledge Park V - Mehal Khushwaha and Sanyam Chauhan</p>
          <p className="text-xl font-semibold">Third - DPS Navi Mumbai - Tanishqq Vichare</p>
        </div>
        <div className="py-8">
          <h1 className="text-3xl font-bold py-4">Surprise</h1>
          <p className="text-xl font-semibold">First - Delhi Public School Rohini - Saumya Chaudhry and Pragati Ghai</p>
          <p className="text-xl font-semibold">Second - Tagore International School, Vasant Vihar - Sabhya Arora</p>
          <p className="text-xl font-semibold">Third - Mount Carmel School Dwarka - Sukoon Tyagi and Garvit Sorbti</p> 
        </div>
        <div className="py-8">
          <h1 className="text-3xl font-bold py-4">Camistic</h1>
          <p className="text-xl font-semibold">First - ITL Public School - Sahej and Roshit Verma</p>
          <p className="text-xl font-semibold">Second - Ryan International School, Vasant Kunj - Harshita Jain and Charul Kalra</p>
          <p className="text-xl font-semibold">Third - Cambridge Foundation School - Aanya Gupta and Vanshika Panjwani</p>
        </div>
        <div className="py-8">
          <h1 className="text-3xl font-bold py-4">Phonescape Junior</h1>
          <p className="text-xl font-semibold">First - Delhi Public School, Bokaro Steel City - Piyush Singh</p>
          <p className="text-xl font-semibold">Second- Delhi Public School, Bareilly - Pragya Upadhyay</p>
          <p className="text-xl font-semibold">Third - Delhi Public School, Bareilly - Sonakshi Gupta</p>
        </div>
        <div className="py-8">
          <h1 className="text-3xl font-bold py-4">Pixelate Junior</h1>
          <p className="text-xl font-semibold">First - Delhi Public School, Indirapuram - Prakhar Srivastava</p>
          <p className="text-xl font-semibold">Second- The Shri Ram School - Anav Gupta</p>
          <p className="text-xl font-semibold">Third - Tagore International School, East of Kailash - Aanya Sharma</p>
        </div>
        <div className="py-8">
          <h1 className="text-3xl font-bold py-4">Phonescape Senior</h1>
          <p className="text-xl font-semibold">First - Bal Bharti Public School, Noida - Vaani Gupta</p>
          <p className="text-xl font-semibold">Second - Delhi Public School, Rohini - Simran Bhatia</p>
          <p className="text-xl font-semibold">Third - Delhi Public School, Greater Noida - Avinash Gautam</p>
        </div>
        <div className="py-8">
          <h1 className="text-3xl font-bold py-4">Pixelate Senior</h1>
          <p className="text-xl font-semibold">First - Summer Fields School Kailash Colony - Aditya Arora</p>
          <p className="text-xl font-semibold">Second - The Shri Ram School Moulsari - Maya Ghosh</p>
          <p className="text-xl font-semibold">Third - Delhi Public School, Greater Noida - Pragun Mittal</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Results;
