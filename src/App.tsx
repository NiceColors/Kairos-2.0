import { Box, Flex, Heading } from "@chakra-ui/react";
import { Component } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Layout from "../src/components/layout/";
import Header from "./components/Header"
import './styles/global.css'

export const App = () => (
  <>
    <Layout>
      <Header/>
    </Layout>
  </>
);
