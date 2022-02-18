pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./creatTokenExchange.sol";

contract creatPool is Ownable{
    address public pool;
    
    mapping(address => address) public poolOwner;
    
    function init(address seed, address token, address user)public  onlyOwner{
        pool = address(new creatTokenExchange(seed ,token,user));
        poolOwner[user] = pool;
    }
  

    function detonate() public  onlyOwner {
        selfdestruct(payable(owner()));
    }

}