<template>
    <edit-item
        item-type="staff"
    ></edit-item>
</template>

<script>
import EditItem from '@/components/EditItem'
export default {
    name: 'monthEditStaff',
    components: {
        EditItem
    },
    provide: {
       periodType: 'month' 
    }
}
</script>