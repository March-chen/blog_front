<template>
    <el-row>
        <el-col :span="10"><div class="header">
            <img src="@/assets/logo2.png" width="450" height="150" background="black"/>
        </div></el-col>
        <el-col :span="14"><div style="width:1">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
            >
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="4">推荐</el-menu-item>
                <el-sub-menu index="2">
                <template #title>其他</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
                </el-sub-menu>
            </el-menu>
        </div></el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.el-menu.el-menu--horizontal {
    border-bottom: none;
}
.header{
    width: 10;
    height: 20;
}
</style>
