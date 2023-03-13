<script setup lang="ts">
import {onMounted,ref} from 'vue'
import { useRoute } from 'vue-router';
import {getRepoInfo} from '../services/repo'
import type {IRepo} from '../typing/repo'

const route = useRoute()
const repo = ref<IRepo[]|null>(null)

const fetchRepoInfo = async (username:string) => {
    const data = await getRepoInfo(username)
    repo.value = data
}

onMounted(() => {
    const {username} = route.query
    if (username) {
        fetchRepoInfo(username as string)
    }
})


</script>

<template>
<router-view>
    <div class="repo">
        <div class="repo-title">仓库信息</div>
        <div v-if="Array.isArray(repo) && repo.length>0" class="repo-info">
            <el-card v-for="item in repo" :key="item.id" class="repo-info-card">
                <div class="repo-info-card-text">
                    <div class="repo-info-card-text-label">仓库名称:</div>
                   <div class="repo-info-card-text-content">{{ item.full_name }}</div> </div>
                <div class="repo-info-card-text">
                    <div class="repo-info-card-text-label">仓库简介:</div>
                    <div class="repo-info-card-text-content">{{ item.description }}</div>
                </div>
                <div class="repo-info-card-text">
                    <div class="repo-info-card-text-label">仓库语言:</div>
                    <div class="repo-info-card-text-content">{{ item.language }}</div>
                </div>
            </el-card>
        </div>
        <div v-else="暂无仓库信息" />
    </div>
</router-view>
</template>

<style>
    .repo {
        width: 400px;
        margin: 40px auto;
    }
    .repo-title {
        font-size: 20px;
        line-height: 2.5em;
        font-weight: 600;
    }
    .repo-info {
        margin: 24px 0;
    }
    .repo-info-card {
        margin-bottom: 12px;
    }
    .repo-info-card-text {
        display: flex;
        margin-bottom: 8px;
    }
    .repo-info-card-text-label {
        width: 6em;
    }
    .repo-info-card-text-content {
        margin-left: 1em;
        flex: 1;
    }
</style>