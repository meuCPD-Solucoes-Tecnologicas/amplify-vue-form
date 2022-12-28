import { createApp } from 'vue';

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css"; //https://stackoverflow.com/questions/63216712/use-bootstrap-icons-with-npm

import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
import { ButtonPlugin  } from '@syncfusion/ej2-vue-buttons';
import { registerLicense } from "@syncfusion/ej2-base";
import { enableRipple } from '@syncfusion/ej2-base';

import './style.scss';
import App from './App.vue'

registerLicense(
    "ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0VgWH9ZdHFVQGhVUUM="
);
enableRipple(true);


createApp(App)
.use(TextBoxPlugin)
.use(CheckBoxPlugin)
.use(ButtonPlugin)
.mount('#app')
