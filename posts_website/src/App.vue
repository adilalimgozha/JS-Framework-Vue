<script setup>

</script>

<template>
  <div class="blocks">

    <div class="blocks1">
      <div class="block" id="red">
        <span>qwer</span>
      </div>
      <div class="block" id="green">
        <span>qwrt</span>
      </div>
    </div>
    
    <div class="blocks2">
      <div class="block" id="blue">
        <span>gr,gr</span>
      </div>
      <div class="block" id="black">
        <span>gr,gr</span>
      </div>
    </div>

  </div>
</template>

<style>

.blocks{
  display: flex;
}

.block{
  width: 10em;
  height: 10em;
  color: white;
  border-radius: 1.2em;
  display: flex;
}

span{
  margin: auto;
}

#red{
  background-color: red;
}

#green{
  background-color: green;
}

#blue{
  background-color: blue;
}

#black{
  background-color: black;
}

</style>
