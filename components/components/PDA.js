import React, { useState } from "react";
import {
  Box,
  VStack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const PDA = ({ prob2 }) => {
  // State to toggle between PDA1 and PDA2
  

  return (
    <>
      <Popover isLazy placement="top">
        <PopoverTrigger>
          <Button mx="2">Show PDA</Button>
        </PopoverTrigger>
        <PopoverContent
          maxW="300px" // Set a maximum width for the popover content
          maxH="300px"
          overflowY="auto" // Enable vertical scrolling

          _focus=""
          bg="gray.800"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="semibold">Pushdown Automata</PopoverHeader>
          <PopoverBody align="center">
            {!prob2 ? (
              <VStack>
                <Box
                  as="img"
                  src="/pda2.jpeg"
                  alt="PDA 2"
                  width="100%"
                  height="100%"
                  maxHeight="500px" // Constrain the maximum height
                  objectFit="contain" // Ensure the image scales properly
                />
                <Button onClick={() => setShowPDA1(true)}>Show PDA 1</Button>
              </VStack>
            ) : (
              <VStack>
                <Box
                  as="img"
                  src="/pda1.jpeg"
                  alt="PDA 1"
                  width="100%"
                  height="100%"
                  maxHeight="500px" // Constrain the maximum height
                  objectFit="contain" // Ensure the image scales properly
                />
                
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PDA;
