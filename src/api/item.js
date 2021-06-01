import $axios from './index'

export function _getItemContent(args){
    const url = '/getItemContent'
    return $axios.get(url, args)
}