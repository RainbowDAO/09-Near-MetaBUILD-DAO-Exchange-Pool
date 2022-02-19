import daoFactory from "./data/daoFactory.json"
import daoManage from "./data/daoManage.json"
import vault from "./data/vault.json"
import erc20 from "./data/erc20.json"
import creatTokenExchange from "./data/creatTokenExchange.json"
const CONTRACTS = {
    creatTokenExchange:{address:"0x2473559c1690B1F4f5387C5c646e1b6b8Fc8100a",abi:creatTokenExchange},

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
