# Online Gaming with gRPC in TypeScript

Welcome to the Online Gaming project built with gRPC and TypeScript. This project demonstrates how to create a real-time game server and matchmaking service using the gRPC framework.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: [Download and install Node.js](https://nodejs.org/).
- npm (Node Package Manager): npm comes bundled with Node.js, so no additional installation is required.

### Installation

Clone the repository:

   ```bash
   git clone https://github.com/BaseMax/online-gaming-grpc-ts.git
   cd online-gaming-grpc-ts
   ```

Install project dependencies:

  ```bash
  npm install
  ```

### Building

Build the project by running:

  ```bash
  npm run build
  ```

### Usage

To start the game server, run the following command:

  ```bash
  npm run start:server
  ```

The game server will be running on `http://localhost:50051`.

### Starting the Matchmaking Service

To start the matchmaking service, run the following command:

  ```bash
  npm run start:matchmaking
  ```

The matchmaking service will be running on `http://localhost:50052`.

### Creating a Game

You can create a new game by making gRPC requests to the matchmaking service. Refer to the API documentation or example code for details on how to use the matchmaking service to create and join games.

## Contributing

We welcome contributions from the community! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with a clear and concise commit message.
- Push your changes to your fork.
- Create a pull request to the main repository's main branch.
- Please ensure your code follows best practices and includes appropriate tests.

## License

This project is licensed under the GPL-3.0 License.

Copyright 2023, Max Base
