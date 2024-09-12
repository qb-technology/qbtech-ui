<script setup lang='ts'>
import type { HorizontalNavigationLink } from '#ui/types'

defineProps({
  layout: {
    type: String,
    default: 'grid grid-cols-[150px_1fr] gap-5',
  },
  links: {
    type: Array<HorizontalNavigationLink>,
    default: [{
      label: 'Home',
      to: '/',
    }, {
      label: 'Installation',
      // to: '/getting-started/installation'
    }, {
      label: 'Horizontal Navigation',
      // to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`
    }, {
      label: 'Command Palette',
      // to: '/components/command-palette'
    }],
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <UHorizontalNavigation
      :links="links"
      class="w-fit"
      :ui="{
        after: '',
        inactive: 'text-gray-50 dark:text-gray-900',
      }"
    />
    <!-- <div class="flex items-center justify-center gap-5">
      <ULink
        v-for="(items, ind) of links"
        :key="ind"
        class="flex items-center min-w-0 text-white dark:text-gray-950"
        :to="items.to"
      >
        {{ items.label }}
      </ULink>
    </div> -->
    <div class="flex items-center justify-center gap-5">
      <UButton
        size="xl"
        variant="ghost"
        color="black"
        icon="i-ph-facebook-logo"
      />
      <UButton
        size="xl"
        variant="ghost"
        color="black"
        icon="i-ph-instagram-logo-light"
      />
      <UButton
        size="xl"
        variant="ghost"
        color="black"
        icon="i-ph-youtube-logo-fill"
      />
    </div>
    <div>
      <p class="text-sm text-dark dark:text-gray-50">
        &copy; 2024 QB-TECH | All rights reserved
      </p>
    </div>
  </div>
</template>
