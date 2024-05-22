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
  pulse: {
    scale: [1, 2.5, 1],
    transition: { duration: 0.6 },
    backgroundColor: "green",
  },
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
      <Text top="31%" left="14%" size="label" color="#C3E0E5">
        a
      </Text>
      {/* q2 q3 */}
      <Text top="31%" left="26%" size="label" color="#C3E0E5">
        a,b
      </Text>

      {/* q3 q5 */}
      <Text top="69%" left="34%" size="label" color="#C3E0E5">
        b
      </Text>
      {/* q4 q5 */}
      <Text top="50%" left="37%" size="label" color="#C3E0E5">
        b
      </Text>
      {/* q5 q4 */}
      <Text top="50%" left="43%" size="label" color="#C3E0E5">
        a
      </Text>
      {/* q4 q6 */}
      <Text top="17%" left="50%" size="label" color="#C3E0E5">
        a
      </Text>
      {/* q5 q7 */}
      <Text top="77%" left="50%" size="label" color="#C3E0E5">
        b
      </Text>
      {/* q3 q4 */}
      <Text top="31%" left="34%" size="label" color="#C3E0E5">
        a
      </Text>
      {/* q1 q3 */}
      <Text top="47%" left="20%" size="label" color="#C3E0E5">
        b
      </Text>

      {/* q6 q5 */}
      <Text top="69%" left="46%" size="label" color="#C3E0E5">
        b
      </Text>

      {/* q7 q8 */}
      <Text top="69%" left="66%" size="label" color="#C3E0E5">
        b
      </Text>
      {/* q6 q8 */}
      <Text top="31%" left="66%" size="label" color="#C3E0E5">
        a
      </Text>
      {/* q7 q4 */}
      <Text top="31%" left="46%" size="label" color="#C3E0E5">
        a
      </Text>

      {/* q8 q9 */}
      <Text top="45%" left="80%" size="label" color="#C3E0E5">
        a,b
      </Text>
      {/* q9 */}
      <Text
        top={["49.5%", "49.5%", "50%", "50%", "50%", "50%"]}
        left={["102.5%", "102.5%", "99%", "99%", "99%", "97.5%"]}
        size="label"
        color="#C3E0E5"
      >
        a,b
      </Text>

      {/* ARROW BODY */}

      {/* q8 q9 */}
      <ArrowBody
        position="fixed"
        w = {["3em", "3em", "9em", "9em", "9em"]}
        left = "80%"
        top = {["58%", "58%", "55%", "55%", "55%", "55%"]}
        /*w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="80%"*/
      />
      {/* q4 q6 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top = {["27.5%", "27.5%", "25%", "25%", "25%", "26.4%"]}
        /*top={["26.7%"]}*/
        left="50%"
      />
      {/* q5 q7 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["88%", "88%", "85%", "85%", "85%", "86.3%"]}
        left="50%"
      />
      {/* q4 q5 */}
      <ArrowBody
        w={["7em", "7em", "9em", "9em", "9em", "9em"]}
        top={["53%"]}
        left={["34%", "34%", "36.5%", "36.5%", "36.5%", "37%"]}
        rotate="90"
      />
      {/* q5 q4 */}
      <ArrowBody
        w={["7em", "7em", "9em", "9em", "9em", "9em"]}
        top={["53%"]}
        left={["37%", "37%", "39.2%", "39.2%", "39.2%", "40%"]}
        rotate="90"
      />
      {/* q6 q8 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "9em"]}
        top="35%"
        left={["60%", "60%", "62%", "62%", "62%", "62.5%"]}
        rotate={["60", "60", "53", "53", "53", "45"]}
        position='fixed'
      />
      {/* q2 q3 q5 */}
      <ArrowBody
        w={["8em", "8em", "13em", "13em", "13em", "15em"]}
        top="58%"
        left={["27.5%", "27.5%", "30%", "30%", "30%", "30%"]}
        rotate={["63", "63", "51", "53", "52", "42"]}
      />
      {/* q7 q4 */}
      <ArrowBody
        w={["8em", "8em", "13em", "13em", "13em", "15em"]}
        top="58%"
        left={["47%", "47%", "50%", "50%", "50%", "50%"]}
        rotate={["64", "64", "56", "56", "56", "42"]}
      />
      {/* q3 q4 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="25%"
        left={["33%", "33%", "35.5%", "35.5%", "35.5%", "35.5%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q6 q5 */}
      <ArrowBody
        w={["8em", "8em", "13em", "13em", "13em", "15em"]}
        top="43%"
        left={["47.5%", "47.5%", "50%", "50%", "50%", "50%"]}
        rotate={["120", "120", "124", "124", "123", "136"]}
      />
      {/* q1 q2 */}
      <ArrowBody
        w={["5em", "5em", "8em", "8em", "8em", "8em"]}
        top="31%"
        left={["11%", "11%", "14%", "14%", "14%", "14%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q7 q8 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["65%", "65%", "63%", "63%", "63%", "65%"]}
        left={["60%", "60%", "63%", "63%", "63%", "63%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q1 q3 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["58.5%", "58%", "57%", "57%", "57%", "57%"]}
        left={["16%", "16%", "16%", "16%", "16%", "22%"]}
        rotate={["0"]}
      />

      {/* ARROWS */}

      {/* q7 q7 */}
      <ArrowLoopSm
        top={["50%", "50%", "50%", "50%", "50%", "20%"]}
        left={["97.5%", "97.5%", "95.7%", "95.7%", "95.7%", "64%"]}
        rotate="180"
      />
      <ArrowLoopLg
        top={["20%", "20%", "20%", "50%", "50%", "50%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "94.5%"]}
        rotate="200"
      />

      {/* q1 q2 */}
      <ArrowHead
        top={["29%", "29%", "29.2%", "29.2%", "29.2%", "27.7%"]}
        left={["17.2%", "17.2%", "17.6%", "17.6%", "17.6%", "17.3%"]}
        rotate={["-57", "-57", "-50", "-50", "-50", "-48"]}
      />
      {/* q1 q3 */}
      <ArrowHead
        top={["50.8%", "50%", "51.8%", "51.8%", "51.8%", "51.8%"]}
        left={["24%", "24%", "25.5%", "25.5%", "25.5%", "26.6%"]}
        rotate={["0"]}
      />
      {/* q2 q3 */}
      <ArrowHead
        top={["41%", "41%", "41.7%", "41%", "41%", "42.6%"]}
        left={["28%", "28%", "27.1%", "27.2%", "27%", "27.3%"]}
        rotate={["55.5", "55.5", "40", "40", "40", "40"]}
        /*rotate={["47", "47", "40", "40", "40", "40"]} */
      />
      {/* q4 q5 */}
      <ArrowHead 
        top={["70%", "70%", "69%", "69%", "69%", "69%"]} 
        left={["38.5%", "38.5%", "38.85%", "38.85%", "38.85%", "38.5%"]} 
        rotate={["90"]} 
      />
      {/* q4 q6 */}
      <ArrowHead 
        top={["19.8%", "19.8%", "19.89%", "19.89%", "19.89%", "21.3%"]} 
        left={["54.1%", "54.1%", "55.3%", "55.3%", "55.2%", "56.5%"]} 
        rotate={["0"]} 
      />
      {/* q5 q7 */}
      <ArrowHead 
        top={["80%", "80.5%", "79.8%", "79.8%", "79.8%", "81%"]} 
        left={["54.1%", "54%", "55.1%", "55.1%", "55.1%", "56.5%"]} 
        rotate={["0"]} />
      {/* q5 q4 */}
      <ArrowHead 
        top={["30.3%"]}  
        left={["41.6%"]} 
        rotate={["-90"]} />

      {/* q3 q5 */}
      <ArrowHead
        top={["70.9%", "70.9%", "70.5%", "70.9%", "70.6%", "73%"]}
        left={["37%", "37%", "37.5%", "37.4%", "37.4%", "37.3%"]}
        rotate={["45"]}
      />
      {/* q3 q4 */}
      <ArrowHead
        top={["28.5%", "28.5%", "28.5%", "28.5%", "28.5%", "26.5%"]}
        left={["37.3%", "37.3%", "37.3%", "37.3%", "37.2%", "37.2%"]}
        rotate={["-60", "-60", "-55", "-55", "-55", "-45"]}
      />

      {/* q5 q6 */}
      <ArrowHead
        top={["71.2%", "71.2%", "73%", "73%", "73.5%", "73%"]}
        left={["43.2%", "43.2%", "43.8%", "43.8%", "44%", "42.9%"]}
        rotate={["129.5", "129.5", "128", "128", "130", "135"]}
      />

      {/* q6 q8 */}
      <ArrowHead
        top={["41%", "41%", "41.5%", "41.5%", "41.5%", "43.3%"]}
        left={["67.5%", "67.5%", "67.1%", "67.1%", "67.1%", "67.2%"]}
        rotate={["50", "50", "40", "40", "40", "40"]}
      />
      {/* q7 q4 */}
      <ArrowHead 
        top={["27.5%", "27.2%", "27.2%", "27.2%", "27.2%", "28%"]} 
        left={["43.3%", "43.3%", "43.6%", "43.6%", "43.6%", "42.5%"]} 
        rotate={["235", "240", "230", "230", "230", "225"]} />
      {/* q7 q8 */}
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
