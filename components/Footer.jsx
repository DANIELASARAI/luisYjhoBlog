import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box className="box" textAlign="center" p="7" borderTop="1px">
    <p>
      Luis y Jho en Portugal <span className="text-black">2022</span>
      <a href="/" className="text-3xl inline text-yellow-600">
        {" "}
        Inicio
      </a>
    </p>
  </Box>
);

export default Footer;
