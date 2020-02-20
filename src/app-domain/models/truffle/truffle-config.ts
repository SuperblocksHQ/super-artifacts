export interface ITruffleConfig {
    // Information about the CLI
    // source: https://kalis.me/creating-truffle-plugins/

    truffle_directory: string; // Truffle executable location
    working_directory: string; // CWD
    _: string[]; // Raw positional command line arguments

    // Any additional command line flags / arguments
    myString: string; // --myString hello
    myint: number; // --myInt 5

    // Information included in the truffle-config.js file
    networks: { rinkeby: object, ropsten: object };
    compilers: { solc: object, vyper: {} };
    plugins: string[];
    api_keys: object;
    /* ... any other fields defined in truffle-config.js */

    // Network config
    network: string; // --network rinkeby|ropsten|etc
    network_id: number; // Current network id
    network_config: object; // Current network config (from truffle-config.js)

    // Directory information
    contracts_directory: string; // ./contracts
    build_directory: string; // ./build
    contracts_build_directory: string; // ./build/contracts
    migrations_directory: string; // ./migrations
    migrations_file_extension_regexp: RegExp;
    test_directory: string; // ./test
    test_file_extension_regexp: RegExp;

    // Superblocks
    deployment_id?: string;
    token?: string;
}
