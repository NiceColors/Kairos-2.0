import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <>
      {/* footer */}
      <Box>
        <Box as="footer" bg="gray.900" color="white" p="4" textAlign="center">
          <Text fontSize="sm">© {new Date().getFullYear()}</Text>
        </Box>
      </Box>
    </>
  );
}
