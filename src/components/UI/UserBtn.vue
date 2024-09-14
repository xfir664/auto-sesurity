<template>
    <button class="btn" :type="'button'">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'user-btn'
}
</script>
<style lang="scss" scoped>
@import './../../styles/var.scss';

    .btn {
        color: $WHITE;
        border: 3px solid $TEAL;
        background-color: $GREY_211F20;
        padding: 10px;
        cursor: pointer;
    }
    
</style>