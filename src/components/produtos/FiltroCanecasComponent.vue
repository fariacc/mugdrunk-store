<template>
  <div class="col-md-3 col-lg-3 filtro-caneca-component">
    <div class="card">
      <hr>
      <p class="mb-4">Preço (em R$)</p>
      <v-app>
        <v-col cols="12">
          <v-range-slider v-model="range" :thumb-size="24" thumb-label="always"
          :min="min" :max="max" hide-details></v-range-slider>
        </v-col>
      </v-app>
      <button type="button" name="button" class="btn btn-primary" @click="$emit('update:range', range)">
        <i class="fas fa-funnel-dollar" aria-hidden="true"></i>
        <span> Filtrar</span>
      </button>
      <hr>
    </div>
  </div>
</template>

<script>
  export default {
    name: "filtro-component",
    data(){
      return{
        min: 0, max: 100, range: [0, 100]
      }
    },
    created(){
      this.$emit('update:range', this.range)
    }
  }
</script>

<style lang="scss">
  .filtro-caneca-component{
    text-align: center;
    // margin-top: 0.8em;
    .v-application{
      background-color: #ffffff!important;
      min-height: fit-content;
      &--wrap{
        min-height: auto;
      }
    }
    .card{
      box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
      .btn{
        width: fit-content;
        margin: auto;
      }
    }
  }
</style>
