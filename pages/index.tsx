/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import About from "./about";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Digex Society</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <div className="flex mt-8 py-36">
          <div>
            <div className="text-6xl font-bold px-16 pb-8">
              <h1>Change your lens</h1>
              <h1>Change your story</h1>
            </div>
            <p className="text-2xl px-16 pt-4 pb-12">
              The photography and film-making club at Delhi Public School R.K.
              Puram.
            </p>
            <div className="flex px-16 w-3/4">
              <div className="text-xl font-medium rounded-xl bg-gradient-to-r from-lime-600  to-green-400 text-white px-6 py-4 mr-4">
                <Link href="/">Digex 2022 </Link>
              </div>
              <div className="text-xl font-medium rounded-xl bg-gradient-to-r from-lime-600  to-green-400 text-white px-6 py-4">
                <Link href="/">Digex 2021 Results </Link>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/illustration.svg"
              alt="illustration"
              style={{ height: 400, width: "auto" }}
            />
          </div>
        </div>
        <div className="flex flex-col jusitfy-center items-center my-12">
          <div className="flex flex-col justify-center items-center mb-8">
            <h1 className="text-5xl font-semibold">Our Organisation</h1>
            <p className="text-xl text-center w-2/3 my-4 text-gray-600 dark:text-gray-100">
              Digex is the photography and film-making student organization at
              Delhi Public School, R.K. Puram which serves as an outlet for
              photography enthusiasts to channel their creative energy.
            </p>
            <div className="text-xl font-medium rounded-xl bg-gradient-to-r from-lime-600  to-green-400 text-white px-4 py-2">
              <Link href="/about">About Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-8">
            <h1 className="text-5xl font-semibold">Our Team</h1>
            <p className="text-xl my-4 text-gray-600 dark:text-gray-100">
              Alone we can do so little, together we can do so much
            </p>
            <div className="text-xl font-medium rounded-xl bg-gradient-to-r from-lime-600  to-green-400 text-white px-4 py-2">
              <Link href="/members">Our Team</Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
