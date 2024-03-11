export const Badge = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    node: {
      bg: "#5885AF",
      color: ["gray.200", null, "gray.200"],

      // h: ["2em", "2em", "3.5em", "3.5em"],
      h: "3.5em",
      w: "3.5em",
      // w: ["2em", "2em", "3.5em", "3.5em"],

      boxShadow: "xl",
      border: "2px",
      rounded: "50%",

      pos: "absolute",
      transform: "auto",
      translateX: "-50%",
      translateY: "-50%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      textTransform: "none",
      fontSize: ["0.6em", "0.6em", "1em", "1em", "1em", "1.1em"],
      fontWeight: "500",
    },
  },
  variants: {
    q1: {
      top: "50%",
      left: "10%",

      borderColor: "#75E6DA",
    },
    q2: {
      top: "20%",
      left: "20%",

      borderColor: "#75E6DA",
    },
    q3: {
      top: "50%",
      left: "30%",

      borderColor: "#75E6DA",
    },
    q4: {
      top: "20%",
      left: "40%",

      borderColor: "#75E6DA",
    },
    q5: {
      top: "80%",
      left: "40%",

      borderColor: "#75E6DA",
    },
    q6: {
      top: "20%",
      left: "60%",

      borderColor: "#75E6DA",
    },
    q7: {
      top: "80%",
      left: "60%",

      borderColor: "#75E6DA",
    },
    q8: {
      top: "50%",
      left: "70%",

      borderColor: "#75E6DA",
    },
    q9: {
      top: "50%",
      left: "90%",

      borderColor: "#75E6DA",
    },
    q10: {
      top: "50%",
      left: "90%",

      borderColor: "#75E6DA",
    },
    T: {
      top: "50%",
      left: "30%",

      borderColor: "#75E6DA",
    },
    1: {
      top: "50%",
      left: "10%",

      borderColor: "#75E6DA",
    },
    2: {
      top: "20%",
      left: "20%",

      borderColor: "#75E6DA",
    },
    3: {
      top: "80%",
      left: "20%",

      borderColor: "#75E6DA",
    },
    4: {
      top: "50%",
      left: "30%",

      borderColor: "#75E6DA",
    },
    5: {
      top: "50%",
      left: "45%",

      borderColor: "#75E6DA",
    },
    6: {
      top: "85%",
      left: "60%",

      borderColor: "#75E6DA",
    },
    7: {
      top: "15%",
      left: "60%",

      borderColor: "#75E6DA",
    },
    8: {
      top: "50%",
      left: "75%",

      borderColor: "#75E6DA",
    },
    9: {
      top: "50%",
      left: "90%",

      borderColor: "#75E6DA",
    },
  },
  defaultProps: {
    size: "node",
  },
};
