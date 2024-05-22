import {
  Flex,
  Input,
  Button,
  Text,
  Heading,
  Box,
  Divider,
  Tag,
  Code,
} from "@chakra-ui/react";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const LeftBox = ({
  handleTest,
  data,
  prob2,
  string,
  handleReset,
  handleTextChange,
  handleSimulation,
  simulating,
  count,
  regex1,
  regex2,
}) => {
  return (
    <>
      <Box
        w={["20em", "20em", "40em", "40em", "40em", "30em"]}
        mr={[0, 0, 0, 0, 0, 24]}
        mt={[14, 14, 16, 16, 16, 0]}
      >
        <Box>
          <form onSubmit={handleTest}>
            {data &&
              data.map((result, index) => (
                <Box key={index}>
                  <Flex align="center">
                    <Heading >Input String {index + 1}:</Heading>
                    <Flex align="center">
                      <Button
                        variant="data"
                        rightIcon={
                          result.result === "Valid" ? (
                            <Box color="teal.300">
                              <FaCheck />
                            </Box>
                          ) : (
                            result.result === "Invalid" && (
                              <Box color="pink.300">
                                <ImCross />
                              </Box>
                            )
                          )
                        }
                      >
                        {result.result}
                      </Button>
                      <Button
                        isLoading={simulating}
                        loadingText="simulating..."
                        spinnerPlacement="start"
                        onClick={() => handleSimulation(index)}
                        ml={2}
                        disabled={simulating}
                      >
                        Simulate
                      </Button>
                    </Flex>
                  </Flex>
                  <Text color="white">{result.input}</Text>
                </Box>
              ))}
            
              <Box>
                <Flex align="center" mb={2}>
        <Heading size="sm" mr={2}>
          Language Accepted:
        </Heading>
        <Tag fontSize={["0.7em", "0.7em", "0.9em"]}>
          {!prob2 ? "[a, b]" : "[0, 1]"}
        </Tag>
      </Flex>
              </Box>
              <Input
                as="textarea"
                rows={5}
                maxLength="500"
                fontSize={["0.7em", "0.7em", "0.9em"]}
                placeholder={!prob2 ? "e.g. babbabab,baba,ab" : "e.g. 0110101,1010,010"}
                value={string}
                onChange={handleTextChange}
              />
           

            <Flex justify="space-between" align="center">
              <Flex>
                <Button type="submit" disabled={simulating}>
                  Validate
                </Button>
                <Button
                  variant="clear"
                  onClick={handleReset}
                  disabled={simulating}
                >
                  Clear
                </Button>
              </Flex>
              <Text
                fontWeight="semibold"
                fontSize={["0.7em", "0.7em", "0.9em"]}
              >
                Limit: {count}/500
              </Text>
            </Flex>
            <Divider my="6" />
            {/* DIVIDER OF LEFT CONTAINER */}
            <Flex
              align="center"
              direction={["column", "column", "row", "row", "row", "none"]}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              // justify="space-between"
            >
              <Heading>Regular Expression:</Heading>
              <Tag my={1} fontSize={["0.7em", "0.7em", "0.9em"]}>
                {!prob2 ? regex1 : regex2}
              </Tag>
            </Flex>
            <Flex
              my={2}
              direction={["column", "column", "row", "row", "row", "none"]}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              align="center"
            >
              
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default LeftBox;
