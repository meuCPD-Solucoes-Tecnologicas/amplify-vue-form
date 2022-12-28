<script setup lang="ts">
// import { SubmitButtonProps as SubmitButtonPropsSource } from "../types";


// export btn_theme;
export interface SubmitButtonProps {//extends HTMLProps<HTMLButtonElement> {
    title?: string;
    bs_fs?: 'bs' | 'fs';
    fs_isPrimary?: boolean;
    btn_theme: "btn-primary" | "btn-secondary" | "btn-success" | "btn-danger" | "btn-warning" | "btn-info" | "btn-light" | "btn-dark";
    //   theme?: FormTheme;
}
const props = withDefaults(defineProps<SubmitButtonProps>(), {
    bs_fs: 'bs',
    fs_isPrimary: true
})


</script>
<template>
    <!-- className={`disabled:opacity-70 ${ (theme?.branding=='full' ?
        bgLightColorMap.get(theme?.color) : bgColorMap.get(theme?.color)) || 'bg-red-900' } ${ theme?.branding=='full' ?
        textColorMap.get(theme?.color) : 'text-white' } ${submitButtonStyle}`} {...rest} -->
    <ejs-button v-if="bs_fs === 'fs'" @click="$emit('click')" isSecondary="true" :isPrimary='fs_isPrimary'>{{ title }}</ejs-button>

    <button v-else type='submit' class="btn" @click="$emit('click')" :class="btn_theme">{{ title }}</button>
</template>