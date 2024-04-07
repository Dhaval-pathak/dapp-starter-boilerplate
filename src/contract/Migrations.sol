pragma solidity ^0.8.0; 

contract Migrations {
    address public owner; 
    uint public last_completed_migration; 

    constructor() public {
        owner = msg.sender; 
    }

    
    modifier restricted() {
        require(msg.sender == owner); 
        _; 
    }

    // Function to update the last completed migration
    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed; // Update the last completed migration
    }

    // Function to upgrade the contract to a new address
    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address); // Create a new instance of the Migrations contract at the new address
        upgraded.setCompleted(last_completed_migration); // Call the setCompleted function of the upgraded contract
    }
}
