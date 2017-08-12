<template>
  <div id="editor">
      <!-- 导航 -->
      <nav>
          <ol>
              <li v-for="i in [0,1,2,3,4,5]"
                  v-bind:class="{active: currentTab === i}"
                  v-on:click="currentTab = i">
                  <svg class="icon">
                      <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                  </svg>
              </li>
          </ol>
      </nav>
      <!-- Tab列表 -->
      <ol class="panes">
          <li v-bind:class="{active: currentTab === 0}">
              <ProfileEditor v-bind:profile="resume.profile"/>
          </li>
          <li v-bind:class="{active: currentTab === 1}">
              <ArrayEditor v-bind:items="resume.workExperience" v-bind:labels="{company:'公司', content:'工作内容'}" title="工作经历"/>
          </li>
          <li v-bind:class="{active: currentTab === 2}">
              <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校', duration:'时间', degree:'学位'}" title="学习经历"/>
          </li>
          <li v-bind:class="{active: currentTab === 3}">
              <ArrayEditor v-bind:items="resume.projectHistory" v-bind:labels="{name:'项目名称', content:'项目内容'}" title="项目经历"/>
          </li>
          <li v-bind:class="{active: currentTab === 4}">
              <ArrayEditor v-bind:items="resume.awardsHistory" v-bind:labels="{award:'奖项', content:'详情'}" title="获奖情况"/>
          </li>
          <li v-bind:class="{active: currentTab === 5}">
              <ContactMeEditor v-bind:contactMe="resume.contactMe"/>
          </li>
      </ol>
  </div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
import ArrayEditor from './ArrayEditor'
import ContactMeEditor from './ContactMeEditor'
export default {
  components:{ProfileEditor,ArrayEditor,ContactMeEditor},
  props: ['resume'],
  data(){
      return{
          currentTab: 0,
          icons: ['id-card','WORK','Book-Open','heart','jiangbei','phone'],
          
      }
   },
   methods:{
       
   }

}
</script>


<style lang="scss">
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
            flex: 1;
            .container{
                position: relative;
                .el-icon-delete2{
                    position: absolute;
                    right: 0; 
                    top: 0;
                }
            }
            > li{
                display: none;
                padding: 48px;
                height: 100%;
                overflow: auto;
                > .el-form{
                    width: 100%;
                }
                &.active{
                    display: block;
                }
            }
        }
    }
</style>
