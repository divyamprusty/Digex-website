/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/grid.module.css";
import Footer from "../components/footer";
import { NextPage } from "next";
import { Container } from "@mui/material";
import Navbar from "../components/navbar";
import data from "../data/events.json";
import Card from "../components/card";
import PropTypes from "prop-types";

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const Events = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events | Digex Society</title>
        <meta name="description" content="The official website of Digexclan of Delhi Public School R.K. Puram" />
        <link rel="icon" href="/DigexIcon.png" />
      </Head>
      <Navbar />
      <Container>
        <div>
          <h1 className="flex text-4xl font-bold py-4 justify-center items-center">
            Digex Events 2023
          </h1>
          
          <h3 className="flex text-2xl font-bold py-3 justify-center mb-8 color-teal  items-center">
            
            <a style={{ color: "teal" }} href="https://docs.google.com/forms/d/e/1FAIpQLSeKlgXL_zNLO3B7aHv2YMwfkMp-UEbVp4JfyHDtLCD4hAGq3Q/viewform"> 
            Register
                </a>
            <p className="px-5">|</p>
                <a style={{ color: "teal" }} href="https://drive.google.com/file/d/1LuLjZm8oqdRNdp1kzqmj98KwBEtb1xLF/view?usp=sharing"> 
            Timeline
                </a>
          </h3>
 
          
          {data.map((events, index) => (
            <div key={index}>
              <Grid>
                {events.details.map((desc) => (
                  <Card key={desc.title}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h1 className="text-2xl mb-2">{desc.title}</h1>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h1 className="text-1xl mb-2" style={{ color: "red" }}>
                        {/* <a href={desc.link} target="_blank">
                          Submission
                        </a> */}
                      </h1>
                    </div>
                    <h1>{desc.description}</h1>
                    
                  </Card>
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Events;