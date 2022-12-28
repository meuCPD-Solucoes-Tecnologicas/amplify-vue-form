<script setup lang="ts">
import { watch, ref, computed } from "vue";

export interface FieldProps {// extends HTMLProps<HTMLInputElement> {
    name: string;
    label?: string;
    labelCentered?: boolean;
    //   fieldSize?: FieldSize;
    //   theme?: FormTheme;
    // isSubmitting?: boolean;
}

export interface CheckBoxFieldProps extends FieldProps {
    // labelCentered?: boolean;
    // isSubmitting?: boolean;
    //   fieldSize?: FieldSize;
    //   theme?: FormTheme;
    disabled?: boolean;
    cssSFClass?: "e-primary" | "e-success" | "e-info" | "e-warning" | "e-danger";
    bs_class?: string
    bs_fs?: 'bs' | 'fs';
}

interface Props extends CheckBoxFieldProps {
    modelValue: boolean
}

// const props = defineProps<CheckBoxFieldProps>()
const props = withDefaults(defineProps<Props>(),
    {
        bs_class: "m-1 p-1", bs_fs: 'bs', cssSFClass: "e-primary", disabled: false
    })
const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

const safeFieldSize = ref('md');//fieldSizeMap.get(fieldSize) ? fieldSize : 'md';
// if (!fieldSizeMap.get(fieldSize)) {
//     const fieldSizeValues = Array.from(fieldSizeMap.keys());
//     console.warn(
//         `Problem in CheckboxField: fieldSize '${fieldSize}' is unknown, fieldSize is set to default : '${safeFieldSize}' (Possible fieldSize are : '${fieldSizeValues.join(
//             `', '`ffd4544



//         )}')`
//     );
// }


</script>
<template>

    <div v-if="bs_fs === 'bs'" class="form-check" :class="bs_class">
        <input class="form-check-input" v-model="value" type='checkbox' :id="name" :name="name" :disabled="disabled">
        <label class="form-check-label" :for="name">{{ label }}</label>
    </div>

    <div v-else :class="bs_class">
        <ejs-checkbox :label='label' :cssClass='cssSFClass' v-model="value" :disabled="disabled"></ejs-checkbox>
    </div>

    <!-- <FieldWithError    ''
        name= { name }
fieldSize = { safeFieldSize }  
theme = { theme }
labelCentered = { true}
{...rest }> -->
    <!-- <div
        data - testid={ `${name}-div` }
className = {`relative p-3 flex justify-center ${fieldSizeMap.get(
    safeFieldSize
)}`
}> -->
    <!-- <div>
        <label :for="name">{{ label }}
            <input v-model="data" type='checkbox' :id="name" :name="name">
        </label>
    </div>
-->
    <!-- <Field
            className={ `${accentColorMap.get(theme?.color)} ${checkboxStyle}` }
type = 'checkbox'
id = { name }
name = { name }
{...rest }
/> -->
    <!-- < /FieldWithError> -->

    <!-- novo: -->

</template>