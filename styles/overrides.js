export const Button = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    regular: {
      fontSize: ["0.7em", "0.7em", "0.9em"],
      px: "4",
      py: "2",
    },
  },
  variants: {
    data: {
      _hover: "",
      cursor: "default",
      py: "1",
      px: "2",
      ml: "3",
      mr: "1",
      fontWeight: "bold",
      color: "gray.700",
      textTransform: "uppercase",

      fontSize: ["0.7em", "0.7em", "0.9em"],
      bg: "gray.100",
    },
    clear: {
      bg: "red.800",
      ml: "1"
    },
    Main: {
      bg:"gray.700"
    },
    CFG: {
      pos:"absolute",
      left: "12%",
      top: "55%",
      bg: "gray.700",
    },
    Switch: {
      pos: "absolute",
      left: "3.4%",
      top: "55%",
      bg: "gray.700",
    },
  },
  defaultProps: {
    size: "regular",
  },
};

export const Input = {
  baseStyle: {
    _focus: "",
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

export const Heading = {
  baseStyle: {
    _focus: "",
  },
  sizes: {},
  variants: {
    regular: {
      color: ['gray.500'],
      fontSize: ["0.8em", "0.8em", "1.2em", "1.2em"],
    },
    title: {
      color:['blue.700'],
      fontSize:["2em", "2.4em", "3.3em"],
      /*fontSize: ["2em", "2.4em", "2.9em", "2.9em", "2.9em", "3.5em"],*/
    },
    RegEx: {
      pos: "relative",
      fontSize: ["0.8em", "0.8em", "1.2em", "1.2em"],
      color: ['gray.500'],
      left: "10em",
    }
  },
  defaultProps: {
    variant: "regular",
  },
};

export const Tag = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    regular: {
      rounded: "md",
      fontSize: ["0.7em", "0.7em", "0.9em"],
    },
  },
  variants: {},
  defaultProps: {},
};

export const Flex = {
  baseStyle: {},
  sizes: {
    heightWrap: {
      h: ["12em", "12em", "18em", "18em", "18em", "20em"],
    },
  },
  variants: {
    heightWrap: {
      pos: "relative",
      borderBottom: "solid 1px",
      borderColor: "gray.200",
    },
  },
  defaultProps: {},
};

export const Text = {
  baseStyle: {},
  sizes: {
    label: {
      pos: "absolute",
      translateX: "-50%",
      translateY: "-50%",
      transform: "auto",

      fontWeight: "semibold",
      fontSize: ["0.6em", "0.6em", "1em", "1em", "1em", "1em"],
    },
  },
  variants: {
    Limit: {
      color: ["green.800"]
    }
  },
  defaultProps: {},
};
