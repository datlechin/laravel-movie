<template>
    <form class="sign__form sign__form--profile sign__form--first" @submit.prevent="submit">
        <div class="row">
            <div class="col-12">
                <h4 class="sign__title">Thông tin cá nhân</h4>
            </div>

            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                <div class="sign__group">
                    <label class="sign__label" for="name">Họ tên</label>
                    <input id="name" type="text" v-model="form.name" class="sign__input" placeholder="Nhập họ tên">
                    <span class="sign__error" v-if="form.errors.name">{{ form.errors.name }}</span>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                <div class="sign__group">
                    <label class="sign__label" for="username">Tên tài khoản</label>
                    <input id="username" type="text" v-model="form.username" class="sign__input" placeholder="Nhập tên tài khoản">
                    <span class="sign__error" v-if="form.errors.username">{{ form.errors.username }}</span>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                <div class="sign__group">
                    <label class="sign__label" for="email">Email</label>
                    <input id="email" type="text" v-model="form.email" class="sign__input" placeholder="Nhập địa chỉ email">
                    <span class="sign__error" v-if="form.errors.email">{{ form.errors.email }}</span>
                </div>
            </div>

            <div class="col-12">
                <button class="sign__btn" type="submit">Lưu lại</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import {useForm, usePage} from "@inertiajs/inertia-vue3";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({});

const user = usePage().props.value.auth.user

const form = useForm({
    name: user.name,
    username: user.username,
    email: user.email,
})

const submit = () => {
    form.put('/user/profile', {
        preserveScroll: true,
        onSuccess: () => toaster.success(usePage().props.value.flash.success)
    })
}
</script>
