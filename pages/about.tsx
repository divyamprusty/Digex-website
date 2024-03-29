/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import { NextPage } from "next";
import { Container } from "@mui/material";
import Navbar from "../components/navbar";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Digex Society</title>
        <meta name="description" content="The official website of Digexclan of Delhi Public School R.K. Puram" />
        <link rel="icon" href="/DigexIcon.png" />
      </Head>
      <Navbar/>
      <Container>
        <div>
          <h1 className="flex text-4xl font-bold justify-center align-center py-12">
              About
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="pb-12 w-4/5 mt-8 md:mt-0 text-center">
              <p className="text-xl">
                The Digital Excellence society or Digex is Delhi Public School
                R.K.Puram&#39;s photography and film-making club. Founded in
                2009, the Digex society is a group of passionate members who
                channel their creativity and out of the box thinking into creative
                fields like Photography, Film-making, Creative Design, Video
                editing and much more. Any student of the school can seize the
                opportunity to be a part of the club. At present, the club is over
                60 members strong with students from all classes ( 6-12 ). The
                Digex society is invited to a plethora of competitions and events
                throughout the year that are on national and international levels.
                Our goal is to strive towards being the best in all fields and
                competitions we take part in.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-3/5 md:mr-16 mr-0 md:mb-0 mb-8 text-center">
              <h1 className="text-3xl font-bold">Mrs. Sarika Kaushal</h1>
              <h2 className="text-2xl pb-4">Founder and Teacher-in-Charge</h2>
              <p className="text-xl">
                Mrs. Kaushal founded Digex in 2009, and has been the club&#39;s
                teacher-in-charge ever since. Today, in addition to being a
                Computer Science teacher, she oversees all Digex activities,
                guides the club leadership in planning and organizing events, and
                mentors the club&#39;s junior members.
              </p>
            </div>
            <div>
              <img src="/sarikakaushal.jpg" alt="sarikakaushal" style={{ height:200, width:175 }} className="rounded-lg"/>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
