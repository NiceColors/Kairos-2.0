import { Box, Text, Heading, Button, Grid, IconButton } from "@chakra-ui/react";
import SvgComponent from "./meet";
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import Embla from "../Slider/Embla";
export default function Header() {
  return (
    <>
      <Grid
        minH="80vh"
        gridTemplateColumns=" repeat( auto-fit, minmax(550px, 1fr) )"
      >
        <Box p="46px" borderRadius="16px" maxH="60vh">
          <Heading
            mt={24}
            color="gray.700"
            fontFamily="Quicksand"
            fontSize="clamp(2rem, 3vw, 7rem)"
            fontWeight="600"
          >
            XIII Encontro <span className="title-kairos">Kairós:</span>
          </Heading>
          <Text fontSize="clamp(1rem, 1.8vw, 3rem)" fontWeight="light">
            "Espiritualidade, Filosofia & Covid-19"
          </Text>
          <Text mt="26px" color="gray.500" w="90%">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            delectus rerum voluptas debitis similique assumenda, veritatis
            ratione quisquam placeat doloribus rem culpa
          </Text>
          <Button mt="26px" size="lg" colorScheme="green" disabled>
            Inscrição
          </Button>
          <Box transform="translateY(150%)">
            <IconButton
              aria-label="Youtube Channel"
              mr="10px"
              fontSize="30px"
              icon={<AiFillYoutube />}
            />
            <IconButton
              aria-label="Youtube Channel"
              mr="10px"
              fontSize="30px"
              icon={<AiFillTwitterCircle />}
            />
            <IconButton
              aria-label="Youtube Channel"
              mr="10px"
              fontSize="30px"
              icon={<AiFillFacebook />}
            />
          </Box>
        </Box>
        <Box
          w="full"
          transform={{ lg: "translateY(20%)" }}
          h="500px"
          borderRadius="26px"
        >
          <Embla />
        </Box>
      </Grid>

      <Box
        position="absolute"
        w="40vw"
        h="60vh"
        top="-100"
        right="0"
        zIndex="-1"
        bgColor="gray.800"
        overflow="hidden"
        display={{sm:'none', md:'none', lg:'block'}}
      ></Box>
    </>
  );
}
