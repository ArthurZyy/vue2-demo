import $axios from './index'

export function _getItemContent(args){
    const url = '/getItemContent'
    return $axios.get(url, args)
}

export function _getPeriods(args){
    const url = '/getPeriods'
    return $axios.get(url, args)
}