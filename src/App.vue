<script setup lang="ts">
import TesteComponentes from "./components/FormsElements/TesteComponentes.vue";
import tests from "./tests";
</script>

<template>
  <h1>Tests</h1>

  <div class="mb-5">
    <h3 class="fs-3"> merm-admin/src/components/formSchema/teste.ts</h3>
    <span>Isso testa se ele tá parseando o schema para form-componentes-props </span>
    <div>{{ tests() }} "Olhe console.log" </div>
  </div>


  <!-- <div v-for="formulario in FormsConfigs">
    <form>
        <h2>{{formulario.formNome}}</h2>
        <component v-for="component in formulario.formInputComponetConfigs" :is="InputBS" v-bind="{ ...component.props }" />
    </form>
</div> -->
  <div>
    <span class="fs-3"> merm-admin/src/components/formSchema/FormsElements/TesteComponentes.vue</span>
    <TesteComponentes />
  </div>
  <!-- {{inputs_components;}} -->
  <!-- REFERENCIA: <component :is="comp.component" v-bind="{...comp.props}" v-model="comp.model"/> -->

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
