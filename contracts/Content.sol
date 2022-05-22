pragma solidity ^0.8.0;

/*
Needed fields:
- Array of labels
- Owner's address
- Title of the file
- IPFS link

Need to find a way to support batching. Accept a list of IPFS links
and titles?

Verify that the batching is done on the JS level, not here
*/
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
