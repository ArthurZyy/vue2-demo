import {currencyRoutes} from '@/router'

const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES(state, payload){
        state.routes = [...currencyRoutes, ...payload];
        state.addRoutes = payload;
    }
}

const actions = {
    getAsyncRoutes({commit, rootGetters}, roles){
        return new Promise(resolve => {
            commit('SET_ROUTES', [])
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}