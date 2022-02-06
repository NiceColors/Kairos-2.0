import {
  Box,
  Text,
  Heading,
  Button,
  Flex,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import SvgComponent from "../layout/NavBar/Logo";
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import Embla from "../Slider/Embla";
export default function Header() {
  return (
    <>
      <Flex minH={{base:"40vh", lg:"80vh"}} mb={12}>
        <Box p={{base:"0", md:"46px"}} borderRadius="16px" maxH="60vh">
          <Heading
            mt={{base:12,md:24}}
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

          <Text
            mt="26px"
            fontWeight="bold"
            color="gray.700"
            w={{ base: "100%", xl: "86%" }}
          >
            Acompanhe o evento no canal Interfaces da Psicologia UFRuralRJ no
            Youtube
            <IconButton
              aria-label="Youtube Channel"
              ml="10px"
              color="red"
              fontSize="30px"
              icon={<AiFillYoutube />}
            />
          </Text>
          <Button mt="26px" size="lg" colorScheme="green" disabled>
            Inscrição
          </Button>
        </Box>
        <AspectRatio
          mt={8}
          boxShadow="lg"
          mb={4}
          transform="translateY(20%)"
          w={{ xl: "600px", lg: "400px" }}
          h={{ xl: "400px", lg: "300px" }}
          ratio={1}
        >
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </Flex>

      <Box
        position="absolute"
        w="40vw"
        h="60vh"
        top="-100"
        right="0"
        bgColor="gray.800"
        zIndex={-1}
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
        }}
      ></Box>
    </>
  );
}
