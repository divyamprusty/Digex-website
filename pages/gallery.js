/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/grid.module.css";
import Footer from '../components/footer'
import { NextPage } from "next";
import { Container } from "@mui/material";
import Navbar from "../components/navbar";
import data from "../data/gallery.json";
import Card from "../components/card";
import PropTypes from 'prop-types';

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const Gallery = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery | Research Rhinos</title>
        <meta name="description" content="The official website of Digexclan of Delhi Public School R.K. Puram" />
        <link rel="icon" href="/DigexIcon.png" />
      </Head>
      <Navbar/>
      <Container>
        <div>
          {data.map((gallery, index) => (
            <div key={index}>
              <h1 className="flex text-4xl font-bold py-12 justify-center items-center">{`${gallery.title}`}</h1>
              <Grid>
                {gallery.images.map((img) => (
                  <Card key={img.image}>
                    <img src={img.image}/>
                  </Card>
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default Gallery;