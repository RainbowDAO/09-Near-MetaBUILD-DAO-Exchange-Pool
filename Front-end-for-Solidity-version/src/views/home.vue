<template>
  <div class="home rainbow-panel">
    <div class="panel-title">
      Exchange Pool
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
    <vaultList :vault-list="vaultList"></vaultList>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
