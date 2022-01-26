pragma solidity =0.5.16;

import '../CockroachERC20.sol';

contract ERC20 is CockroachERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
