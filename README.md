# Coding Lessons Repository

This repository serves as a collection of lessons on various coding concepts and practices. While the initial focus is on unit testing in TypeScript using Jest, the repository will evolve to cover other programming languages, frameworks, and tools in future lessons.

## Prerequisites

Before you begin, ensure that you have the following installed:

1. **Git**: To manage the repository.
2. **nvm (Node Version Manager)**: To manage and switch between different versions of Node.js.

### Installing `nvm`

To install `nvm`, visit the official [nvm repository on GitHub](https://github.com/nvm-sh/nvm) and follow the installation instructions for your operating system.

Once installed, verify the installation by running:

```
nvm --version
```

After confirming `nvm` is installed, use the latest version of Node.js by running:

```
nvm install node
nvm use node
```

## Installation and Usage

### 1. Install Dependencies:

Make sure you're using the latest Node.js version with `nvm`:

```
nvm use node
```

Now, install the project dependencies:

```
npm install
```

### 2. Run the Unit Tests (for Jest Lesson):

```
npm test
```

This will execute all the test cases under the `src` folder, including both positive and negative cases.

## Project Structure

Currently, the project has the following structure for the Jest lesson:

```
src/
├── math/
│   ├── add.ts          # Example function being tested
│   └── tests/
│       └── math.spec.ts # Unit tests for the function
```

As more lessons are added, the structure of this repository will evolve to include different topics.

## Troubleshooting

If you encounter any issues, ensure you are using the latest Node.js version by running:

```
nvm use node
```

---

Happy learning and coding!
