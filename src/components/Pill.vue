<template>
  <div class="pill">
      <span class="name"> {{name}} </span>
      <span class="amount"> {{amount}} </span>
  </div>
</template>

<script>
export default {
    props : ['name', 'amount']
}
</script>

<style scoped>
.pill {
    background-color: crimson;
    color:white;
    margin:10px;
    height: 55px;
    border-radius: 30px;
    font-size: 1.3rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    overflow: hidden;
}

.pill .name {
    margin-left: 15px;    
}
.amount {
    margin: 10px;
    height: 35px;
    min-width: 35px;
    padding: 5px;
    border-radius: 100%;
    font-size: 14px;
    background-color: #fff;
    color: black;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>