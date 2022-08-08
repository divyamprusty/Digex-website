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
            Digex 2022
          </h1>
          <h3 className="flex text-2xl font-bold py-3 justify-center items-center">
            Topic for Hi Res : Breaking the Fourth Wall with Silence

          </h3>
          <h3 className="flex text-2xl font-bold py-3 justify-center items-center">
            
           Submission Link for Hi Res : <a href="https://linktr.ee/Digex22"> https://linktr.ee/Digex22
                 
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
