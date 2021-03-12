<template>
    <div class="m-notification">
        <img alt="icon" src="../assets/icons/oki.png" v-if="icon" />
        <img alt="icon" src="../assets/icons/err.png" v-else />
        <h1 class="m-notification-title">{{ notificationTitle }}</h1>
        <h4 class="m-notification-content">{{ notificationContent }}</h4>
        <span class="m-notification-code" :class="{ active: notiCode }">{{
            notificationCode
        }}</span>
        <my-button :btnTitle="btnTitle" />
        <span class="countDown"
            >Hệ thống sẽ tự động quay lại trang chủ Tiki sau
            <span style="color: red">{{ time }} giây</span></span
        >
    </div>
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
    components: { MyButton },
    name: "Notification",
    data() {
        return {
            time: 5,
            notiCode: true,
        };
    },
    props: {
        notificationTitle: {
            type: String,
            required: true,
            default: "This is string",
        },
        notificationContent: {
            type: String,
            required: true,
            default: "Bạn đã thanh toán thành công",
        },
        notificationCode: {
            type: String,
            required: false,
            default: "",
        },
        btnTitle: {
            type: Boolean,
            required: true,
            default: true,
        },
        icon: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    methods: {
        pollData() {
            this.timeEnd = setInterval(() => {
                this.time--;
                if (this.time == 0) {
                    clearInterval(this.timeEnd);
                }
            }, 1000);
        },
    },
    created() {
        this.pollData();
    },
};
</script>

<style scoped>
.m-notification {
    width: 400px;
    min-height: 400px;
    position: absolute;
    left: 50%;
    top: 35%;
    z-index: 10;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 0;
}

img {
    width: 100px;
    height: 100px;
    padding-bottom: 26px;
}

.m-notification-title {
    font-size: 20px;
}

.m-notification-content {
    font-size: 12px;
    padding-top: 10px;
    font-weight: normal;
}

my-button {
    margin-top: 40px;
}

.countDown {
    padding-top: 30px;
}

.m-notification-code.active {
    padding: 10px 0 40px 0;
    color: #00966b;
}
</style>
