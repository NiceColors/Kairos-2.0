import { Box, Flex, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <>
    <Flex justifyContent="space-between" maxW={1520} m="0 auto" p={12}>
      <Box>
        <Heading>Hello World</Heading>
      </Box>
      <ColorModeSwitcher />
    </Flex>
  </>
);
