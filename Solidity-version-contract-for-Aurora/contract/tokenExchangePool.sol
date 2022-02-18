//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract tokenExchangePool{
    
    address public manager;
    
    event tokenExchangeAmount (address tokenIn, address tokenTo, address to, uint value );
    constructor (address owner){
        manager = owner;
    }
    modifier onlyManager(){
        require(msg.sender == manager , "you are not manager");
        _;
    }
    function tokenExchange(address tokenIn, address tokenTo, address to, uint value) external {
        ERC20(tokenIn).transferFrom(to, address(this), value);
        ERC20(tokenTo).transfer(to, value);
        emit tokenExchangeAmount(tokenIn, tokenTo, to, value);
    }
}