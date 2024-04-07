// Export the Truffle configuration object
module.exports = {
    // Network configurations
    networks: {
        // Configuration for the development network
        development: {
            host: '127.0.0.1',                     // Local host IP address
            port: '7545',                          // Port number for the development network
            network_id: '*'                        // Network ID: '*' matches any network
        }
    },
    contracts_directory: './src/contracts/',           // Directory where Solidity contracts are located
    contracts_build_directory: './src/truffle_abis',   // Directory where compiled contract artifacts will be stored
    // Compiler settings for Solidity
    compilers: {
        // Solidity compiler configuration
        solc: {
            version: '^0.8.0',                    // Solidity compiler version
            // Enable optimization
            optimizer: {
                enabled: true,                  // Number of optimization runs
                runs: 200
            }
        }
    }
};
