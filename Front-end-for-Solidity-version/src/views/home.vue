<template>
  <div class="home rainbow-panel">
    <div class="panel-title">
      Exchange Pool
      <div class="rainbow-button" @click="$router.push({name:'createExchange'})">
        CREATE
      </div>
    </div>
    <div class="sub-title-box">
      <div class="sub-icon">
        <img src="../assets/sub-icon.png" alt="">
      </div>
      <div class="name">
        My Pool
      </div>
      <div class="number">
        1,000
      </div>
    </div>
    <vaultList :vault-list="vaultList"  @chooseItem="toDetail"></vaultList>
    <div class="sub-title-box">
      <img class="sub-icon" src="../assets/sub-icon.png" alt="">

      <div class="name">
        All Pool
      </div>
      <div class="number">
        1,000
      </div>
    </div>
    <vaultList :vault-list="vaultList"></vaultList>
  </div>
</template>

<script>
import vaultList from "../components/vaultList";
export default {
  name: "home",
  components:{
    vaultList
  },
  data(){
    return{
      vaultList:[{}]
    }
  },
  methods:{
    toDetail(){
      this.$router.push({name:"exchangeFactory"})
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .panel-title {
    display: flex;
    justify-content: space-between;
    .rainbow-button {
      width: 100px;
      height: 46px;
    }
  }
}
</style>
