<template>
    <div class="popupCancel">
        <img class="iconCancel" src="../assets/icons/cancel.png" alt="" />
        <h1 class="popupCancel-title">Bạn muốn kết thúc giao dịch</h1>
        <p class="popupCancel-content">Thanh toán chưa được xử lý</p>
        <div class="popup-btn">
            <my-button
                class="popupCancel-btn"
                :btnTitle="'Đóng'"
                :style="styleBtnClose"
            />
            <my-button
                class="popupCancel-btn"
                :btnTitle="'Hủy giao dịch'"
                :style="styleBtnCancel"
            />
        </div>
    </div>
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
    components: { MyButton },
    name: "Popup",
    data() {
        return {};
    },
    computed: {
        styleBtnClose() {
            return {
                background: "#F2F3F8",
                color: "black",
                width: "120px",
                height: "48px",
            };
        },
        styleBtnCancel() {
            return {
                background: "#DD2A2A",
                color: "white",
                width: "130px",
                height: "48px",
            };
        },
    },
};
</script>

<style scoped>
.popupCancel {
    width: 372px;
    height: 191px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 35%;
    z-index: 10;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: "Google sans";
    line-height: 0;
}

.popup-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 16px;
    right: 16px;
}

.popupCancel-title {
    margin-top: 46px;
    margin-bottom: 14px;
    font-size: 18px;
    font-weight: bold;
}

.iconCancel {
    position: fixed;
    top: 16px;
    right: 16px;
    cursor: pointer;
}

.popupCancel-content {
    margin-bottom: 24px;
}

.popupCancel-btn:nth-child(2) {
    margin-left: 8px;
}
/* .popupCancel-btn {
        width: 100px !important;
    } */
</style>