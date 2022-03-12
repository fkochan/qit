// SPDX-License-Identifier: MIT

// Special thanks to:
// @openzeppelin for the code libraries
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title QIT
/// @author Crispy
contract QIT is ERC20, ERC20Burnable, Ownable {

    uint256 public MAX_SUPPLY = 142857000e18;

    constructor() ERC20("QIT Token", "QIT") {
        _mint(msg.sender, 142857000e18);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(to != address(0), "QIT: no mint to zero address");
        require(totalSupply() + amount >= MAX_SUPPLY);
        _mint(to, amount);
    }

}
