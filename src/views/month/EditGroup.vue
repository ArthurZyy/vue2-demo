<template>
    <edit-item
        item-type="group"
    ></edit-item>
</template>

<script>
import EditItem from '@/components/EditItem'
export default {
    name: 'monthEditGroup',
    components: {
        EditItem
    },
    provide: {
       periodType: 'month' 
    }
}
</script>