import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./NavBar/";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box margin="0 auto" maxWidth={1580} transition="0.5s ease-out">
        <Box margin="8">
          <Navbar />
          <Box as="main" minH="180vh">
            {children}
          </Box>
        </Box>
      </Box>

    </>
  );
};

export default Layout;
