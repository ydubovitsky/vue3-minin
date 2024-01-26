<template lang="">
  <div>
    <h1>Breaking news</h1>
    <div class="">
      <h3>Статистика</h3>
      <p>Новостей прочитано: {{newsFinished}}</p>
    </div>
    <app-news-item 
    v-for="newsItem in news"
     :newsItem="newsItem"
     :key="newsItem.id"
     @toggle-news="changeNewsItemVisible"
     :increaseNewsFinishedCount="increaseNewsFinishedCount"
      ></app-news-item>
  </div>
</template>
<script>
import AppNewsItem from "./AppNewsItem.vue";
export default {
  components: {
    AppNewsItem: AppNewsItem,
  },
  data() {
    return {
      newsFinished: 0,
      news: [
        {
          id: 0,
          title:
            "Внутренние правила заведения не могут идти вразрез с законами РФ.",
          text: "Администрация вправе отказать в оказании услуг без объяснения причин. Общаясь с Кроликами не забывайте о том, что наши питомцы ЖИВЫЕ, и им тоже бывает СТРАШНО Администрация вправе отказать в оказании услуг без объяснения причин. Общаясь с Кроликами не забывайте о том, что наши питомцы ЖИВЫЕ, и им тоже бывает СТРАШНО",
          isOpen: true,
        },
        {
          id: 1,
          title:
            "Есть много неоднозначных ситуаций, например люди на роликах или посетители с собаками.",
          text: "Администрация вправе отказать в оказании услуг без объяснения причин. Общаясь с Кроликами не забывайте о том, что наши питомцы ЖИВЫЕ, и им тоже бывает СТРАШНО Администрация вправе отказать в оказании услуг без объяснения причин. Общаясь с Кроликами не забывайте о том, что наши питомцы ЖИВЫЕ, и им тоже бывает СТРАШНО",
          isOpen: false,
        },
        {
          id: 2,
          title: "Правила посещения для кафе, ночного клуба, бара ...",
          text: "Администрация вправе отказать в оказании услуг без объяснения причин. Общаясь с Кроликами не забывайте о том, что наши питомцы ЖИВЫЕ, и им тоже бывает СТРАШНО Администрация вправе отказать в оказании услуг без объяснения причин. Общаясь с Кроликами не забывайте о том, что наши питомцы ЖИВЫЕ, и им тоже бывает СТРАШНО",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    changeNewsItemVisible(id) {
      this.news[id].isOpen = !this.news[id].isOpen;
    },
    increaseNewsFinishedCount(id) {
      this.newsFinished += 1;
      this.news[id].isOpen = false;
    }
  },
};
</script>
<style lang="">
</style>