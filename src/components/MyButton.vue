<template>
    <div class="m-btn" v-if="btnTitle">
        <h3 class="m-btn-title">Tiếp tục mua sắm</h3>
    </div>
    <div class="m-btn m-btn-err" v-else>
        <h3 class="m-btn-title">Thanh toán lại</h3>
    </div>
</template>

<script>
export default {
    name: "MyButton",
    props: {
        btnTitle: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
};
</script>

<style scoped>
.m-btn {
    width: 400px;
    height: 70px;
    display: flex;
    background-color: #00966b;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
}

.m-btn .m-btn-title {
    color: #fff;
}

.m-btn-err {
    background-color: #fff;
}

.m-btn-err .m-btn-title {
    color: #00966b;
}
</style>