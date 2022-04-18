<template>
    <Head>
        <title>Đặt lại mật khẩu</title>
    </Head>
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
                            <div class="sign__group sign__group--checkbox">
                                <input id="remember" name="remember" type="checkbox" checked="checked">
                                <label for="remember">Tôi đồng ý với <a href="/privacy">Chính sách bảo mật</a></label>
                            </div>
                            <button class="sign__btn" type="submit">Gửi</button>
                            <span class="sign__text center">Chúng tôi sẽ gửi mật khẩu đến email của bạn</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Link, useForm, usePage, Head} from "@inertiajs/inertia-vue3";
import {computed} from "vue";

const form = useForm({
    email: null,
})

const submit = () => {
    form.post('/forgot-password', {
        onSuccess: () => {
            form.reset()
            toastr.success(usePage().props.value.flash.success)
        }
    });
}
</script>
