<template>
    <div class="buttons">
      <button @click="$store.dispatch('bajarcontador')">-</button>
      <button @click="$store.dispatch('subircontador')">+</button>
    </div>
</template>

<script>
export default {
   name:'botones',
}
</script>