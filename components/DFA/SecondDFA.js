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

const SecondDFA = ({ currentNodeVal, simulatingStatus }) => {
  return (
    <>
      {/* q1 q2 */}
      <Text size="label" top="31%" left="14.5%" color="#C3E0E5">
        1
      </Text>
      {/* q1 q3 */}
      <Text size="label" top="71%" left="14.5%" color="#C3E0E5">
        0
      </Text>
      {/* q3 q4 */}
      <Text size="label" top="71%" left="26%" color="#C3E0E5">
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
      <Text size="label" top="71%" left="42.5%" color="#C3E0E5">
        0
      </Text>
      {/* q5 q6 */}
      <Text size="label" top="71%" left="50%" color="#C3E0E5">
        0
      </Text>
      {/* q6 q8 */}
      <Text size="label" top="71%" left="70%" color="#C3E0E5">
        0
      </Text>
      {/* q7 q8 */}
      <Text size="label" top="31%" left="70%" color="#C3E0E5">
        1
      </Text>
      {/* q9 q9 */}
      <Text size="label" top="50%" 
        left={["103%", "103%", "98.5%", "98.5%", "98.5%", "97.5%"]} 
        color="#C3E0E5">
        1,0
      </Text>
      <ArrowLoopSm
        top={["49.9%", "49.9%", "49.9%", "49.9%", "49.9%", "20%"]}
        left={["97.5%", "97.5%", "95.5%", "95.5%", "95.5%", "64%"]}
        rotate="180"
      />
      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "50%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "94.5%"]}
        rotate="200"
      />

      {/* q1 q2 */}
      <ArrowBody
        w={["4em", "4em", "7em", "8em", "8em", "10em"]}
        top={["40%", "40%", "40%", "40%", "40%", "40%"]}
        left={["18%", "18%", "16%", "16%", "16%", "16%"]}
        rotate={["-55", "-55", "-55", "-55", "-55", "-45"]}
      />
      {/* q1 q3 */}
      <ArrowBody
        w={["4em", "4em", "7em", "8em", "8em", "10em"]}
        top={["70%", "70%", "70%", "70%", "70%", "70%"]}
        left={["11%", "11%", "13%", "13%", "13%", "14%"]}
        rotate={["55", "55", "55", "55", "55", "45"]}
      />
      {/* q2 q4 */}
      <ArrowBody
        w={["4em", "4em", "7em", "8em", "8em", "10em"]}
        top={["40%", "40%", "40%", "40%", "40%", "40%"]}
        left={["22%", "22%", "24%", "24%", "24%", "24%"]}
        rotate={["55", "55", "55", "55", "55", "45"]}
      />
      {/* q2 q5 */}
      <ArrowBody
        w={["4.5em", "4.3em", "9em", "9em", "9em", "13em"]}
        top={["26%"]}
        left={["34%"]}
        rotate="0"
      />
      {/* q2 q5 */}
      <ArrowBody
        w={["4em", "4em", "5em", "5em", "5em", "5em"]}
        top={["35%"]}
        left={["40%", "40%", "42.8%", "42.8%", "42.8%", "43.2%"]}
        rotate="90"
      />
      {/* q3 q4 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "6em", "8em"]}
        top={["75%", "75%", "75%", "75%", "75%", "77%"]}
        left={["27%", "27%", "25%", "25%", "25%", "24%"]}
        rotate={["-55", "-55", "-55", "-55", "-55", "-45"]}
      />
      {/* q3 q5 */}
      <ArrowBody
        w={["4.5em", "4.3em", "9em", "9em", "9em", "13em"]}
        top={["87%"]}
        left="34%"
        rotate="0"
      />
      {/* q3 q5 */}
      <ArrowBody
        w={["2.7em", "2.7em", "5em", "5em", "5em", "5em"]}
        top={["68%"]}
        left={["40%", "40%", "42.8%", "42.8%", "42.8%", "43.2%"]}
        rotate="90"
      />
      {/* q4 q5 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8.2em"]}
        top={["57%", "57%", "55%", "55%", "55%", "55%"]}
        left="35%"
        rotate="0"
      />
      {/* q5 q6 */}
      <ArrowBody
        w={["5em", "5em", "7em", "9em", "9em", "9em"]}
        top={["75%"]}
        left={["49%", "49%", "52%", "52%", "52%", "52%"]}
        rotate={["57", "57", "50", "50", "50", "37"]}
      />
      {/* q5 q7 */}
      <ArrowBody
        w={["5em", "6em", "9em", "9em", "9em", "9em"]}
        top={["39%"]}
        left={["55%", "55%", "52%", "52%", "52%", "52%"]}
        rotate={["-57", "-57", "-50", "-50", "-50", "-37"]}
      />
      {/* q7 q6 */}
      <ArrowBody
        w={["7em", "7em", "11em", "11em", "11em", "11em"]}
        top="50%"
        left={["53.8%", "53.8%", "56%", "56%", "56%", "56.5%"]}
        rotate="90"
      />
      {/* q6 q7 */}
      <ArrowBody
        w={["7em", "7em", "11em", "11em", "15em", "11em"]}
        top={["50%"]}
        left={["57.3%", "57.3%", "59.5%", "59.5%", "59.5%", "60.5%"]}
        rotate="90"
      />
      {/* q7 q8 */}
      <ArrowBody
        w={["6em", "6em", "9em", "9em", "9em", "9em"]}
        top={["39%"]}
        left={["65%", "65%", "68%", "68%", "68%", "68%"]}
        rotate={["57", "57", "50", "50", "50", "37"]}
      />
      {/* q6 q8 */}
      <ArrowBody
        w={["6em", "6em", "9em", "9em", "9em", "9em"]}
        top="75%"
        left={["70.5%", "70.5%", "68%", "68%", "68%", "68%"]}
        rotate={["-57", "-57", "-50", "-50", "-50", "-37"]}
      />
      {/* q8 q9 */}
      <ArrowBody
        w={["3em", "3em", "7em", "7em", "7em", "8.2em"]}
        top={["57.3%", "57.3%", "55%", "55%", "55%", "55%"]}
        left="85%"
      />
      {/* q1 q2 */}
      <ArrowHead 
        top={["28.9%", "28.9%", "28%", "28%", "28%", "28%"]}
        left={["16.9%", "17.3%", "16.8%", "16.8%", "17%", "17.5%"]} 
        rotate={["-53", "-55", "-53", "-53", "-53", "-45"]} 
      />
      {/* q1 q3 */}
      <ArrowHead 
        top={["71%", "71%", "72.4%", "72.4%", "72.4%", "73.2%"]} 
        left={["17.3%", "17.3%", "16.7%", "16.7%", "16.7%", "17.2%"]}
        rotate={["49", "49", "49", "49", "49", "45"]}
      />
      {/* q2 q4 */}
      <ArrowHead 
        top={["40.5%", "41%", "41.5%", "41.5%", "41.5%", "43.2%"]} 
        left={["27.9%", "27.9%", "27.2%", "27.2%", "27.2%", "27.2%"]}
        rotate={["50", "50", "50", "50", "50", "40"]} 
      />
      {/* q3 q4 */}
      <ArrowHead 
        top={["59%", "59%", "59%", "59%", "59%", "58%"]}
        left={["28%", "27.8%", "27.2%", "27.2%", "27.2%", "27.5%"]} 
        rotate={["-60", "-60", "-60", "-60", "-60", "-50"]} 
      />
      {/* q5 q6 */}
      <ArrowHead 
        top={["77.4%", "77.4%", "78.3%", "78.3%", "78.3%", "80.6%"]}
        left={["55.6%", "55.6%", "56.3%", "56.3%", "56.3%", "56.8%"]}
        rotate={["46", "46", "42", "42", "42", "28"]} 
      />
      {/* q7 q8 */}
      <ArrowHead 
        top={["41.6%", "41.6%", "41.6%", "41.6%", "41.6%", "43%"]} 
        left={["71.8%", "71.6%", "72.1%", "72.1%", "72.1%", "72.2%"]} 
        rotate={["52", "52", "46", "46", "46", "30"]} 
      />
      {/* q5 q7 */}
      <ArrowHead 
        top={["22.2%", "22.2%", "20.6%", "20.6%", "20.6%", "20.6%"]} 
        left={["56%", "56%", "55.8%", "55.8%", "55.8%", "56.8%"]}
        rotate={["-56", "-56", "-49", "-49", "-49", "-38"]}
      />
      {/* q6 q8 */}
      <ArrowHead 
        top={["57.8%", "57.8%", "57.8%", "57.8%", "57.8%", "57.7%"]} 
        left={["71.7%", "71.7%", "71.7%", "71.7%", "71.7%", "72.3%"]} 
        rotate={["-58", "-58", "-45", "-45", "-45", "-40"]} 
      />
      {/* q4 q5 */}
      <ArrowHead 
        top={["49.3%", "49.3%", "49.85%", "49.85%", "49.85%", "50%"]} 
        left={["38.9%", "38.9%", "40.2%", "40.2%", "40.2%", "41.5%"]} 
        rotate="0"
      />
      {/* q8 q9 */}
      <ArrowHead 
        top={["49.8%", "49.8%", "49.8%", "49.8%", "49.8%", "49.9%"]} 
        left={["84.3%", "84.3%", "85.1%", "85.1%", "85.1%", "86.5%"]} 
        rotate="0"
      />
      {/* q2 q5 */}
      <ArrowHead 
        top={["39.6%", "39.6%", "38.9%", "38.9%", "38.9%", "38%"]} 
        left={["44.8%", "44.7%", "45.1%", "45.1%", "45%", "44.7%"]} 
        rotate= "90"
      />
      {/* q7 q6 */}
      <ArrowHead 
        top={["74.8%", "74.8%", "74.8%", "74.8%", "74.8%", "75.3%"]} 
        left={["58.3%", "58.5%", "58.3%", "58.3%", "58.3%", "58.1%"]} 
        rotate="90" 
      />
      {/* q6 q7 */}
      <ArrowHead 
        top={["24.8%", "24.8%", "24.6%", "24.6%", "24.6%", "24.8%"]} 
        left={["62.1%", "62.1%", "61.9%", "61.9%", "61.9%", "62.1%"]} 
        rotate="-90"
      />
      {/* q3 q5 */}
      <ArrowHead 
        top={["60%", "60%", "61%", "61%", "61%", "61.8%"]} 
        left={["44.7%", "44.7%", "45%", "45%", "45%", "44.7%"]} 
        rotate="-90"
      />
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
