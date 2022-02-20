<template>
  <div class="createExchange rainbow-panel">
    <div class="panel-title">
      DAO Exchange Pool
    </div>
    <div class="sub-title">
      Create a Exchange Pool
    </div>
    <div class="progress-box">
      <div class="item animate__animated animate__fadeIn" :class="{'active':activeIndex>=0}">
        1
      </div>
      <div class="item animate__animated animate__fadeIn" :class="{'active':activeIndex>=1}">
        2
      </div>
      <div class="item animate__animated animate__fadeIn" :class="{'active':activeIndex>=2}">
        3
      </div>
      <div class="item animate__animated animate__fadeIn" :class="{'active':activeIndex>=3}">
        4
      </div>
    </div>
    <div class="step1 animate__animated animate__fadeIn" v-show="activeIndex==0">
      <div class="sub-title">
        Basic Information
      </div>

      <div class="input-box">
        <div class="name">
          Factory Name
        </div>
        <input type="text" v-model = "this.factoryName" placegolder="Name">
      </div>
      <div class="input-box">
        <div class="name">
          Factory Logo
        </div>
        <input type="text" v-model = "this.factoryLogo" placegolder="Enter">
      </div>
      <div class="input-box">
        <div class="name">
          Factory Introduction
        </div>
        <input type="text" v-model = "this.factoryintr" placegolder="Enter">
      </div>


      <div class="tip">
        In this token exchange factory, only one-way exchange is supported. (For example: there is an initial token RRB
        in the exchange pool. According to the agreement of the creator of the exchange pool, only RRA is allowed to
        exchange for RHC. The exchanger can only exchange the RRB in his wallet for the RRA in the pool, and cannot
        exchange RRA for the RRA in the pool. RRB)
      </div>
      <div class="tip" style="display: flex;align-items: center;user-select: none" @click="isChecked=!isChecked">
        <input type="checkbox" v-model="isChecked"> I have understood
      </div>
      <div class="rainbow-button next-btn" @click="next">
        NEXT
      </div>
    </div>
    <div class="step2 animate__animated animate__fadeIn" v-show="activeIndex==1">
      <div class="sub-title">
        Token Settings
      </div>
      <div class="step2-content">
        <div class="left">
          <div class="input-box">
            <div class="name">
              Initial exchange pool token holder address
            </div>
            <input type="text" placeholder="address">
          </div>
          <div class="input-box">
            <div class="name">
              Token Address
            </div>
            <input type="text" v-model = "this.tokenAddr" placeholder="ABT">
          </div>
          <div class="input-box">
            <div class="name">
              Token Symbol
            </div>
            <input type="text" placeholder="ABT">
          </div>
          <div class="input-box">
            <div class="name">
              Circulation
            </div>
            <input type="text" placeholder="100,000,000">
          </div>
        </div>
       
      </div>
      <div class="rainbow-button next-btn" @click="next">
        NEXT
      </div>
    </div>
    <div class="step3 animate__animated animate__fadeIn" v-show="activeIndex==2">
      <div class="sub-title">
        Exchange Time
      </div>
      <div class="time-box">
        <div class="name">
          Exchange start time
        </div>
        <div class="inputs">
          <input type="text"> Year <input type="text"> Month <input type="text" v-model = "this.timeA"  > Days
        </div>
      </div>
      <div class="time-box">
        <div class="name">
          Exchange end time
        </div>
        <div class="inputs">
          <input type="text"> Year <input type="text"> Month <input type="text" v-model = "this.timeB"> Days
        </div>
      </div>
      <div class="tip">
        *It can only be exchanged during this time period, and cannot be exchanged at other times. The exchanger can
        withdraw and sell tokens at any time after the exchange. The creator of the exchange pool can only propose to
        exchange tokens after the exchange time expires. If there are still tokens left for sale after the exchange time
        ends, they can also propose. During the entire exchange period, the creator cannot withdraw the sold tokens and
        exchange tokens.
      </div>
      <div class="rainbow-button next-btn" @click="next">
        NEXT
      </div>
    </div>
    <div class="step1 animate__animated animate__fadeIn" v-show="activeIndex==3">
      <div class="sub-title">
        Sell Tokens
      </div>
      <div class="input-box">
        <div class="name">
          Tokens for sale
        </div>
        <input type="text" placeholder="ETH">
      </div>
      <div class="input-box">
        <div class="name">
          Price per piece
        </div>
        <input type="text" placeholder="100,000">
      </div>
      <div class="input-box">
        <div class="name">
          Amount raised
        </div>
        <input type="text" placeholder="1000">
      </div>
      <div class="input-box">
        <div class="name">
          Amount of injected tokens
        </div>
        <input type="text" placeholder="Enter">
      </div>
      <div class="tip">
        Must be greater than at least the number of sold tokens injected, if not greater than the amount raised or the
        price of each sold token must be modified.
      </div>
      <div class="rainbow-button next-btn" @click="complete">
        COMPLETE
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "createExchange",
  data() {
    return {
      factoryName:'name',
      factoryLogo:'logo',
      factoryintr:'intr',
      tokenAddr:'0x47A6815030E2706b7D2A67113b9aac5e5C10Ed1E',
      timeA:0,
      timeB:0,
      recipientList: [{}],
      activeIndex: 0,
      selectIndex: 0,
      recipientNumber: 1,
      isChecked: false
    }
  },
  methods: {
    next() {
      this.activeIndex++
    },
    getSelected() {

    },
    addAddr() {
      this.recipientNumber++
      this.recipientList.push({})
    },
    complete(){
      console.log("123")
      console.log(this.tokenAddr)
      this.$store.dispatch("creatTokenExchange/setBaseInfo",{
        pname:this.factoryName,
        logoUrl:this.factoryLogo,
        _introduction:this.factoryintr,
        tokenAddr:this.tokenAddr,
        _Stime:this.timeA,
        _Etime:this.timeB,
        })

    }
  }
}
</script>

