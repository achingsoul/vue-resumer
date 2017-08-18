<template>
  <div id="preview">
    <h1>面试简历 - {{resume.profile.name || '姓名'}}</h1>
    <h2>基本信息</h2>
    <br>
    <p>姓名：{{resume.profile.name}}</p>
    <br>
    <p>城市：{{resume.profile.city}}</p>
    <br>
    <p>出生年月：{{resume.profile.birth}}</p>
    <br>
    <p>电话：{{resume.contacts.phone}}</p>
    <br>
    <p>QQ：{{resume.contacts.qq}}</p>
    <br>
    <p>邮箱：{{resume.contacts.email}}</p>
    <br>
    <p>微信：{{resume.contacts.wechat}}</p>
    <br>
    
    <section v-if="filter(resume.workExperience).length > 0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="work in filter(resume.workExperience)">
          <p>公司：{{work.company}}</p>
          <br>
          <p>工作内容：{{work.content}}</p>
        </li>
      </ul>
    </section>
    
    <section v-if="filter(resume.studyHistory).length > 0">
      <h2>学习经历</h2>
      <ul>
        <li v-for="study in filter(resume.studyHistory)">
          <p>学校：{{study.school}}</p>
          <br> 
          <p>时间：{{study.duration}}</p>
          <br> 
          <p>学位：{{study.degree}}</p>
        </li>
      </ul>
    </section>
    
    <section v-if="filter(resume.projectHistory).length > 0">
      <h2>项目经历</h2>
      <ul>
        <li v-for="project in filter(resume.projectHistory)">
          <p>项目名称：{{project.name}}</p>
          <br> 
          <p>项目内容：{{project.content}}</p>
        </li>
      </ul>
    </section>
    
    <section v-if="filter(resume.awardsHistory).length > 0">
      <h2>获奖情况</h2>
      <ul>
        <li v-for="awards in filter(resume.awardsHistory)">
          <p>奖项：{{awards.award}}</p>
          <br> 
          <p>详情：{{awards.content}}</p>
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
