import { Box } from "@chakra-ui/react";
import React from "react";
import EmblaPodcast from "./Carousel/EmblaPodcast";

const SLIDE_COUNT = 10;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function index() {
  return (
    <>
      <Box mt="20em">
        <EmblaPodcast slides={slides} />
      </Box>
    </>
  );
}
