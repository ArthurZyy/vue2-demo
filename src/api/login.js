import $axios from './index'

export function getInfo(){
    const url = '/getInfo'
    return $axios.get(url)
}

export function getStaffid(){
    const url = '/getStaffid'
    return $axios.get(url)
}

export function login(data) {
    const url = '/login'
    return $axios.post(url, data)
  }