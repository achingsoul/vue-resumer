<template>
  <div id="app">
   <Topbar class="topbar"/>
   <main>
     <Editor v-bind:resume="resume" class="editor"/>
     <Preview v-bind:resume="resume" class="preview"/>
   </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  export default {
    data(){
      return{
        resume: {
          profile: {
              name: '',
              city: '',
              birth: ''
          },
          workExperience: [
              {company: '', content: ''},
          ],
          studyHistory: [
              {school: '', duration: '', degree: ''},
          ],
          projectHistory: [
              {name: '', content: ''}
          ],
          awardsHistory: [
              {award: '', content: ''}
          ],
          contactMe: [
              {phone: '', qq: '', email: '', wechat: ''}
          ]
        }
      }
    },
    components: {
      Topbar,Editor,Preview
    }
  }
</script>

<style lang="scss">
html,body,#app{
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.topbar{
  box-shadow: 0 0 3px hsla(0,0,0,0.5);
  position: relative;
  z-index: 1;
}
.icon{
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
main{
  display: flex;
  flex: 1;
  background: #ddd;
  > .editor {
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0,0,0,0.5);
    border-radius: 4px;
    overflow: hidden;
  }
  > .preview {
    flex: 1;
    margin: 16px 16px 16px 8px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0,0,0,0.5);
    border-radius: 4px;
    overflow: hidden;
  }
}

</style>
