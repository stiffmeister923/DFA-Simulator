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
            mx="15"
            left= "4%"
            top = "50%"
            
            >
            Show CFG
            </Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "16em"]}
          _focus=""
          bg="gray.800"
          color="white"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="semibold" color="white">
            Context-free Grammar
          </PopoverHeader>
          <PopoverBody align="center" color="white">
            {!prob2 ? (
               <VStack>
                <Text color="white">{"S → XYZABC"}</Text>
                <Text color="white">{"X → b | aa | ab"}</Text>
                <Text color="white">{"Y → aY | bY | λ"}</Text>
                <Text color="white">{"Z → bbZ | abaZ | abZ | λ"}</Text>
                <Text color="white">{"A → aaa | bbb"}</Text>
                <Text color="white">{"B → a | b"}</Text>
                <Text color="white">{"C → aC | bC | abC | λ"}</Text>
              </VStack>
            ) : (
              <VStack>
                <Text color="white">{"S → XYZABCD"}</Text>
                <Text color="white">{"X → 1X | 0X | λ"}</Text>
                <Text color="white">{"Y → 11 | 00 | 101 | 010"}</Text>
                <Text color="white">{"Z → 1Z | 0Z | 11Z | 00Z | 101Z | λ"}</Text>
                <Text color="white">{"A → 11 | 00"}</Text>
                <Text color="white">{"B → 11B | 00B | 101B | λ"}</Text>
                <Text color="white">{"C → 1 | 0"}</Text>
                <Text color="white">{"D → 1D | 0D | 11D | λ"}</Text>
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CFG;
