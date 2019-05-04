<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs">
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import dogs from '@/data/dogs'

export default {
  data () {
    return {
      dogs
    }
  }
}
</script>
