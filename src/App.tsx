// import { Box, Flex, Heading } from "@chakra-ui/react";
// import { Component } from "react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Layout from "../src/components/layout/";
import Header from "./components/Header";
import Palestrantes from "./components/Palestrantes";
import Content from "./components/Content";
import Podcast from "./components/Podcast";
import "./styles/global.css";

export const App = () => (
  <>
    <Layout>
      <Header />
      <Content />
      <Palestrantes />
      <Podcast />
    </Layout>
  </>
);
