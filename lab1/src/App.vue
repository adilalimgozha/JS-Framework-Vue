<script setup>
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <header>
    <div class="name-blog">Mini Blog</div>
    <nav>
      <div class="link"><a href="#">Home</a></div>
      <div class="link"><a href="#">Politics</a></div>
      <div class="link"><a href="#">Tech</a></div>
      <div class="link"><a href="#">Entertainment</a></div>
      <div class="link"><a href="#">Travel</a></div>
      <div class="link"><a href="#">Sports</a></div>
      <button type="submit"><i class="fa fa-search"></i></button>
    </nav>
  </header>
  <hr>
  <main>
    <div class="grid-container">
      <div class="grid-item item1">
        <img class="image im1" src="./assets/1.jpg" alt="mountain">
        <div class="opac"></div>
        <div class="text">The AI magically removes moving objects from the video <br>
          <span>July 19, 2019</span>
        </div>
      </div>
      <div class="grid-item item2">
        <img class="image im2" src="./assets/1.jpg" alt="sunset">
        <div class="opac"></div>
        <div class="text">The AI magically removes moving objects from the video <br>
          <span>July 19, 2019</span>
        </div>
      </div>
      <div class="grid-item item3">
        <img class="image im3" src="./assets/3.jpg" alt="river">
        <div class="opac"></div>
        <div>
          <span class="upper-text1">Travel</span>
          <span class="upper-text2">Food</span>
        </div>
        <div class="text">The AI magically removes moving objects from the video <br>
          <span>July 19, 2019</span>
        </div>
      </div>
      <div class="grid-item item4">
        <img class="image im4" src="./assets/1.jpg" alt="view">
        <div class="opac"></div>
        <div class="text">The 20 Biggest Fintech Companies in America 2019<br>
          <span>July 19, 2019</span>
        </div>
      </div>
      <div class="grid-item item5">
        <img class="image im5" src="./assets/1.jpg" alt="scyscraper">
        <div class="opac"></div>
        <div class="text">The 20 Biggest Fintech Companies in America 2019<br>
          <span>July 19, 2019</span>
        </div>
      </div>
    </div>
  </main>

</template>


<style scoped>

  .image{
    max-height: 100%;
    max-width: 100%;
    display: block;
  }

  .item3{
    grid-area: 1/2/3/3;
  }

  .grid-container{
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 9% 4%;
    align-items: stretch;
  }

  .grid-item{
    position: relative;
    text-align: left;
    
  }

  .opac{
    position: absolute;
    left: 0;
    bottom:0;
    width:100%;
    height:60%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  }

  .upper-text1{
    position: absolute;
    bottom: 120px;
    left: 10px;
    color: white;
    background-color: red;
    border-radius: 15%;
    font-weight: 500;
    width: 4em;
    padding: 3px 0;
    text-align: center;
  }
  .upper-text2{
    position: absolute;
    bottom: 120px;
    left: 85px;
    color: white;
    background-color: blue;
    border-radius: 15%;
    font-weight: 500;
    width: 4em;
    padding: 3px 0;
    text-align: center;
  }

  .text{
    position: absolute;
    bottom: 20px;
    left: 10px;
    color: rgb(135, 255, 255);
  }

  span{
    color: rgb(255, 221, 221);
  }

  header{
    display: flex;
    justify-content: space-between;
  }

  main{
    margin-top: 5em;
    padding-left: 6em;
    padding-right: 6em;
  }

  nav{
    display: flex;
    align-items: baseline;
  }

  .name-blog{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.8em;
  }

  .link{
    margin-left: 15px;
    font-size: 1.2em;
  }

  a:hover{
    color: rgb(0, 140, 255);
  }

  
</style>
