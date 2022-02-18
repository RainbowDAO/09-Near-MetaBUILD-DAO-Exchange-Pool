pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./creatTokenExchange.sol";

contract creatPool is Ownable{
    address  public pool;
    
    mapping(address => address) public poolOwner;
    
    function init(address seed, address token, address user)public  onlyOwner{
        bank = address(new creatTokenExchange(user));

    }
  

    function detonate() public  onlyOwner {
        selfdestruct(payable(owner()));
    }

}