pragma solidity ^0.8.0;

contract Content {
    Metadata public metadata;

    struct Metadata {
        address owner;
        string label;
        string title;
        string link;
    }

    function publish(string calldata _label, string calldata _title, string calldata _link) external {
        metadata = Metadata(msg.sender, _label, _title, _link);
    }
}
