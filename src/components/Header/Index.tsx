import { Box, Text, Heading, Button, Grid } from "@chakra-ui/react";
import SvgComponent from "./meet";

export default function Header() {
  return (
    <>
      <Grid gridTemplateColumns=" repeat( auto-fit, minmax(550px, 1fr) )">
        <Box p="46px" borderRadius="16px" minH="60vh">
          <Heading
            mt={24}
            color="gray.800"
            fontFamily="Quicksand"
            fontSize="clamp(2rem, 3vw, 7rem)"
            fontWeight="600"
          >
            XIII Encontro Kairós:
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
        </Box>
        <Box h="full" minH="600px" borderRadius="26px" border="1px solid #75de63">
          
        </Box>
      </Grid>
      ;
    </>
  );
}
