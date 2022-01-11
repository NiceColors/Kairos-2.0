import React from "react";
import { Stack, Heading, Flex, Text, Image } from "@chakra-ui/react";

export default function index() {
  return (
    <>
      <Stack>
        <Heading>Lorem Ipsum</Heading>
        <Flex>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            praesentium quaerat voluptas dolore, optio fugiat dolorum! Voluptate
            impedit optio sunt atque in, beatae error assumenda rerum reiciendis
            ab sapiente similique?
          </Text>
          <Image />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            necessitatibus provident vel autem molestias deleniti iure quo
            laboriosam aut. Quidem vitae ipsum saepe aperiam officiis quos
            aliquam ipsa animi rerum.
          </Text>
          <Image />
        </Flex>
      </Stack>
    </>
  );
}
