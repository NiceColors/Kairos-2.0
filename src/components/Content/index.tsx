import React from "react";
import { Stack, Heading, Flex, Text, Image, Grid, Box } from "@chakra-ui/react";

export default function index() {
  return (
    <>
      <Stack>
        <Heading
          align="center"
          position="relative"
          mb={20}
          _before={{
            content: "''",
            display: "block",
            width: "200px",
            height: "5px",
            opacity: "0.5",
            background: "green",
            position: "absolute",
            bottom: -4,
            left: "44%",
          }}
          fontSize="3.5rem"
        >
          Lorem Ipsum
        </Heading>
        <Grid m="0 auto" gridTemplateColumns={{ lg: "50% 50%" }} gap="39px">
          <Box>
            <Heading mb={4}>Lorem ipsum dolor sit amet</Heading>
            <Text mb={4}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              praesentium quaerat voluptas dolore, optio fugiat dolorum!
              Voluptate impedit optio sunt atque in, beatae error assumenda
              rerum reiciendis ab sapiente similique? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ab praesentium quaerat voluptas
              dolore, optio fugiat dolorum! Voluptate impedit optio sunt atque
              in, beatae error assumenda rerum reiciendis ab sapiente similique?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              praesentium quaerat voluptas dolore, optio fugiat dolorum!
              Voluptate impedit optio sunt atque in, beatae error assumenda
              rerum reiciendis ab sapiente similique?
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              praesentium quaerat voluptas dolore, optio fugiat dolorum!
              Voluptate impedit optio sunt atque in, beatae error assumenda
              rerum reiciendis ab sapiente similique? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ab praesentium quaerat voluptas
              dolore, optio fugiat dolorum! Voluptate impedit optio sunt atque
              in, beatae error assumenda rerum reiciendis ab sapiente similique?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              praesentium quaerat voluptas dolore, optio fugiat dolorum!
              Voluptate impedit optio sunt atque in, beatae error assumenda
              rerum reiciendis ab sapiente similique?
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              praesentium quaerat voluptas dolore, optio fugiat dolorum!
              Voluptate impedit optio sunt atque in, beatae error assumenda
              rerum reiciendis ab sapiente similique? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ab praesentium quaerat voluptas
              reiciendis ab sapiente similique? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ab praesentium quaerat voluptas
              dolore, optio fugiat dolorum! Voluptate impedit optio sunt atque
            </Text>
          </Box>

          <Box>
            <Image
              maxH="450px"
              objectFit="cover"
              src="https://super.abril.com.br/wp-content/uploads/2020/07/SI_Psicologia_Jung_Perfil.jpg"
            />
            <Text w="" mt={4}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              praesentium quaerat voluptas dolore, optio fugiat dolorum!
              Voluptate impedit optio sunt atque in, beatae error assumenda
              rerum reiciendis ab sapiente similique? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ab praesentium quaerat voluptas
              dolore, optio fugiat dolorum! Voluptate impedit optio sunt atque
            </Text>
          </Box>
        </Grid>
      </Stack>
    </>
  );
}
