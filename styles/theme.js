import { extendTheme } from "@chakra-ui/react";
import { Button, Heading, Tag, Flex, Input, Text } from "./overrides";
import { Badge } from "./badgeStyles";

export const theme = extendTheme({
  fonts: {
    body: `'Raleway', sans-serif`,
    heading: `'Aileron', sans-serif`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "gray.50",
      },
      p: {
        color: "gray.700",
      },
      "h1, h2, h3, h4": {
        color: "blue.700",
      },
    }),
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  textStyles: {
    Primary: {
      color: "blue.300",
    },
  },
  layerStyles: {
    Primary: {
      bgColor: "blue.300",
    },
  },
  components: {
    Button,
    Badge,
    Heading,
    Tag,
    Flex,
    Input,
    Text,
  },
});
