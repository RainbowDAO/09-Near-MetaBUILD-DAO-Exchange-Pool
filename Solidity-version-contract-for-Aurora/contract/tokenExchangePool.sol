//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract tokenExchangePool{
    
    address public manager;
    
    mapping(address => bool) public allowTken;

    
    event tokenExchangeAmount (address tokenIn, address tokenTo, address to, uint value );
    constructor (address owner){
        manager = owner;
    }
    modifier onlyManager(){
        require(msg.sender == manager , "you are not manager");
        _;
    }
    function tokenAllow(address token) public onlyManager {
        allowTken[token] = true;
    }
    function tokenExchange(address tokenIn, address tokenTo, address to, uint value) external {\
        require()
        ERC20(tokenIn).transferFrom(to, address(this), value);
        ERC20(tokenTo).transfer(to, value);
        emit tokenExchangeAmount(tokenIn, tokenTo, to, value);
    }
}