<style lang="scss" scoped>
.time-box {
  .name {
    padding: 20px 0;
  }

  .inputs {
    display: flex;
    align-items: center;

    input {
      margin: 0 10px;
      width: 110px;
      height: 36px;
      background: #f6f5fa;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      padding: 0 10px;
    }
  }
}

.inline {
  display: flex;
  margin-top: 10px;

  .name {
    min-width: 300px;
  }
}

.step2-content {
  width: 1000px;
  display: flex;
  justify-content: space-between;

  .left, .right {
    width: 50%;
  }

  .input-box {
    width: 100%;
  }
}

.address-box {

  .address-list {
    .item {
      display: flex;
      padding: 10px 0;

      input {
        width: 100%;
        height: 50px;
        background: #f6f5fa;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        padding: 0 10px;
      }

      .address {
        width: 446px;
      }

      .ratio {
        margin-left: 10px;
        width: 184px;
      }

      .add-btn {
        width: 60px;
        height: 36px;
      }
    }
  }
}

.next-btn {
  margin-top: 100px;
  width: 200px;
  height: 42px;
}

.tip {
  margin-top: 30px;
  width: 640px;
  opacity: 0.6;
  font-size: 14px;
  font-weight: 500;
  text-align: justify;
  color: #ff1f84;
  line-height: 24px;
}

p {
  width: 640px;
}

.sub-title {
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  color: #333333;
  line-height: 38px;
}

.value {
  margin-top: 10px;
  width: 640px;
  padding: 8px 10px;
  background: rgba(255, 31, 132, 0.10);
  border-radius: 10px;
  line-height: 26px;
  color: #FF1F84;
}

.progress-box {
  display: flex;
  padding: 30px 0;

  .item {
    margin-right: 66px;
    position: relative;
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #12c2e9, #c471ed 53%, #f64f59);
    -webkit-background-clip: text;
    color: transparent;
    border: 1px solid rgba(255, 31, 132, 0.20);
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-weight: bold;

    &:after {
      content: '';
      width: 60px;
      height: 1px;
      background: #FF1F84;
      position: absolute;
      top: 50%;
      left: 32px;
    }

    &.active {
      background: linear-gradient(135deg, #12c2e9, #c471ed 53%, #f64f59);
      color: #fff;
    }
  }

  .item:last-child {
    margin-right: 0;

    &:after {
      visibility: hidden;
    }
  }
}
</style>
