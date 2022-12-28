<script setup lang="ts">

export interface FieldProps {
    name: string;
    label?: string;
    labelCentered?: boolean;
    //   fieldSize?: FieldSize;
    //   theme?: FormTheme;
    isSubmitting?: boolean;
    selectedValue?: string;
}

export interface TextFieldProps extends FieldProps {
    placeholder: string,


    name: string;
    label?: string;
    labelCentered?: boolean;
    //   fieldSize?: FieldSize;
    //   theme?: FormTheme;
    isSubmitting?: boolean;
    selectedValue?: string;

}

const props = defineProps<TextFieldProps>()


// ) => {
// const safeFieldSize = fieldSizeMap.get(fieldSize) ? fieldSize : 'full';
// if (!fieldSizeMap.get(fieldSize)) {
//     const fieldSizeValues = Array.from(fieldSizeMap.keys());
//     console.warn(
//         `Problem in TextField: fieldSize '${fieldSize}' is unknown, fieldSize is set to default : '${safeFieldSize}' (Possible fieldSize are : '${fieldSizeValues.join(
//             `', '`
//         )}')`
//     );
// }

</script>
<template>
    <!-- props: {{ props }} -->
    <!-- <FieldWithError
      name= { name }
fieldSize = { safeFieldSize }
theme = { theme }
{...rest }>
className={
    `${fieldStyle} ${focusBorderColorMap.get(
        theme?.color
        )} ${fieldSizeMap.get(safeFieldSize)}`
    }
-->
    <!-- <input type='text' :id="name" :name="name" :placeholder="placeholder" /> -->

    <div class="form-floating mb-3">
        <input type="text" class="form-control" :id="name" :name="name" :placeholder="placeholder">
        <label :for="name">{{ label }}</label>
    </div>
    <!-- < /FieldWithError> -->

    
</template>