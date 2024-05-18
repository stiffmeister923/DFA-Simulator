import {
  Box,
  VStack,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const CFG = ({ prob2 }) => {
  return (
    <>
      <Popover isLazy placement="top">
        <PopoverTrigger>
          <Button 
            mx="2"
            left= "4%"
            top = "50%"
            >
            Show CFG
            </Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "16em"]}
          _focus=""
          bg="blue.500"
          color="white"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="semibold" color="black">
            Context-free Grammar
          </PopoverHeader>
          <PopoverBody align="center">
            {!prob2 ? (
              <VStack>
                <Text>{"S → XYZABC"}</Text>
                <Text>{"X → b | aa | ab"}</Text>
                <Text>{"Y → aY | bY | ɛ"}</Text>
                <Text>{"Z → bbZ | abaZ | abZ | ɛ"}</Text>
                <Text>{"A → aaa | bbb"}</Text>
                <Text>{"B → a | b"}</Text>
                <Text>{"C → aC | bC | abC | ɛ"}</Text>
              </VStack>
            ) : (
              <VStack>
                <Text>{"S → XYZABCD"}</Text>
                <Text>{"X → 1X | 0X | ɛ"}</Text>
                <Text>{"Y → 11 | 00 | 101 | 010"}</Text>
                <Text>{"Z → 1Z | 0Z | 11Z | 00Z | 101Z | ɛ"}</Text>
                <Text>{"A → 11 | 00"}</Text>
                <Text>{"B → 11B | 00B | 101B | ɛ"}</Text>
                <Text>{"C → 1 | 0"}</Text>
                <Text>{"D → 1D | 0D | 11D | ɛ"}</Text>
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CFG;
