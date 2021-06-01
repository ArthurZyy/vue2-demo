import { getInfo, login } from "@/api/login"
import { Message } from 'element-ui'
import router, { resetRouter } from '@/router'

const state = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    userName: ''
}

const mutations = {
    SET_TOKEN(state, val) {
        state.token = val
        localStorage.setItem('token', val)
    },
    DEL_TOKEN(state) {
        state.token = ''
        state.userName = ''
        localStorage.removeItem('token')
    },
    SET_NAME(state, payload) {
        state.userName = payload
    }
}

const actions = {
    _getInfo({ commit }) {
        return new Promise((resolve, reject) => {
            getInfo()
                .then(res => {
                    if (res.code === 0) {
                        const { name } = res.data
                        commit('SET_NAME', name)
                    } else {
                        Message.error(res.data.msg)
                    }
                    resolve()
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    loginOut({commit}){
        commit('DEL_TOKEN')
        router.push({
            path: '/login',
            query: {
                redirect: '/'
            }
        })
    },
    _login({ commit }, formData) {
        return new Promise((resolve, reject) => {
            login(formData)
                .then(res => {
                    if (res.data.success) {
                        Message.success(res.data.msg)
                        commit('SET_TOKEN', res.data.token)
                    } else {
                        Message.error(res.data.msg)
                    }
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}