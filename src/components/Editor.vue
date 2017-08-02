<template>
  <div id="editor">
      <nav>
          <ol>
              <li v-for="i in [0,1,2,3,4]"
                  v-bind:class="{active: currentTab === i}"
                  v-on:click="currentTab = i">
                  <svg class="icon">
                      <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                  </svg>
              </li>
          </ol>
      </nav>
      <ol class="panes">
          <li v-bind:class="{active: currentTab === 0}">tab 1</li>
          <li v-bind:class="{active: currentTab === 1}">tab 2</li>
          <li v-bind:class="{active: currentTab === 2}">tab 3</li>
          <li v-bind:class="{active: currentTab === 3}">tab 4</li>
          <li v-bind:class="{active: currentTab === 4}">tab 5</li>
      </ol>
  </div>
</template>

<<script>
export default {
  data(){
      return{
          currentTab: 0,
          icons: ['id-card','WORK','Book-Open','heart','phone']
      }
   }
}
</script>


<<style lang="scss">
    #editor{
        min-height: 100px;
        display: flex;
        > nav{
            background: #000;
            width: 80px;
            > ol > li {
                padding: 24px 0;
                text-align: center;
                > .icon {
                  width: 24px;
                  height: 24px;
                  fill: #fff;
                }
                &.active{
                    background: white;
                    > .icon{
                        fill: black;
                    }
                }
            }
        }
        > .panes{
            > li{
                display: none;
                &.active{
                    display: block;
                }
            }
        }
    }
</style>
