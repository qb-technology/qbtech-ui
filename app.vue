<template>
  <div class="w-screen h-screen">
    <UContainer class="w-full h-full">
      <div>
        <FrontendHeaderV1 :links="links" />
      </div>

      <BaseDarkMode />

      <FrontendEventsListingV1 />
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

// async function sendMessage(data: any) {
//   console.log('send message', data)
// }
</script>
