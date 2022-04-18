<template>
    <Head title="Đặt lại mật khẩu" />
    <div class="sign section--full-bg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="sign__content">
                        <form class="sign__form" @submit.prevent="submit">
                            <Link href="/public" class="sign__logo">
                                <img src="/frontend/img/logo.svg" alt="">
                            </Link>
                            <div class="sign__group">
                                <input type="text" class="sign__input" v-model="form.email" placeholder="Email">
                                <span class="sign__error" v-if="form.errors.email">{{ form.errors.email }}</span>
                            </div>
                            <div class="sign__group">
                                <input type="password" class="sign__input" v-model="form.password" placeholder="Mật khẩu">
                                <span class="sign__error" v-if="form.errors.password">{{ form.errors.password }}</span>
                            </div>
                            <div class="sign__group">
                                <input type="password" class="sign__input" v-model="form.password_confirmation" placeholder="Xác nhận mật khẩu">
                                <span class="sign__error" v-if="form.errors.password_confirmation">{{ form.errors.password_confirmation }}</span>
                            </div>
                            <button class="sign__btn" type="submit">Đặt lại mật khẩu</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Head, Link, useForm, usePage} from "@inertiajs/inertia-vue3";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({});

const props = defineProps({
    token: String,
    email: String,
})

const form = useForm({
    email: props.email,
    password: null,
    password_confirmation: null,
    token: props.token
})

const submit = () => {
    form.post('/password/reset', {
        onSuccess: () => {
            form.reset('password', 'password_confirmation')
            toaster.success(usePage().props.value.flash.success)
        }
    });
}
</script>
