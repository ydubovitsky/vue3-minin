<template lang="">
  <div>
    <div class="" v-html="html"></div>
    <input v-model="message" placeholder="отредактируй меня" @keyup.enter="addToList"/>
    <p>Сообщение: {{ message }}</p>
    <button @click="() => console.log(this)">Click</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExperimentView",
  data() {
    return {
      message: "",
      html: "<h1>Hello World</h1>",
      title: "Some say you will love me one day",
      list: [
        { id: 1, name: "Jam Smith" },
        { id: 2, name: "Matthey" },
      ],
    };
  },
  methods: {
    addToList() {
      this.list.push({id: this.list.length - 1, name: this.message})
    }
  },
  beforeCreate() {
    console.log("Before")
  }
});
</script>
<style lang="">
</style>