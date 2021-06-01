<template>
    <show-item
        item-type="staff"
    ></show-item>
</template>

<script>
import ShowItem from '@/components/ShowItem'
export default {
    name: 'YearShowStaff',
    components: {
        ShowItem
    },
    provide: {
       periodType: 'year' 
    }
}
</script>