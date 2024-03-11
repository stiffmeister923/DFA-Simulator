export class Node {
  constructor(nodeNumber, direction1, direction2) {
    this.nodeNumber = nodeNumber;
    this.direction = [direction1, direction2];
  }
}

export class DFA {
  constructor(input, problem, language) {
    this.input = input;
    this.problem = problem;
    this.language = language;

    this.currentNode = 1;
    this.currentInputPos = -1;
    this.path = [1];

    this.node();
  }
  node() {
    this.currentInputPos += 1;
    if (this.currentInputPos == "T") {
      this.result = "Invalid";
      // console.log("Invalid String TRAP");
      // console.log("Path Taken:", this.path);
    } else {
      if (
        this.currentNode < this.problem.length &&
        this.input[this.currentInputPos] != undefined
      ) {
        let node = this.problem[this.currentNode - 1];
        // console.log(this.path, this.input[this.currentInputPos]);

        if (
          this.input[this.currentInputPos] == "a" ||
          this.input[this.currentInputPos] == "b" ||
          this.input[this.currentInputPos] == "0" ||
          this.input[this.currentInputPos] == "1"
        ) {
          this.currentNode =
            node.direction[
              this.language.indexOf(this.input[this.currentInputPos])
            ];
          // console.log(`currentNode: ${this.currentNode}`);
          // console.log(
          //   `node.direction[]: ${this.language.indexOf(
          //     this.input[this.currentInputPos]
          //   )}`
          // );
          this.currentNode != undefined && this.path.push(this.currentNode);
        } else {
          this.currentNode = "T";
          // console.log(
          //   "String contains a letter not in the language - ",
          //   this.language
          // );
        }
        this.node();
      } else {
        if (this.currentNode == this.problem.length) {
          this.result = "Valid";
          // console.log("Valid String");
          // console.log("Path Taken", this.path);
        } else {
          this.result = "Invalid";
          // console.log("Invalid String SHORT");
          this.path.push("eos");
          // console.log("Path Taken", this.path);
        }
      }
    }
  }
}

export const problem1 = [
  new Node(1, 2, 3),
  new Node(2, 3, 3),
  new Node(3, 4, 5),
  new Node(4, 6, 5),
  new Node(5, 4, 7),
  new Node(6, 8, 5),
  new Node(7, 4, 8),
  new Node(8, 9, 9),
  new Node(9, 9, 9),
];

export const problem2 = [
  new Node(1, 3, 2),
  new Node(2, 4, 5),
  new Node(3, 5, 4),
  new Node(4, 5, 5),
  new Node(5, 6, 7),
  new Node(6, 8, 7),
  new Node(7, 6, 8),
  new Node(8, 9, 9),
  new Node(9, 9, 9),
];

export const language1 = ["a", "b"];
export const language2 = ["0", "1"];
