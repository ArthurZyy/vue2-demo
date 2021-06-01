<template>
    <edit-item
        item-type="staff"
    ></edit-item>
</template>

<script>
import EditItem from '@/components/EditItem'
export default {
    name: 'YearEditStaff',
    components: {
        EditItem
    },
    provide: {
       periodType: 'year' 
    }
}
</script>