# Super Artifacts

[![Superblocks](https://superblocks.com/d/superblocks/projects/truffle-artifacts-plugin.svg?branch=master)](https://superblocks.com/d/superblocks/projects/truffle-artifacts-plugin) ![npm](https://img.shields.io/npm/v/super-artifacts?color=blue)

Truffle plugin to be used with Superblocks CI. This plugin enables capturing deployment artifacts and pushing them to the Superblocks platform.

## Usage

1. Install the npm package by running 

        npm install super-artifacts

2. Add the plugin to your truffle config file
     
        module.exports = {
            plugins: ["super-artifacts"],
            ...
        
3. Enable artifacts collection in the Superblocks provider by adding the following flag*:
        
        saveArtifacts: 'true'
        
     for example:
     
        new ManualSignProvider({ 
                      networkId: '4',
                      saveArtifacts: 'true',
                      ...
      
      
   *You need at least version 0.0.17 of super-web3-provider to use this plugin
