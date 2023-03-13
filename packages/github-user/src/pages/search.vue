<script setup lang="ts">
import { getUserInfo } from "../services/user";
import {  ref } from "vue";
import {useRouter, useRoute} from 'vue-router'
import type { IUser } from "../typing/user";

const router = useRouter()
const route = useRoute()

const username = ref("");
const loading = ref(false);
const userInfo = ref<IUser | null>(null);

// 查找用户
const fetchUser = async () => {
  if (username.value.trim().length === 0) return;
  loading.value = true;
  try {
    const userData = await getUserInfo(username.value);
    userInfo.value = userData;
  } catch (err) {
    console.log("err");
  } finally {
    loading.value = false;
  }
};

// 跳转到详情页
const goDetail = () => {
  router.push({
    name:"detail",
    query:{
      username:username.value
    }
  })
}

</script>

<template>
 <router-view>
  <div class="search">
    <div class="search-input">
      <el-input
        v-model="username"
        placeholder="请输入用户名称，比如 tj"
      ></el-input>
      <el-button
        type="primary"
        @click="fetchUser"
        :loading="loading"
        :disabled="loading"
        >查找</el-button
      >
    </div>
    <div class="search-result">
      <el-card v-if="!loading && userInfo" title="查看详情" class="search-result-card" @click="goDetail">
        <el-descriptions :column="1" title="Github User Info">
          <el-descriptions-item label="Avatar">
            <el-avatar
              shape="square"
              :size="60"
              fit="fill"
              :src="userInfo.avatar_url"
            />
          </el-descriptions-item>
          <el-descriptions-item label="Username">{{
            userInfo.name
          }}</el-descriptions-item>
          <el-descriptions-item label="Following">{{
            userInfo.following
          }}</el-descriptions-item>
          <el-descriptions-item label="Followers">{{
            userInfo.followers
          }}</el-descriptions-item>
          <el-descriptions-item label="Blog">
            <el-link :href="userInfo.blog">{{ userInfo.blog }}</el-link>
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>
  </div>
 </router-view>
</template>

<style scoped>
.search {
  width: 400px;
  margin: 40px auto;
}

.search-input {
  display: flex;
  gap: 16px;
}

.search-result {
  margin: 24px 0;
}

.search-result-card {
  cursor: pointer;
}
</style>
