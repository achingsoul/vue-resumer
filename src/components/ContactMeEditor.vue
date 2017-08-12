<template>
    <div>
        <h2>联系方式</h2>
        <el-form>
            <el-form-item label="电话">
                <el-input v-model="contactMe.phone"></el-input>
            </el-form-item>
            <el-form-item label="QQ">
                <el-input v-model="contactMe.qq"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="contactMe.email"></el-input>
            </el-form-item>
            <el-form-item label="微信">
                <el-input v-model="contactMe.wechat"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<<script>
export default {
  props:['contactMe']
}
</script>