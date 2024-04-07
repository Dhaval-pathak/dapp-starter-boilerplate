# Dapp Starter Boilerplate

Welcome to the Dapp Starter Boilerplate! This project provides a basic structure for kickstarting your decentralized application (dApp) development. Feel free to clone and customize this project to suit your needs.

## Getting Started

1. **Clone or Download**

   Clone or download this project to your local machine.

2. **Install Dependencies**

   Navigate into the project directory and install the necessary packages by running:
   ```bash
   npm install

3. **Compile and Migrate Contracts**

    Make sure Truffle is installed globally (`truffle -g`). Then compile your smart contracts and migrate them to the blockchain by running:
    ```bash
      
    truffle compile
    truffle migrate --reset


4. **Run Tests**

    Test your smart contracts using Mocha and Chai by running:
    ```bash
    
    truffle test


5. **Activate Application**

   Go into the `App.js` folder and replace the placeholder API key with your own API key.

6. **Customize and Style**

    Feel free to customize and style the project according to your preferences.
    
    **Eject (Optional)**
    
    *Note: Ejecting is a one-way operation. Once you eject, you can't go back!*
    
    If you're not satisfied with the build tool and configuration choices, you can eject at any time. This command will copy all the configuration files and dependencies into your project,    giving you full control over them. To eject, run:
        ```bash
        
        npm run eject


## Dependencies

- @emotion/react: ^11.11.4
- @emotion/styled: ^11.11.5
- @mui/material: ^5.15.15
- axios: ^1.6.8
- bcryptjs: ^2.4.3
- body-parser: ^1.20.2
- cors: ^2.8.5
- express: ^4.19.2
- jsonwebtoken: ^9.0.2
- pg: ^8.11.4
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.22.3
- react-scripts: 5.0.1
- truffle: ^5.1.39
- web-vitals: ^2.1.4
- web3: ^4.7.0

## Folder Structure

- migrations: Contains Solidity migration files for deploying smart contracts.
- public: Contains static assets such as HTML, CSS, and JavaScript files.
- src: Contains the source code for the dApp, including React components and smart contract code.

