import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from '../components/footer'
import { NextPage } from "next";
import { Container } from "@mui/material";
import Navbar from "../components/navbar";

const Gallery: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery | Research Rhinos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Container>
        <div></div>
      </Container>
      <Footer/>
    </div>
  )
}

export default Gallery;