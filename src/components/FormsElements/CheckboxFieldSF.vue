<script setup lang="ts">import { computed } from 'vue';

enum cssSFClasses {
    "e-primary" = "e-primary",
    "e-success" = "e-success",
    "e-info" = "e-info",
    "e-warning" = "e-warning",
    "e-danger" = "e-danger",
}
interface CheckBoxFieldProps {
    cssSFClass: cssSFClasses,
    label: string,
    bs_class?: string
}
interface Props extends CheckBoxFieldProps {
    modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), { bs_class: "m-1 p-1" })
const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

</script>

<template>
    <!-- {{ props }} -->
    <div :class="bs_class">
        <ejs-checkbox :label='label' :cssClass='cssSFClass' v-model="value"></ejs-checkbox>
    </div>
</template>

<style>
.e-checkbox-wrapper {
    margin-top: 18px;
}

.e-checkbox-wrapper.e-primary:hover .e-frame.e-check {
    /* csslint allow: adjoining-classes */
    background-color: #e03872;
}

.e-checkbox-wrapper.e-success .e-frame.e-check,
.e-checkbox-wrapper.e-success .e-checkbox:focus+.e-frame.e-check {
    /* csslint allow: adjoining-classes */
    background-color: #689f38;
}

.e-checkbox-wrapper.e-success:hover .e-frame.e-check {
    /* csslint allow: adjoining-classes */
    background-color: #449d44;
}

.e-checkbox-wrapper.e-info .e-frame.e-check,
.e-checkbox-wrapper.e-info .e-checkbox:focus+.e-frame.e-check {
    /* csslint allow: adjoining-classes */
    background-color: #2196f3;
}

.e-checkbox-wrapper.e-info:hover .e-frame.e-check {
    /* csslint allow: adjoining-classes */
    background-color: #0b7dda;
}

.e-checkbox-wrapper.e-warning .e-frame.e-check,
.e-checkbox-wrapper.e-warning .e-checkbox:focus+.e-frame.e-check {
    /* csslint allow: adjoining-classes */
    background-color: #ef6c00;
}

.e-checkbox-wrapper.e-warning:hover .e-frame.e-check {
    /* csslint allow: adjoining-classes */
    background-color: #cc5c00;
}

.e-checkbox-wrapper.e-danger .e-frame.e-check,
.e-checkbox-wrapper.e-danger .e-checkbox:focus+.e-frame.e-check {
    /* csslint allow: adjoining-classes */
    background-color: #d84315;
}

.e-checkbox-wrapper.e-danger:hover .e-frame.e-check {
    /* csslint allow: adjoining-classes */
    background-color: #ba3912;
}
</style>