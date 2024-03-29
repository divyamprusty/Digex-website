import Head from "next/head";
import Image from "next/image";
import styles from "../styles/grid.module.css";
import Footer from '../components/footer'
import { NextPage } from "next";
import { Container } from "@mui/material";
import data from "../data/alumni.json";
import Card from "../components/card"
import PropTypes from "prop-types"
import Navbar from "../components/navbar";

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const Alumni = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alumni | Digex Society</title>
        <meta name="description" content="The official website of Digexclan of Delhi Public School R.K. Puram" />
        <link rel="icon" href="/DigexIcon.png" />
      </Head>
      <Navbar/>
      <Container>
        <div>
          <h1 className="flex text-4xl font-bold pt-12 justify-center items-center">Alumni</h1>
          <div className="text-3xl font-bold py-12 text-center">Honorary Alumni</div>
              <div className={styles.card}>
                <h1 className="text-2xl">Krishnav Gaind</h1>
                <h1>Member</h1>
              </div>
          {data.map((batch, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold py-12 text-center">{`${batch.year}`}</h2>
              <Grid>
                {batch.alumni.map((alum,index) => (
                  <Card key={index} className="text-center">
                    <div className="text-2xl">{alum.name}</div>
                    <div>{alum.role}</div>
                  </Card>
                ))}
              </Grid>
            </div>
          ))}o
        </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default Alumni;