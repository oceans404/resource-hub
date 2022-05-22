pragma solidity ^0.8.0;

contract Content {
    Metadata public metadata;

    struct Metadata {
        address owner;
        string label;
        string title;
        string link;
    }

    // TODO: abstract private keys as env variables
    // TODO: byte arrays instead of string arrays to save gas
    function publish(string calldata _label, string calldata _title, string calldata _link) external {
        metadata = Metadata(msg.sender, _label, _title, _link);
    }
}
