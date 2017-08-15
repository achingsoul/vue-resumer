<template>
  <div id="preview">
    <h1>面试简历 - {{resume.profile.name || '姓名'}}</h1>
    <h2>基本信息</h2>
    <br>
    <p>{{resume.profile.name || '姓名'}}</p>
    <br>
    <p>{{resume.profile.city || '城市'}}</p>
    <br>
    <p>{{resume.profile.birth || '出生年月'}}</p>
    <br>
    <p>{{resume.contacts.phone || '电话'}}</p>
    <br>
    <p>{{resume.contacts.qq || 'QQ'}}</p>
    <br>
    <p>{{resume.contacts.email || '邮箱'}}</p>
    <br>
    <p>{{resume.contacts.wechat || '微信'}}</p>
    <br>
    <section v-if="filter(resume.workExperience).length > 0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="work in filter(resume.workExperience)">
          {{work.company}}
          <br> {{work.content}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.studyHistory).length > 0">
      <h2>学习经历</h2>
      <ul>
        <li v-for="study in filter(resume.studyHistory)">
          {{study.school}}
          <br> {{study.duration}}
          <br> {{study.degree}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.projectHistory).length > 0">
      <h2>项目经历</h2>
      <ul>
        <li v-for="project in filter(resume.projectHistory)">
          {{project.name}}
          <br> {{project.content}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.awardsHistory).length > 0">
      <h2>获奖情况</h2>
      <ul>
        <li v-for="awards in filter(resume.awardsHistory)">
          {{awards.award}}
          <br> {{awards.content}}
        </li>
      </ul>
    </section>
  </div>
</template>

<style>
#preview {}
</style>

<script>
export default {
  props: ['resume'],
  methods: {
    filter(array) { // 找出非空对象
      return array.filter(item => !this.isEmpty(item))
    },
    isEmpty(object) { // 只要有一个 value 不是 falsy , 就返回 false
      let empty = true
      for (let key in object) {
        if (object[key]) {
          empty = false
          break
        }
      }
      return empty
    }
  }
}
</script>
<style lang="scss">
.preview {
  padding: 24px;
  li {
    display: block;
    padding: 16px 0 16px 0;
  }
  * {
    line-height: 1.5em;
  }
}
</style>
