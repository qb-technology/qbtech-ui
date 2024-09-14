<script setup lang='ts'>
const isLoaded = ref(false)
const center = ref()
const maps = ref()

const query = ref({
  lat: 38.1060159,
  lng: 13.3653483,
})

const markers = ref(['38.1060159,13.3653483'])

function handleReady({ map }) {
  center.value = map.value.getCenter()
  map.value.addListener('center_changed', () => {
    center.value = map.value.getCenter()
  })
  isLoaded.value = true
}
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full h-full">
      <ScriptGoogleMaps
        id="map_container"
        ref="maps"
        :center="query"
        :markers="markers"
        api-key="AIzaSyAOEIQ_xOdLx2dNwnFMzyJoswwvPCTcGzU"
        class="group w-full"
        above-the-fold
        @ready="handleReady"
      />
    </div>
  </div>
</template>

<style scoped>
#map_container {
  width: 100% !important;
}
</style>
