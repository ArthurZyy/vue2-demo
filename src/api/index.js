import axios from 'axios'
import Qs from 'qs'
import store from '@/store'
import router from '@/router'
import Vue from 'vue'
import { Loading, Message } from 'element-ui' // 引用element-ui的加载和消息提示组件

const $axios = axios.create({
    timeout: 10000,
    baseURL: 'http://localhost:7300/mock/60a44eb09a37910ee0030e25'
})

Vue.prototype.$http = axios
let loading = null

$axios.interceptors.request.use(
    config => {
        loading = Loading.service({ 'text': '拼命加载中' })
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

$axios.interceptors.response.use(
    response => {
        if (loading) {
            loading.close()
        }
        const code = response.status
        if ((code >= 200 && code < 300) || code === 304) {
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if (loading) {
            loading.close()
        }
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回401 清除token信息并跳转到登陆页面
                    store.commit('DEL_TOKEN')
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
                    break
                case 404:
                    Message.error('网络请求不存在')
                    break
                default:
                    Message.error(error.response.data.message)
            }
        } else {
            // 请求超时或者网络有问题
            if (error.message.includes('timeout')) {
                Message.error('请求超时！请检查网络是否正常')
            } else {
                Message.error('请求失败，请检查网络是否已连接')
            }
        }
        return Promise.reject(error)
    }
)

export default {
    post(url, data) {
        return $axios({
            method: 'post',
            url,
            data: Qs.stringify(data),
            Headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

            }
        })
    },
    get(url, params) {
        return $axios({
            method: 'get',
            url,
            params
        })
    }
}