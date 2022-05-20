import React from 'react';
import {Hero} from "./Hero";
import useStyles from "../styles/styles";
import Section from "./Section";

import Footer from "./Footer";



export const Home = () => {
    const classes = useStyles();
  return (
    <>
      <Hero/>
        <Section/>
        <Footer/>
    </>

  )
}
