import { Flex, useToast, Divider } from "@chakra-ui/react";
import { useState } from "react";

import { DFA, problem1, problem2, language1, language2 } from "./DFA/Logic";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";

const Main = () => {
  const regex1 = "(b+aa+ab)(a+b)*(bb+aba+ab)*(aaa+bbb)(a+b)(a+b+ab)*";
  const regex2 =
    "(1+0)*(11+00+101+010)(1+0+11+00+101)*(11+00)(11+00+101)*(1+0)(1+0+11)*";
  const [string, setString] = useState("");
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  const [prob2, setProb2] = useState(false);
  const [currentNode, setCurrentNode] = useState(0);
  const [simulating, setSimulating] = useState(false);

  const validString = useToast();
  const trapString = useToast();
  const shortString = useToast();
  const notInLanguageString = useToast();
  const closeToasts = useToast();

  let input = string;
  let results = "";

  const handleTextChange = (e) => {
    const stringValue = e.target.value;
    setString(stringValue);
    const countValue = e.target.value.length;
    setCount(countValue);
  };

  const handleReset = () => {
    setString("");
    setCount(0);
    setData("");
    closeAll();
  };
  const handleSwitch = () => {
    setProb2((prev) => !prev);
    setData("");
    closeAll();
  };

  const closeAll = () => {
    closeToasts.closeAll();
  };
  const validToast = () => {
    validString({
      title: "Valid String!",
      status: "success",
      isClosable: true,
    });
  };
  const trapToast = () => {
    trapString({
      title: "Invalid: Trapped",
      status: "error",
      isClosable: true,
    });
  };
  const shortToast = () => {
    shortString({
      title: "Invalid: Too Short",
      status: "error",
      isClosable: true,
    });
  };
  const notInLanguageToast = () => {
    notInLanguageString({
      title: "Empty/Invalid Input",
      status: "warning",
      isClosable: true,
    });
  };

  const handleValid = () => {
    // console.log("DONE OK");
    setSimulating(false);
    validToast();
    setData(results);
  };
  const handleTrapped = () => {
    // console.log("DONE TRAPPED");
    setSimulating(false);
    trapToast();
    setData(results);
  };
  const handleShort = () => {
    // console.log("DONE SHORT");
    setSimulating(false);
    shortToast();
    setData(results);
  };

  const handleInputString = (input) => {
    // Ensure input is not empty or undefined
    if (!input) return [];

    // If input contains newlines, split and process each line
    if (input.includes(",")) {
      return input
        .trim()
        .split(",")
        .map((str) => str.replace(/\s+/g, "").toLowerCase());
    } else {
      // If input is a single string, process it directly
      return [input.replace(/\s+/g, "").toLowerCase()];
    }
  };

  const handleTest = (e) => {
    e.preventDefault();
    let processedInputs = handleInputString(input);

    const results = processedInputs.map((str) => {
      if (str === "") {
        notInLanguageToast();
        return {
          input: str,
          result: "Invalid",
          message: "Empty/Invalid Input",
        };
      } else if (!prob2 && (str.includes("a") || str.includes("b"))) {
        const result = new DFA(str, problem1, language1);
        return { input: str, result: result.result };
      } else if (prob2 && (str.includes("0") || str.includes("1"))) {
        const result = new DFA(str, problem2, language2);
        return { input: str, result: result.result };
      } else {
        notInLanguageToast();
        return {
          input: str,
          result: "Invalid",
          message: "No valid configuration for input string",
        };
      }
    });

    setData(results);
  };

  const handleSimulation = async (index) => {
    let processedInputs = handleInputString(input);
    const str = processedInputs[index];
    if (!str) return; // If the string is undefined or empty, return

    const problem = prob2 ? problem2 : problem1;
    const language = prob2 ? language2 : language1;

    if (
      (prob2 && (str.includes("0") || str.includes("1"))) ||
      (!prob2 && (str.includes("a") || str.includes("b")))
    ) {
      setSimulating(true);

      const dfa = new DFA(str, problem, language);
      const pathWithZeroes = [0].concat(...dfa.path.map((e) => [e, 0]));

      const simulationResults = []; // Array to store the simulation result
      for (let i = 0; i < pathWithZeroes.length; i++) {
        const node = pathWithZeroes[i];
        setCurrentNode(node);
        if (
          node === pathWithZeroes[pathWithZeroes.length - 2] &&
          !pathWithZeroes.includes("T") &&
          !pathWithZeroes.includes("eos")
        ) {
          handleValid();
          simulationResults.push({ input: str, result: "Valid" });
          break; // Exit the loop after handling valid result
        } else if (node === "T" && pathWithZeroes.slice(-4)[0] === "T") {
          handleTrapped();
          simulationResults.push({ input: str, result: "Trapped" });
          break; // Exit the loop after handling trapped result
        } else if (
          pathWithZeroes.slice(-4)[2] === node &&
          !pathWithZeroes.includes("T")
        ) {
          handleShort();
          simulationResults.push({ input: str, result: "Short" });
          break; // Exit the loop after handling short result
        }
        await new Promise((resolve) => setTimeout(resolve, 200)); // Delay before moving to the next node
      }

      setData(() => {
        // Create a copy of the previous data
        const newData = [...data];

        // Iterate over the simulation results
        simulationResults.forEach((simulationResult) => {
          const { input } = simulationResult;

          // Check if the input already exists in the data
          const existingIndex = newData.findIndex(
            (item) => item.input === input
          );

          if (existingIndex !== -1) {
            // If input exists, replace its result with the new simulation result
            newData[existingIndex] = simulationResult;
          } else {
            // If input doesn't exist, append the new simulation result
            newData.push(simulationResult);
          }
        });

        return newData;
      });

      setSimulating(false); // Set simulating to false after simulation is done
    } else {
      notInLanguageToast();
    }
  };

  return (
    <Flex direction="column" align="center">
      <RightBox
        prob2={prob2}
        simulating={simulating}
        regex1={regex1}
        regex2={regex2}
        currentNode={currentNode}
        handleSwitch={handleSwitch}
      />
      <Divider display="block" mt="6" mb="2" />
      <LeftBox
        handleTest={handleTest}
        data={data}
        prob2={prob2}
        string={string}
        handleTextChange={handleTextChange}
        simulating={simulating}
        handleSimulation={handleSimulation}
        handleReset={handleReset}
        count={count}
        regex1={regex1}
        regex2={regex2}
      />
    </Flex>
  );
};

export default Main;
