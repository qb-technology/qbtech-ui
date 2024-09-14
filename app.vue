<template>
  <div class="w-screen h-screen">
    <UContainer class="w-full h-full">
      <div>
        <FrontendHeaderV1 :links="links" />
      </div>

      <BaseDarkMode />

      <!-- <div>
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
      </div> -->

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
        <FrontendSliderV1
          :number="2"
          :delay="4000"
        >
          <template #slide_1>
            <NuxtImg
              class="w-full h-full fixed z-0"
              format="webp"
              src="https://associazioneasim.org/wp-content/uploads/2024/04/corporate-business-handshake-business-partners-scaled-1.jpg"
              alt="business"
            />
            <div
              data-swiper-parallax="-20%"
              class="z-[5] w-full h-full flex flex-col items-start justify-center gap-5 bg-primary-800/20"
            >
              <h1
                data-swiper-parallax="-500"
                class="text-5xl"
              >
                We boost businesses
              </h1>
              <p data-swiper-parallax="-300">
                The world has become a global village
              </p>
              <div
                data-swiper-parallax="-100"
                class="flex gap-5"
              >
                <UButton
                  variant="solid"
                  label="Learn More"
                />
                <UButton
                  variant="outline"
                  label="Contact Us"
                  color="white"
                />
              </div>
            </div>
          </template>
          <template #slide_2>
            <NuxtImg
              class="w-full h-full"
              format="webp"
              src="https://associazioneasim.org/wp-content/uploads/2024/04/imprese.jpg"
              alt="business"
            />
          </template>
        </FrontendSliderV1>
      </div> -->
      <FrontendCardV5 />
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
</script>
