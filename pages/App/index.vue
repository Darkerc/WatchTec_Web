<template>
  <div class="user_profile">
    <div class="user_info">
      <div class="img_cont">
        <img src="~/assets/images/index/tohru.gif">
      </div>
      <h2 class="name subtitle">
        xXDarkercXx
      </h2>
    </div>
    <div class="divider divider_black"></div>
    <table class="table">
      <caption>Ultimos datos</caption>
      <thead>
        <tr>
          <th>hola</th>
          <th>hola</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>mundo</td>
          <td>mundo</td>
        </tr>
        <tr>
          <td>base</td>
          <td>base</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  layout:"Application",
  head(){
    return{
      title:"Inicio"
    }
  }
}
</script>

<style lang="scss">
@import "../../node_modules/rfs/scss";

  .user_profile{
    display: flex;
    flex-direction: column;

    .user_info{
      display: flex;
      flex-direction: column;
      align-items: center;

      .img_cont{
        display: flex;
        height: 250px;
        cursor: pointer;
        user-select: none;
        margin: 10px auto;

        img{
          height: 100%;
          object-fit: cover;
          margin: auto;
          box-sizing: border-box;
          border-radius: 50%;
          box-shadow: 0 0 0 4px #795548,
                      0 0 4px 8px #806257;

        }
      }

      .name{
        @include font-size(3rem !important);
        font-family: 'Raleway',"comic sans ms",sans-serif;
      }
    }  
    
  }
</style>
