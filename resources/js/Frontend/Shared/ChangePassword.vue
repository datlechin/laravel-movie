<template>
    <form class="sign__form sign__form--profile" @submit.prevent="submit">
        <div class="row">
            <div class="col-12">
                <h4 class="sign__title">Đổi mật khẩu</h4>
            </div>
            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                <div class="sign__group">
                    <label class="sign__label" for="current_password">Mật khẩu cũ</label>
                    <input id="current_password" type="password" v-model="form.current_password" class="sign__input">
                    <span class="sign__error" v-if="form.errors.current_password">{{ form.errors.current_password }}</span>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                <div class="sign__group">
                    <label class="sign__label" for="password">Mật khẩu mới</label>
                    <input id="password" type="password" v-model="form.password" class="sign__input">
                    <span class="sign__error" v-if="form.errors.password">{{ form.errors.password }}</span>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                <div class="sign__group">
                    <label class="sign__label" for="password_confirmation">Xác nhận mật khẩu mới</label>
                    <input id="password_confirmation" type="password" v-model="form.password_confirmation" class="sign__input">
                </div>
            </div>

            <div class="col-12">
                <button class="sign__btn" type="submit">Đổi mật khẩu</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import {useForm, usePage} from "@inertiajs/inertia-vue3";

const form = useForm({
    current_password: null,
    password: null,
    password_confirmation: null,
})

const submit = () => {
    form.put('/user/change-password', {
        onSuccess: () => {
            form.reset()
            toastr.success(usePage().props.value.flash.success)
        }
    })
}
</script>
