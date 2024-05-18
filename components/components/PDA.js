import React, { useState } from "react";
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

const PDA = () => {
  // State to toggle between PDA1 and PDA2
  const [showPDA1, setShowPDA1] = useState(true);

  return (
    <>
      <Popover isLazy placement="top">
        <PopoverTrigger>
          <Button mx="2">Show PDA</Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "16em"]}
          _focus=""
          bg="black"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="semibold">Pushdown Automata</PopoverHeader>
          <PopoverBody align="center">
            {!showPDA1 ? (
              <VStack>
                <Box as="img" src="pda2.jpeg" alt="PDA 2" />
                <Button onClick={() => setShowPDA1(true)}>Show PDA 1</Button>
              </VStack>
            ) : (
              <VStack>
                <Box as="img" src="pda1.jpeg" alt="PDA 1" />
                <Button onClick={() => setShowPDA1(false)}>Show PDA 2</Button>
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PDA;
