pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../lib/TransferHelper.sol";



contract creatTokenExchange {
    uint public digOutAmount;
    uint public allReceived;
    uint public lockTime;
    string public poolName;
    string public logo;
    string public introduction;
    uint public Stime;
    uint public Etime;
    event PurchaseRecord (address  User , uint indexed tokenAmount , uint indexed rbtAmount ,address indexed tokenAddress);
    mapping(address => Record[]) public lockUpTotal;

    struct Record {
        uint startTime;//lock start time
        uint endTime;//lock end time
        uint amount;//exchange RBTtoken amount
        uint extracted;//extracted
        uint price;//set exchange price
        uint mortgage;//lock amount
    }
    address public _RBT_SEED;
    address public _Rbt;
    address public admin;
    uint public exchangeRate;
    constructor (
        address seed,
        address token,
        address Aadmin
    ){
        _RBT_SEED = seed;
        _Rbt = token;
        admin = Aadmin;
    }
    modifier onlyAdmin {
        require(msg.sender == admin , "you are not admin");
        _;
        
    }
    function setBaseInfo(string memory pname,string memory logoUrl,string memory _introduction,address tokenAddr,uint _Stime,uint _Etime) external{
        poolName = pname;
         logo = logoUrl;
         introduction = _introduction;
         _Rbt = tokenAddr;
         Stime = _Stime;
         Etime = _Etime;
    }
  
    function setExchangeRate(uint rate) external  {
        exchangeRate = rate;
    }
    function setLockTime(uint _lockTime) external {
        lockTime = _lockTime;
    }
    function exchange(uint value ) public {

        TransferHelper.safeTransferFrom(_RBT_SEED, msg.sender, address(this), value);
        TransferHelper.safeTransfer(_Rbt, msg.sender, value/5);
        Record memory recordrec = Record({
        startTime : block.timestamp,
        endTime : block.timestamp + lockTime,
        amount : value ,
        price : exchangeRate,
        extracted : 0,
        mortgage : 0
        });
        lockUpTotal[msg.sender].push(recordrec);
        allReceived = allReceived + value;
        digOutAmount = digOutAmount + value;
        emit PurchaseRecord (msg.sender , value , value , _RBT_SEED);
    }

}