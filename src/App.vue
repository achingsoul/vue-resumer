<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <Topbar class="topbar" v-on:preview="preview" />
    <main>
      <Editor v-bind:resume="resume" class="editor" />
      <Preview v-bind:resume="resume" class="preview" />
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  data() {
    return {
      previewMode: false,
      resume: {
        profile: {
          name: '',
          city: '',
          birth: ''
        },
        workExperience: [
          { company: '', content: '' },
        ],
        studyHistory: [
          { school: '', duration: '', degree: '' },
        ],
        projectHistory: [
          { name: '', content: '' }
        ],
        awardsHistory: [
          { award: '', content: '' }
        ],
        contacts: {
          phone: '', 
          qq: '', 
          email: '', 
          wechat: ''
        }

      }
    }
  },
  methods:{
    exitPreview(){
      this.previewMode = false
    },
    preview(){
      this.previewMode = true
    }
  },
  components: {
    Topbar, Editor, Preview
  },
}
</script>

<style lang="scss">
html,
body,
#app {
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

.topbar {
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#app main {
  display: flex;
  flex: 1;
  background: #ddd;
  >.editor {
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 4px;
    overflow: hidden;
  }
  >.preview {
    flex: 1;
    margin: 16px 16px 16px 8px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 4px;
    overflow: auto;
  }
}
#app{
  >#exitPreview{
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: none;
  }
  &.previewMode{
    >.topbar{
      display: none;
    }
    >main{
      >.editor{
        display: none;
      }
      >.preview{
        margin: 24px auto;
        max-width: 64%;
      }
    }
    >#exitPreview{
      display: block;
    }
  }
}
</style>
