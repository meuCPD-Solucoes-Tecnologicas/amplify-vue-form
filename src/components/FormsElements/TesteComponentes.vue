<script setup lang="ts" >
import CheckboxField, { CheckBoxFieldProps } from "./CheckboxField.vue";
import CheckboxFieldSF from "./CheckboxFieldSF.vue";
import TextField, { TextFieldProps } from "./TextField.vue";
import TextAreaField, { TextAreaFieldProps } from "./TextAreaField.vue";
import SubmitButton, { SubmitButtonProps } from "./SubmitButton.vue";
import SelectField, { SelectFieldProps } from "./SelectField.vue";
import NumberField, { NumberFieldProps } from "./NumberField.vue";
import TextFieldSyncFusion, { TextFieldSyncFusionProps } from "./TextFieldSyncFusion.vue";

import teste_syncf_crate_input from "./teste_syncf_crate_input.vue";
// import FilesDropField from "./FilesDropField.vue.todo";
// import { 
// CheckBoxFieldProps, 
// SubmitButtonProps, 
// TextAreaFieldProps, 
// SelectFieldProps,
// NumberFieldProps } from "../types";
import { ref, shallowRef, reactive, shallowReactive, watch, markRaw, Ref } from "vue";



const checkboxProps: CheckBoxFieldProps = {
    name: "meu checkbox teste",
    label: "checkbox label",
    // labelCentered: true,
    // fieldSize: "FieldSize",
    // theme: {
    //     color: "orange",
    //     branding: 'basic'
    // },
    // isSubmitting: false,
    disabled:false,
    bs_class:'m-2 p-2',
    bs_fs:'bs',
}
const checkboxPropsSF = {
    cssSFClass: 'e-success', label: 'label checkSF'
}
const textFieldProps: TextFieldProps = {

    name: "textField",
    label: "textField label",
    labelCentered: true,
    // fieldSize: "FieldSize",
    // theme: {
    //     color: "orange",
    //     branding: 'basic'
    // },
    isSubmitting: false,
    selectedValue: "selectLabel",
    placeholder: "TextAreaFieldProps placeholder"

};
const textAreaFieldProps: TextAreaFieldProps = {
    name: "textArea",
    label: "textArea label",
    labelCentered: true,
    fieldSize: "FieldSize",
    // theme: {
    //     color: "orange",
    //     branding: 'basic'
    // },
    isSubmitting: false,
    selectedValue: "selectLabel",
    rows: 10,
    cols: 30,
    placeholder: "TextAreaFieldProps placeholder"
};
const submitButtonProps: SubmitButtonProps = {
    // theme: {
    //     color: "green",
    //     branding: 'basic'
    // },
    title: "Submit button",
    btn_theme: "btn-warning"
};
// const selectField: SelectField = {};
// const numberField: NumberField = {};
const selectFieldProps: SelectFieldProps = {
    name: "select",
    label: "select label",
    labelCentered: true,
    // fieldSize: "FieldSize",
    // theme: {
    //     color: "orange",
    //     branding: 'basic'
    // },
    isSubmitting: false,
    selectedValue: "value1",
    options: [
        {
            label: "label1",
            value: "value1",
        },
        {
            label: "label2",
            value: "value2",
        },
        {
            value: "value3",
        },
        {
            label: "labelteste",
            value: "vlor teste",
        },
    ]
}
const numberField: NumberFieldProps = {
    name: "number",
    label: "number label",
    labelCentered: true,
    // fieldSize: "FieldSize",
    // theme: {
    //     color: "orange",
    //     branding: 'basic'
    // },
    isSubmitting: false,
    selectedValue: "value1",
    step: 0.2,
    placeholder: "number placeholder"
}


