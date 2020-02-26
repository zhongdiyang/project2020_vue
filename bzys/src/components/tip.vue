<template>
  <transition name="bounce">
    <p class="public_test_fixed tip wrapbox" v-if="active">{{ content }}</p>
  </transition>
</template>
<script>
export default {
  props: ['content', 'active']
}
</script>
