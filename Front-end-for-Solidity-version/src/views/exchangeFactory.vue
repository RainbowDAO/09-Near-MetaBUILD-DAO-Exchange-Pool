<template>
<div class="exchangeFactory">
    <pageHeaderInfo :daoInfo="daoInfo" @joinVault="joinVault"></pageHeaderInfo>
  <div class="rainbow-panel" style="margin-top: 20px">
    <div class="sub-title-box">
      <img class="sub-icon" src="../assets/sub-icon.png"/>
      <div class="name">
        VAULT FUNDS
      </div>
    </div>
    <div class="vault-balance">
      <div class="balance">
        {{vaultBalance}}
      </div>
      <div class="btn-box">
        <div class="rainbow-button" @click="isShowExchangeDialog= true">
          EXCHANGE
        </div>
        <div class="rainbow-button" @click="isShowDialog= true">
          WITHDRAW
        </div>
      </div>
    </div>
    <div class="sub-title-box">
      <img class="sub-icon" src="../assets/sub-icon.png"/>
      <div class="name">
        DEPOSIT INFO
      </div>
    </div>
    <div class="deposit-info-list">
      <div class="item">
        <div class="name">
          Token Name：
        </div>
        <div class="value">
          RBD
        </div>
      </div>
      <div class="item">
        <div class="name">
          Creator's Address:
        </div>
        <div class="value">
          0x4428648f8c61bc1d72c3486126DE20e755765fF7
        </div>
      </div>
      <div class="item">
        <div class="name">
          Deposit Amount：
        </div>
        <div class="value">
          100,000,000.00 ETH
        </div>
      </div>
      <div class="item">
        <div class="name">
          Vault Address：
        </div>
        <div class="value">
          0x4428648f8c61bc1d72c3486126DE20e755765fF7
        </div>
      </div>
      <div class="item">
        <div class="name">
          Deposit Time：
        </div>
        <div class="value">
          12 Months
        </div>
      </div>
      <div class="item">
        <div class="name">
          Full Closure Period：
        </div>
        <div class="value">
          12 Months
        </div>
      </div>
      <div class="item">
        <div class="name">
          Release Period:
        </div>
        <div class="value">
          12 Months
        </div>
      </div>
      <div class="item">
        <div class="name">
          Full Unlock Period:
        </div>
        <div class="value">
          12 Months
        </div>
      </div>
    </div>
    <div class="withdrawal-title">
      Withdrawal Records
    </div>
    <div class="rainbow-single-list">
      <div class="list-header">
        <div class="item">
          ID
        </div>
        <div class="item">
          Withdrawal address
        </div>
        <div class="item">
          Withdrawal time
        </div>
        <div class="item">
          Withdrawal amount
        </div>
      </div>
      <div class="list-content">
        <div class="list-item" v-for="(item,index) in withdrawalList" :key="index">
          <div class="id">
            {{item}}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rainbow-dialog-box" v-show="isShowDialog">
    <div class="mask" @click="isShowDialog=false"></div>
    <div class="rainbow-dialog">
      <div class="dialog-title">
        Withdraw
      </div>
      <div class="dialog-subtitle">
        Withdrawal Address
      </div>
      <div class="value">
        0x4428648f8c61bc1d72c3486126DE20e755765fF7
      </div>
      <div class="input-box">
        <div class="name">
          Extractable quantity
        </div>
        <input type="text" placeholder="100,000,000">
      </div>
      <div class="input-box">
        <div class="name">
          Extract quantity
        </div>
        <div class="right">
          <input type="text" placeholder="Enter">
          <div class="rainbow-button">
            ALL
          </div>
        </div>
      </div>
      <div class="rainbow-button withdraw-btn">
        WITHDRAW
      </div>
    </div>
  </div>

  <div class="rainbow-dialog-box" v-show="isShowExchangeDialog">
    <div class="mask" @click="isShowExchangeDialog=false"></div>
    <div class="rainbow-dialog">
      <div class="dialog-title">
        Exchange
      </div>
      <div class="input-box">
        <div class="name">
          Sale Token Name
        </div>
        <input type="text" placeholder="RBD">
      </div>

      <div class="input-box">
        <div class="name">
          Sale Token Amount
        </div>
        <div class="right">
          <input type="text" placeholder="Enter">
        </div>
      </div>
      <div class="input-box">
        <div class="name">
          Exchange Token Name
        </div>
        <input type="text" placeholder="RBD">
      </div>
      <div class="input-box">
        <div class="name">
          Exchange Token Amount
        </div>
        <input type="text" placeholder="RBD">
      </div>
      <div class="input-box">
        <div class="name">
          Amount of sale tokens you want to exchange
        </div>
        <input type="text" placeholder="Enter">
      </div>
      <div class="rainbow-button withdraw-btn">
        EXCHANGE
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "exchangeFactory",
  data(){
    return{
      isShowDialog:false,
      vaultBalance:0,
      daoInfo:{},
      withdrawalList:[],
      isShowExchangeDialog:false
    }
  },
  methods:{
    joinVault(){

    }
  }
}
</script>

<style lang="scss" scoped>
.rainbow-dialog{
  width: 700px;
  .dialog-title{
    font-size: 26px;
    font-weight: 700;
    color: #333333;
    padding-bottom: 20px;
  }
  .value{
    width: 640px;
    height: 38px;
    background: #f6f5fa;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    color: #FF1F84;
    line-height: 38px;
    padding: 0 10px;
    margin-top: 10px;
  }
  .input-box{
    width: 100% !important;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name{

    }
    .right{
      display: flex;
      .rainbow-button{
        width: 60px;
      }
    }
  }
  .withdraw-btn{
    margin: 60px auto 0;
    width: 300px;
    height: 50px;
  }
}
.withdrawal-title{
  font-size: 24px;
  font-weight: 700;
  color: #333333;
  line-height: 60px;
}

.exchangeFactory{
  .vault-balance{
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    .btn-box{
      display: flex;
    }
    .balance{
      font-size: 30px;
      font-weight: 700;
      text-align: left;
      color: #ec1676;
      line-height: 35px;
    }
    .rainbow-button{
      margin-left: 10px;
      width: 120px;
    }
  }
  .deposit-info-list{
    padding: 20px 0;
    .item{
      display: flex;
      margin-top: 10px;
      align-items: center;
      .name{
        min-width: 160px;
      }
      .value{
        width: 430px;
        height: 34px;
        padding: 0 10px;
        background: #f6f5fa;
        border-radius: 10px;
        color: #F96AAF;
        line-height: 34px;


      }
    }
  }
}
</style>
