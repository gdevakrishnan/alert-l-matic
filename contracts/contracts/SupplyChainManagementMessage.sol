// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChainManagement {
    // Define a structure to represent a message
    struct Message {
        uint256 id;
        address sender;
        address receiver;
        string content;
        uint256 timestamp;
    }

    // State variables
    address public owner;
    mapping(address => bool) public officials; // Track registered officials
    Message[] public messages; // Array to store all messages
    uint256 public messageCount; // Counter for message IDs

    // Mapping to track who can view which message
    mapping(uint256 => mapping(address => bool)) public messagePermissions;

    // Events
    event MessageSent(uint256 id, address indexed sender, address indexed receiver, string content, uint256 timestamp);
    event OfficialRegistered(address indexed official);
    event OfficialRemoved(address indexed official);
    event PermissionGranted(uint256 indexed messageId, address indexed official);
    event PermissionRevoked(uint256 indexed messageId, address indexed official);

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier onlyOfficial() {
        require(officials[msg.sender], "Not an official");
        _;
    }

    // Constructor
    constructor() {
        owner = msg.sender; // Set the contract deployer as the owner
    }

    // Register a new official
    function registerOfficial(address _official) external onlyOwner {
        require(!officials[_official], "Official already registered");
        officials[_official] = true;
        emit OfficialRegistered(_official);
    }

    // Remove an official
    function removeOfficial(address _official) external onlyOwner {
        require(officials[_official], "Official not found");
        officials[_official] = false;
        emit OfficialRemoved(_official);
    }

    // Send a message
    function sendMessage(address _receiver, string calldata _content) external onlyOfficial {
        require(officials[_receiver], "Receiver is not a registered official");

        // Increment the message ID
        messageCount++;

        // Create and store the new message
        messages.push(Message({
            id: messageCount,
            sender: msg.sender,
            receiver: _receiver,
            content: _content,
            timestamp: block.timestamp
        }));

        // Grant permission to the sender and receiver to view the message
        messagePermissions[messageCount][msg.sender] = true;
        messagePermissions[messageCount][_receiver] = true;

        emit MessageSent(messageCount, msg.sender, _receiver, _content, block.timestamp);
    }

    // Grant view permission for a specific message to an official
    function grantPermission(uint256 _messageId, address _official) external onlyOfficial {
        require(messagePermissions[_messageId][msg.sender], "Not authorized to grant permission");
        require(officials[_official], "Not a registered official");
        messagePermissions[_messageId][_official] = true;
        emit PermissionGranted(_messageId, _official);
    }

    // Revoke view permission for a specific message from an official
    function revokePermission(uint256 _messageId, address _official) external onlyOfficial {
        require(messagePermissions[_messageId][msg.sender], "Not authorized to revoke permission");
        messagePermissions[_messageId][_official] = false;
        emit PermissionRevoked(_messageId, _official);
    }

    // Get the details of a specific message by ID
    function getMessage(uint256 _id) external view returns (Message memory) {
        require(_id > 0 && _id <= messageCount, "Message ID out of range");
        require(messagePermissions[_id][msg.sender], "Not authorized to view this message");
        return messages[_id - 1]; // Array is 0-indexed
    }

    // Get the total number of messages
    function getMessageCount() external view returns (uint256) {
        return messageCount;
    }
}


// 0xd9145CCE52D386f254917e481eB44e9943F39138