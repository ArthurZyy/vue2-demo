<template>
    <show-item
        item-type="staff"
    ></show-item>
</template>

<script>
import ShowItem from '@/components/ShowItem'
export default {
    name: 'monthShowStaff',
    components: {
        ShowItem
    },
    provide: {
       periodType: 'month' 
    }
}
</script>