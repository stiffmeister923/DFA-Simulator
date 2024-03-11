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

const FirstDFA = ({ currentNode, simulating }) => {
  return (
    <>
      {/* LETTERS */}

      {/* q1 q2 */}
      <Text top="31%" left="14%" size="label">
        a
      </Text>
      {/* q2 t */}
      <Text top="31%" left="26%" size="label">
        a,b
      </Text>

      {/* q5 t */}
      <Text top="69%" left="34%" size="label">
        b
      </Text>
      {/* q3 q5 */}
      <Text top="50%" left="37%" size="label">
        b
      </Text>
      {/* q5 q3 */}
      <Text top="50%" left="43%" size="label">
        a
      </Text>
      {/* q3 q7 */}
      <Text top="17%" left="50%" size="label">
        a
      </Text>
      {/* q4 q8 */}
      <Text top="77%" left="50%" size="label">
        b
      </Text>
      {/* q3 t */}
      <Text top="31%" left="34%" size="label">
        a
      </Text>
      {/* q1 T */}
      <Text top="47%" left="20%" size="label">
        b
      </Text>

      {/* q5 q6 */}
      <Text top="69%" left="46%" size="label">
        b
      </Text>

      {/* q8 q9 */}
      <Text top="69%" left="66%" size="label">
        b
      </Text>
      {/* q7 q9 */}
      <Text top="31%" left="66%" size="label">
        a
      </Text>
      {/* q3 q6 */}
      <Text top="31%" left="46%" size="label">
        a
      </Text>

      {/* q9 q10 */}
      <Text top="45%" left="80%" size="label">
        a,b
      </Text>
      {/* q7 q7 */}
      <Text
        top="49%"
        left={["71%", "71%", "68%", null, null, "97.5%"]}
        size="label"
      >
        a,b
      </Text>

      {/* ARROW BODY */}

      {/* q9 q10 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="80%"
      />
      {/* q3 q7 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["26.7%"]}
        left="50%"
      />
      {/* q5 q8 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["86.3%"]}
        left="50%"
      />
      {/* q3 q5 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["53%"]}
        left="37%"
        rotate="90"
      />
      {/* q5 q3 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["53%"]}
        left="40%"
        rotate="90"
      />
      {/* q7 q8 */}
      <ArrowBody
        w={["7em", "7em", "9em", "9em", "9em", "9em"]}
        top="35%"
        left={["55.5%", "55.5%", "58%", "58%", "58%", "62.5%"]}
        rotate="45"
      />
      {/* trap ul */}
      <ArrowBody
        w={["8em", "8em", "13em", "13em", "13em", "15em"]}
        top="58%"
        left={["27.5%", "27.5%", "30%", "30%", "30%", "30%"]}
        rotate={["60", "60", "50", "50", "50", "42"]}
      />
      {/* q6 ul */}
      <ArrowBody
        w={["8em", "8em", "13em", "13em", "13em", "15em"]}
        top="58%"
        left={["47%", "47%", "50%", "50%", "50%", "50%"]}
        rotate={["60", "60", "50", "50", "50", "42"]}
      />
      {/* trap ur */}
      <ArrowBody
        w={["8em", "8em"]}
        top="25%"
        left={["27.5%", "27.5%", "35.5%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q6 ur */}
      <ArrowBody
        w={["8em", "8em", "13em", "13em", "13em", "15em"]}
        top="43%"
        left={["47.5%", "47.5%", "50%", "50%", "50%", "50%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q1 q2 */}
      <ArrowBody
        w={["5em", "5em", "8em", "8em", "8em", "8em"]}
        top="31%"
        left={["11%", "11%", "14%", "14%", "14%", "14%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q8 q9 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["65%", "65%", "63%", "63%", "63%", "65%"]}
        left={["60%", "60%", "63%", "63%", "63%", "63%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q1 T */}
      <ArrowBody
        w={["5em", "5em", "8em", "8em", "8em", "12em"]}
        top="57%"
        left={["12%", "12%", "14%", "14%", "14%", "22%"]}
        rotate={["0"]}
      />

      {/* ARROWS */}

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
      <ArrowHead
        top={["29%", "29%", "29.2%", "29.2%", "29.2%", "27.7%"]}
        left={["17.2%", "17.2%", "17.6%", "17.6%", "17.6%", "17.3%"]}
        rotate={["-57", "-57", "-50", "-50", "-50", "-48"]}
      />
      {/* q1 T */}
      <ArrowHead
        top={["52%"]}
        left={["17.4%", "17.4%", "17.3%", "17.3%", "17.3%", "26.6%"]}
        rotate={["0"]}
      />
      {/* q2 t */}
      <ArrowHead
        top={["41.6%", "41.6%", "41.7%", "41.7%", "41.7%", "42.6%"]}
        left={["27.3%", "27.3%", "27.1%", "27.1%", "27.1%", "27.3%"]}
        rotate={["47", "47", "40", "40", "40", "40"]}
      />
      {/* q3 q5 */}
      <ArrowHead top={["69%"]} left={["38.5%"]} rotate={["90"]} />
      {/* q3 q7 */}
      <ArrowHead top={["21.3%"]} left={["56.5%"]} rotate={["0"]} />
      {/* q5 q8 */}
      <ArrowHead top={["81.5%"]} left={["56.5%"]} rotate={["0"]} />
      {/* q5 q3 */}
      <ArrowHead top={["30.3%"]} left={["41.6%"]} rotate={["-90"]} />

      {/* q5 t */}
      <ArrowHead
        top={["58.4%", "58.4%", "58.2%", "58.2%", "58.2%", "73%"]}
        left={["33.1%", "33.1%", "33.3%", "33.3%", "33.3%", "37.3%"]}
        rotate={["45"]}
      />
      {/* q3 t */}
      <ArrowHead
        top={["27%"]}
        left={["33.2%", "33.2%", "33.2%", "33.2%", "33.2%", "37.3%"]}
        rotate={["-45"]}
      />

      {/* q5 q6 */}
      <ArrowHead
        top={["59.3%", "59.3%", "59.3%", "59.3%", "59.3%", "73%"]}
        left={["42.9%"]}
        rotate={["135"]}
      />

      {/* q7 q8 */}
      <ArrowHead
        top={["70%", "70%", "69.6%", null, null, "43.3%"]}
        left={["60.2%", "60.2%", "60.3%", null, null, "67.2%"]}
        rotate="40"
      />
      {/* q8 q6 */}
      <ArrowHead top={["28%"]} left={["42.5%"]} rotate={["220"]} />
      {/* q8 q9 */}
      <ArrowHead
        top={["59.3%", "59.3%", "59.3%", "59.3%", "59.3%", "58.3%"]}
        left={["67.6%", "67.6%", "67.4%", null, null, "67.4%"]}
        rotate={["-64", "-64", "-50", "-50", "-50", "-48"]}
      />
      {/* q9 q10 */}
      <ArrowHead
        top={["50%", "50%", "49.7%", null, null, "49.7%"]}
        left={["84%", "84%", "85.2%", null, null, "86.6%"]}
      />
      <Atom
        variant="q1"
        variants={variants}
        initial="initial"
        animate={currentNode == 1 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q1
      </Atom>
      <Atom
        variant="q2"
        variants={variants}
        initial="initial"
        animate={currentNode == 2 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q2
      </Atom>
      <Atom
        variant="q3"
        variants={variants}
        initial="initial"
        animate={currentNode == 3 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q3
      </Atom>
      <Atom
        variant="q4"
        variants={variants}
        initial="initial"
        animate={currentNode == 4 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q4
      </Atom>
      <Atom
        variant="q5"
        variants={variants}
        initial="initial"
        animate={currentNode == 5 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q5
      </Atom>
      <Atom
        variant="q6"
        variants={variants}
        initial="initial"
        animate={currentNode == 6 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q6
      </Atom>
      <Atom
        variant="q7"
        variants={variants}
        initial="initial"
        animate={currentNode == 7 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q7
      </Atom>
      <Atom
        variant="q8"
        variants={variants}
        initial="initial"
        animate={currentNode == 8 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q8
      </Atom>
      <Atom
        variant="q9"
        variants={variants}
        initial="initial"
        animate={currentNode == 9 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q9
      </Atom>
    </>
  );
};

export default FirstDFA;
