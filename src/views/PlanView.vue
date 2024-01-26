<template lang="">
  <div class="container">
    <h1>План по изучению Vue 3</h1>
    <div class="">
      <p><strong>{{plan.idx}}</strong>: {{plan.list[plan.idx].text}}</p>
    </div>
    <nav class="nav">
      <p 
        v-for="(item, index) in plan.list" 
        :key="index" 
        class="planItem"
        :class="item.id <= plan.idx ? 'active' : ''"
        @click="() => this.plan.idx = index"
      >{{item.id}}</p>
    </nav>
    <div class="buttons">
      <button class="btn" @click="navAction('prev')">Назад</button>
      <button class="btn" @click="navAction('next')">Вперед</button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlanView",
  data() {
    return {
      plan: {
        idx: 0,
        list: [
          {
            id: 0,
            isDone: false,
            text: "Опубликовано на Netlify. Нашли ошибку? Исправьте эту страницу на GitHub (opens new window Последнее обновление страницы: больше 1 года назад",
          },
          {
            id: 1,
            isDone: false,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis vel, distinctio id sapiente qui explicabo exercitationem sit quam cum deleniti!",
          },
          {
            id: 2,
            isDone: false,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cupiditate?",
          },
          {
            id: 3,
            isDone: false,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cupiditate?",
          },
          {
            id: 4,
            isDone: false,
            text: "Встроенные в HTML элементы ввода не всегда соответствуют потребностям. К счастью, компоненты Vue позволяют создавать собственные аналоги с полностью настраиваемым поведением",
          },
        ],
      },
    };
  },
  methods: {
    navAction(direction) {
      switch (direction) {
        case "next": {
          if (this.plan.idx < this.plan.list.length - 1) {
            this.plan.idx += 1;
          }
          break;
        }
        case "prev": {
          if (this.plan.idx > 0) {
            this.plan.idx -= 1;
          }
          break;
        }
      }
    },
  },
});
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border: 1px solid silver;
  padding: 5%;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.planItem {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px 2px silver;
  transition: 0.3s ease;
}
.planItem:hover {
  background-color: rgb(122, 122, 122);
}
.active {
  font-weight: bold;
  background-color: rgb(34, 231, 34);
}
.buttons {
  display: flex;
  justify-content: start;
  gap: 25px;
}
.btn {
  padding: 10px 25px;
}
</style>