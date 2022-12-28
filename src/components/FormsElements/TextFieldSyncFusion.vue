<script setup lang="ts">import { computed } from 'vue';

export interface TextFieldSyncFusionProps {
    nome: string;
    floatLabelType: "Auto" | "Always" | "Never";
    placeholderLabel: string;
    is_text_area?:boolean;
    bs_class?: string;
}

interface Props extends TextFieldSyncFusionProps{
    modelValue: String  ;
}
const props = withDefaults(defineProps<Props>(), {
    bs_class: "bg-light m-1 p-1",
    is_text_area:false
});
// defineProps(['modelValue'])
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
    <div class='e-input-group' :class="bs_class">
        <ejs-textbox :id='nome' :multiline="is_text_area" :floatLabelType="floatLabelType" :placeholder="placeholderLabel"
            v-model="value"></ejs-textbox>
    </div>
</template>
<style>

</style>