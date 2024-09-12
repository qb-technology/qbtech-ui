<template>
  <div class="w-screen h-screen">
    <UContainer class="w-full h-full">
      <div>
        <FrontendHeaderV1 :links="links" />
      </div>

      <BaseDarkMode />

      <div>
        <FrontendFormSignupV1 @submit="sendMessage" />
      </div>

      <div class="grid grid-cols-4 gap-5">
        <FrontendCardV3
          v-for="i of 4"
          :key="i"
        >
          <template #content>
            <p>andyboat75@gmail.com</p>
          </template>
        </FrontendCardV3>
      </div>

      <!-- <div class="w-full h-full">
        <div class="flex items-center justify-center p-5">
          <ScriptGoogleMaps
            ref="maps"
            :center="query"
            :markers="markers"
            api-key="AIzaSyAOEIQ_xOdLx2dNwnFMzyJoswwvPCTcGzU"
            class="group"
            above-the-fold
            @ready="handleReady"
          />
        </div>
      </div> -->
      <!-- <div class="w-full h-full">
        <FrontendSliderV1 />
      </div> -->
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const links = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4',
    },
    badge: 100,
  }, {
    label: 'Installation',
    icon: 'i-heroicons-home',
    // to: '/getting-started/installation'
  }, {
    label: 'Horizontal Navigation',
    icon: 'i-heroicons-chart-bar',
    // to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`
  }, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    // to: '/components/command-palette'
  }],
  [{
    label: 'Examples',
    icon: 'i-heroicons-light-bulb',
  }, {
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle',
  }],
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function sendMessage(data: any) {
  console.log('send message', data)
}

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
