<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

import CardList from '../components/CardList.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://536b4780f6030ee3.mokky.dev/favorites?_relations=items'
    )
    favorites.value = data.map((obj) => obj.item)
  } catch {}
})
</script>
<template>
  <h2 class="text-3xl font-bold mb-8">Закладки</h2>

  <CardList :items="favorites" is-favorites />
</template>
