<script setup lang="ts">
import { ref, toRef } from "vue";
// import { SelectFieldProps as SelectFieldPropsSource } from "../../types";

// interface SelectFieldProps extends SelectFieldPropsSource { }

export interface FieldProps {// extends HTMLProps<HTMLInputElement> {
    name: string;
    label?: string;
    labelCentered?: boolean;
    // fieldSize?: FieldSize;
    // theme?: FormTheme;
    isSubmitting?: boolean;
    selectedValue?: string;
}

export interface Option {
    label?: string;
    value: string;
}
export interface SelectFieldProps {
    options: Option[],
    name: string,
    label?: string,
    labelCentered?: boolean,
    isSubmitting?: boolean,
    selectedValue?: string,
    // fieldSize?: FieldSize;
    // theme?: FormTheme;

}
const props = defineProps<SelectFieldProps>()
// debugger
//   fieldSize,
//   theme,
//   placeholder = '',
//   options,
//   selectLabel = 'Select',
//   multiple,
//   ...rest

// }) => {
//   const fieldname = rest.name;
//   const safeSize = props.fieldSize
//     ? fieldSizeMap.get(props.fieldSize)
//       ? props.fieldSize
//       : undefined
//     : undefined;
//   const adaptiveFieldSize = safeSize || (multiple ? '2xl' : 'md');

//   const color =
//     theme?.branding == 'full'
//       ? chroma(optionColorMap.get(theme?.color)!)
//       : chroma('#9ca3af');
//   const customStyles: StylesConfig<Option, true> = {
//     control: styles => ({
//       ...styles,
//       backgroundColor: 'transparent',
//       border: 0,
//       boxShadow: 'transparent',
//     }),
//     option: (styles, { isFocused, isSelected }) => ({
//       ...styles,
//       'backgroundColor': isSelected
//         ? color.css()
//         : isFocused
//         ? color.alpha(0.1).css()
//         : undefined,
//       ':active': {
//         ...styles[':active'],
//         backgroundColor: isSelected ? color.css() : color.alpha(0.3).css(),
//       },
//     }),
//     input: styles => ({
//       ...styles,
//       backgroundColor: 'transparent',
//     }),
//     placeholder: styles => ({
//       ...styles,
//       color: 'black',
//     }),
//   };

// const validate = (value: FormValues) => {
//     if (value[fieldname] == '') {
//         return 'Required';
//     }
//     return;
// };

// const [{ name, onChange, ...otherFieldProps }, , { setValue }] = useField<
//     MultiValue<Option>
// >({
//     validate,
//     ...rest,
// });



// const multiple = ref()
// const setValue = (values: unknown) => console.log(
//     values

// );
const selected = toRef(props, 'selectedValue')
</script>
<template>
    <!-- <FieldWithError props.fieldSize={adaptiveFieldSize} theme={theme} {...rest}> -->
    <!-- <div
        data-testid={`${fieldname}-sizing-div`}
        className={`${selectStyle} ${fieldSizeMap.get(adaptiveFieldSize)}`}>
        <ReactSelect
            className='peer'
            styles={customStyles}
            options={options}
            isMulti={multiple || undefined}
            isSearchable={false}
            placeholder={selectLabel}
            onChange={values => setValue(values)}
            {...otherFieldProps}
        /> 
    </div>
-->

    <!-- :styles="{{ customStyles }}" -->
    <!-- </FieldWithError> -->
    <div class="mb-3 text-dark">
        <label :for="name" class="form-label">{{ label??name }}</label>
        <select class="form-select form-select-lg" :name="name" :id="name">
            <option v-for="op in options" :value="op.value">{{ op.label ?? op.value }}</option>
        </select>
    </div>

</template>