const textFieldSyncFusionProps = ref<TextFieldSyncFusionProps>({
    nome: "textFieldSyncFusion",
    floatLabelType: "Auto",
    placeholderLabel: "textFieldSyncFusion placeholder",
})
const componentes = ref([
    { nome: "CheckboxField", cpnt: markRaw(CheckboxField), test: false, props: reactive(checkboxProps) },
    { nome: "CheckboxFieldSF", cpnt: markRaw(CheckboxField), test:false , props: reactive({ ...checkboxProps, bs_fs: 'fs', cssSFClass: 'e-success', label: "label checkSF" }) },
    { nome: "TextField", cpnt: markRaw(TextField), test:'' , props: reactive(textFieldProps) },
    { nome: "TextFieldSyncFusion", cpnt: markRaw(TextFieldSyncFusion), test:'' , props: reactive(textFieldSyncFusionProps.value) },
    { nome: "TextAreaField", cpnt: markRaw(TextAreaField), test:'' , props: reactive(textAreaFieldProps) },
    { nome: "TextAreaFieldSyncFusion", cpnt: markRaw(TextFieldSyncFusion), test:'' , props: reactive({ nome: "textFieldSyncFusion", floatLabelType: "Auto", placeholderLabel: "textFieldSyncFusion placeholder", is_text_area: true }) },
    { nome: "SubmitButton", cpnt: markRaw(SubmitButton), test:'' , props: reactive(submitButtonProps) },
    { nome: "SubmitButtonFS", cpnt: markRaw(SubmitButton), test:'' , props: reactive({ title: "Submit button", bs_fs: 'fs', fs_isPrimary: true }) },
    { nome: "SelectField", cpnt: markRaw(SelectField), test:'' , props: reactive(selectFieldProps) },
    { nome: "NumberField", cpnt: markRaw(NumberField), test:0 , props: reactive(numberField) },
])

function retun_form_type(value: any): string {
    const tipo = typeof value;

    switch (tipo) {
        case 'string':
            return 'text';
        case 'boolean':
            return 'checkbox'

        default:
            return ''
            break;
    }
}


</script>
<template>
    <ul>
        <span class="fs-5"> // TODO</span>
        <li>substituir os components html nativos por componentes BS5 e SyncFusion</li>
        <li>Adequar código de pré-preenchimento (react->vue) (pra update)</li>
        <li>Alterar código para adicionar validção do BS5 e SyncFusion</li>


    </ul>
    <div v-for="c in componentes" class="container mx-auto teste m-1 p-1">

        <h4>{{ c.nome }}</h4>
        <b>props: </b>
        <ul>
            <li v-for='v, k in c.props '>
                <strong>{{ k }}</strong>:
                <!-- {{ v }} -->
                <input :type="retun_form_type(v)" v-model="c.props[k]" />
            </li>
        </ul>
        <b>componente: </b>
        <br>
        <section style="border: 1px dotted red;padding:1em">

            <component :is="c.cpnt" v-bind="c.props" v-model="c.test" />
            <!-- <component v-else-if="tests[c.nome]" :is="c.cpnt" v-bind="c.props" v-model="(tests[c.nome])" @click="click" /> -->

            <div class="alert alert-info w-50" role="alert">
                Teste: <span class="bg-warning text-dark p-2" > {{ c.test }} </span>
            </div>
        </section>
    </div>
bac

    <!-- <CheckboxField v-bind="checkboxProps" /> -->
    <!--  <CheckboxFieldSF v-bind="checkboxPropsSF" v-model="tests.CheckboxField"/> -->
    <!-- <TextField v-bind="textFieldProps" /> -->
    <!-- <TextFieldSyncFusion v-bind="textFieldSyncFusionProps"  /> -->
    <!-- <TextAreaField v-bind="textAreaFieldProps" /> -->
    <!-- <SubmitButton v-bind="submitButtonProps" /> -->
    <!-- <SubmitButton v-bind="{title: "Submit button",bs_fs:'fs'}/> -->
    <!-- <SelectField v-bind="selectFieldProps" /> -->
    <!-- <NumberField v-bind="numberField" /> -->

</template>
<style>
.teste {
    background-color: rgba(255, 0, 0, 0.3);
}
</style>