<template>
    <footer>
      <a>
        <img src="@/assets/beian.png" class="img"/>
        <p class="ptext">京公网安备 11010802038336号</p></a>
    </footer>
</template>

<script>
export default {
  name: 'Buttom',
}
</script>

<style scoped>
footer{
  position: absolute;
  bottom: 0;
  height:20px;
  line-height:20px;
  width:fit-content + 20;
  left: 50%;
}

.ptext{
  float:left;
  height:20px;
  line-height:20px;
  margin: 0px 0px 0px 10px;
  color:#939393;
  text-align: center
}

.img{
  float:left;
}
</style>
