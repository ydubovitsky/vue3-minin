<template lang="">
  <div class="app-news-item">
    <h3>{{newsItem.title}}</h3>
    <hr>
    <button @click="toggleNewsText(newsItem.id)">{{newsItem.isOpen ? "Закрыть" : "Открыть"}}</button>
    <app-button-vue class="disabled" @action="action">Какая то кнопка</app-button-vue>
    <div v-if="newsItem.isOpen">
      <p >{{newsItem.text}}</p>
      <button 
        style="background-color: green; color: white"
        @click="increaseNewsFinishedCount(newsItem.id)"
        >
       Прочесть новость</button>
    </div>
  </div>
</template>
<script>
import AppButtonVue from '@/components/AppButton.vue';

export default {
  components: {
    AppButtonVue
  },
  props: {
    increaseNewsFinishedCount : Function,
    newsItem: {
      type: Object,
    },
  },
  methods: {
    toggleNewsText(id) {
      this.$emit("toggleNews", id);
    },
    action() {
      console.log("ACTION")
    },
  },
  emits: ["toggleNews"],
  setup(props) {
    props.increaseNewsFinishedCount
  }
};
</script>
<style lang="css">
.app-news-item {
  padding: 20px 50px;
  border-radius: 20px;
  box-shadow: 1px 2px 2px 2px silver;
}
button {
  cursor: pointer;
  box-shadow: 1px 1px 1px black;
  padding: 10px 25px;
  border-radius: 5px;
  border: none;
}
</style>