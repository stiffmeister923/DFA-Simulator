import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowHead,
  ArrowLoopSm,
  ArrowLoopLg,
  ArrowBody,
} from "../components/Arrows";

const Atom = motion(Badge);

const variants = {
  initial: { y: "-50%", x: "-50%" },
  pulse: { scale: 5, transition: { duration: 0.6 } },
  bounce: {
    y: ["-50%", "-200%", "-50%"],
    x: ["-50%", "-50%", "-50%"],
    scale: 2.5,
    transition: { duration: 0.4 },
  },
  scale: { scale: 1.5 },
};

const SecondDFA = ({ currentNodeVal, simulatingStatus }) => {
  return (
    <>
      {/* q1 q2 */}
      <Text size="label" top="31%" left="14.5%" color="#C3E0E5">
        1
      </Text>
      {/* q1 q3 */}
      <Text size="label" top="67%" left="14.5%" color="#C3E0E5">
        0
      </Text>
      {/* q3 q4 */}
      <Text size="label" top="67%" left="26%" color="#C3E0E5">
        1
      </Text>
      {/* q4 q5 */}
      <Text size="label" top="46%" left="37%" color="#C3E0E5">
        1,0
      </Text>
      {/* q8 q9 */}
      <Text size="label" top="46%" left="82%" color="#C3E0E5">
        1,0
      </Text>
      {/* q6 q7 */}
      <Text size="label" top="46%" left="63%" color="#C3E0E5">
        1
      </Text>
      {/* q7 q6 */}
      <Text size="label" top="46%" left="57%" color="#C3E0E5">
        0
      </Text>
      {/* q1 q2 */}
      <Text size="label" top="31%" left="42.5%" color="#C3E0E5">
        1
      </Text>
      {/* q2 q5 */}
      <Text size="label" top="31%" left="26%" color="#C3E0E5">
        0
      </Text>
      {/* q5 q7 */}
      <Text size="label" top="31%" left="50%" color="#C3E0E5">
        1
      </Text>
      {/* q3 q5 */}
      <Text size="label" top="67%" left="42.5%" color="#C3E0E5">
        0
      </Text>
      {/* q5 q6 */}
      <Text size="label" top="67%" left="50%" color="#C3E0E5">
        0
      </Text>
      {/* q6 q8 */}
      <Text size="label" top="67%" left="70%" color="#C3E0E5">
        0
      </Text>
      {/* q7 q8 */}
      <Text size="label" top="31%" left="70%" color="#C3E0E5">
        1
      </Text>
      {/* q7 q7 */}
      <ArrowLoopSm
        top={["20%", "20%", "20%", null, null, "20%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "64%"]}
        rotate="180"
      />
      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "50%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "94.5%"]}
        rotate="200"
      />

      {/* q1 q2 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "10em"]}
        top={["40%"]}
        left="16%"
        rotate="-45"
      />
      {/* q1 q3 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "10em"]}
        top={["70%"]}
        left="14%"
        rotate="45"
      />
      {/* q2 q4 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "10em"]}
        top={["40%"]}
        left="24%"
        rotate="45"
      />
      {/* q2 q5 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "13em"]}
        top={["26%"]}
        left="34%"
        rotate="0"
      />
      {/* q2 q5 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "5em"]}
        top={["35%"]}
        left="43.1%"
        rotate="90"
      />
      {/* q3 q4 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "7.9em"]}
        top={["77%"]}
        left="24%"
        rotate="-45"
      />
      {/* q3 q5 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "13em"]}
        top={["87%"]}
        left="34%"
        rotate="0"
      />
      {/* q3 q5 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "5em"]}
        top={["68%"]}
        left="43.1%"
        rotate="90"
      />
      {/* q4 q5 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "8.2em"]}
        top={["55%"]}
        left="35%"
        rotate="0"
      />
      {/* q5 q6 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "9em"]}
        top={["75%"]}
        left="52%"
        rotate="37"
      />
      {/* q5 q7 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "9em"]}
        top={["39%"]}
        left="52%"
        rotate="-37"
      />
      {/* q6 q7 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "11em"]}
        top={["50%"]}
        left="56.5%"
        rotate="90"
      />
      {/* q7 q6 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "11em"]}
        top={["50%"]}
        left="60.5%"
        rotate="90"
      />
      {/* q7 q8 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "9em"]}
        top={["39%"]}
        left="68%"
        rotate="37"
      />
      {/* q6 q8 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "9em"]}
        top={["75%"]}
        left="68%"
        rotate="-37"
      />
      {/* q8 q9 */}
      <ArrowBody
        w={["7em", "7em", "7em", null, null, "8.2em"]}
        top={["55%"]}
        left="85%"
        rotate="0"
      />
      {/* q1 q2 */}
      <ArrowHead top="28%" left="17.5%" rotate="-45" />
      {/* q1 q3 */}
      <ArrowHead top="73.2%" left="17.2%" rotate="45" />
      {/* q2 q4 */}
      <ArrowHead top="43%" left="27.2%" rotate="45" />
      {/* q3 q4 */}
      <ArrowHead top="58%" left="27.3%" rotate="-45" />
      {/* q5 q6 */}
      <ArrowHead top="81%" left="56.8%" rotate="45" />
      {/* q7 q8 */}
      <ArrowHead top="43%" left="72.3%" rotate="45" />
      {/* q5 q7 */}
      <ArrowHead top="20%" left="56.8%" rotate="-45" />
      {/* q6 q8 */}
      <ArrowHead top="57.8%" left="72.3%" rotate="-45" />
      {/* q4 q5 */}
      <ArrowHead top="50%" left="41.5%" rotate="0" />
      {/* q8 q9 */}
      <ArrowHead top="50%" left="86.5%" rotate="0" />
      {/* q2 q5 */}
      <ArrowHead top="38%" left="44.7%" rotate="90" />
      {/* q7 q6 */}
      <ArrowHead top="75%" left="58%" rotate="90" />
      {/* q6 q7 */}
      <ArrowHead top="25%" left="62.1%" rotate="-90" />
      {/* q3 q5 */}
      <ArrowHead top="62%" left="44.7%" rotate="-90" />
      <Atom
        variant="5"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 5 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q5
      </Atom>
      <Atom
        variant="7"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 7 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q7
      </Atom>
      <Atom
        variant="6"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 6 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q6
      </Atom>
      <Atom
        variant="3"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 3 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q3
      </Atom>
      <Atom
        variant="8"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 8 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q8
      </Atom>
      <Atom
        variant="4"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 4 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q4
      </Atom>
      <Atom
        variant="2"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 2 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q2
      </Atom>
      <Atom
        variant="1"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 1 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q1
      </Atom>
      <Atom
        variant="9"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 9 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q9
      </Atom>
    </>
  );
};

export default SecondDFA;
