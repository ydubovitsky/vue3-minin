<template lang="">
  <button :class="class" @click="$emit('action')">
    <slot/>
  </button>
</template>
<script>
export default {
  props: {
    class: {
      type: String,
      validator(value) {
        return ['', 'active', 'disabled'].includes(value)
      }
    },
  },
  emits: ['action']
}
</script>
<style lang="css">
  .active {
    background-color: red;
  }

  .disabled {
    background-color: silver;
  }
</style>