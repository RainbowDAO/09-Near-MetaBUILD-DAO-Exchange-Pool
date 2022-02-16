import daoFactory from "./data/daoFactory.json"
import daoManage from "./data/daoManage.json"
import vault from "./data/vault.json"
import erc20 from "./data/erc20.json"
const CONTRACTS = {
    daoFactory:{address:"0xa844BbBC8cEb184f8D20613dF8869628c1f305c2",abi:daoFactory},
    daoManage:{abi:daoManage},
    vault:{abi:vault},
    erc20:{abi:erc20},
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByContract(name, address, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export default {
    CONTRACTS,
    getContractByName,
    getContractByContract,
    getContractAddress
};
