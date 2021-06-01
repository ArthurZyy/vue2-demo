<template>
    <el-row>
        <el-col :span="20">
            这里预留
        </el-col>
        <el-col :span="4">
            <user-dropdown></user-dropdown>
        </el-col>
    </el-row>
</template>

<script>
import UserDropdown from "./UserDropdown";
export default{
    name: 'mheader',
    components: {
        UserDropdown
    }
}
</script>