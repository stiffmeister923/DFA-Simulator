
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

  // Example structure for two PDAs
  const pda1States = [
    { id: "q0", x: 50, y: 100, label: "q0" },
    { id: "q1", x: 150, y: 100, label: "q1" },
    { id: "q2", x: 250, y: 100, label: "q2" },
  ];

  const pda1Transitions = [
    { from: "q0", to: "q1", label: "a,ε→A" },
    { from: "q1", to: "q2", label: "b,A→ε" },
  ];

  const pda2States = [
    { id: "p0", x: 50, y: 100, label: "p0" },
    { id: "p1", x: 150, y: 100, label: "p1" },
    { id: "p2", x: 250, y: 100, label: "p2" },
  ];

  const pda2Transitions = [
    { from: "p0", to: "p1", label: "x,ε→X" },
    { from: "p1", to: "p2", label: "y,X→ε" },
  ];

  const drawPDA = (states, transitions) => (
    <Box as="svg" width="300" height="200">
      {states.map((state) => (
        <React.Fragment key={state.id}>
          <circle
            cx={state.x}
            cy={state.y}
            r="20"
            stroke="white"
            strokeWidth="2"
            fill="white"
          />
          <text x={state.x} y={state.y} textAnchor="middle" dy=".3em">
            {state.label}
          </text>
        </React.Fragment>
      ))}
      {transitions.map((trans, index) => {
        const fromState = states.find((state) => state.id === trans.from);
        const toState = states.find((state) => state.id === trans.to);
        return (
          <React.Fragment key={index}>
            <line
              x1={fromState.x}
              y1={fromState.y}
              x2={toState.x}
              y2={toState.y}
              stroke="white"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <text
              x={(fromState.x + toState.x) / 2}
              y={(fromState.y + toState.y) / 2 - 10}
              textAnchor="middle"
            >
              {trans.label}
            </text>
          </React.Fragment>
        );
      })}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="10"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
    </Box>
  );

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
                {drawPDA(pda2States, pda2Transitions)}
                <Button onClick={() => setShowPDA1(true)}>Show PDA 1</Button>
              </VStack>
            ) : (
              <VStack>
                {drawPDA(pda1States, pda1Transitions)}
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
