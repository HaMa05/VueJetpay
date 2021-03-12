<template>
    <div id="app">
        <div class="overlay"></div>
        <notification
            :notification-title="'Thanh toán thành công'"
            :notificationCode="'651as411-14141651a-sd51d6w98'"
            class="active"
        />

        <!-- <div class="overlay"></div>
        <notification
            :notification-title="'Thanh toán không thành công'"
            :notificationContent="'Giao dịch đã bỉ hủy bởi người dùng'"
            :btnTitle="false"
            :icon="false"
            class="active"
        /> -->
    </div>
</template>

<script>
import Notification from "./components/Notification.vue";

export default {
    components: { Notification },
};
</script>

<style scoped>
#app {
    width: 100%;
    height: 100vh;
    /* position: relative; */
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.068);
}
</style>
