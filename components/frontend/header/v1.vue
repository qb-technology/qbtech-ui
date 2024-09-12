<script setup lang='ts'>
import type { HorizontalNavigationLink } from '#ui/types'
// import { useUI } from '#imports'

const props = defineProps({
  layout: {
    type: String,
    default: 'grid grid-cols-[150px_1fr] gap-5',
  },
  links: {
    type: Array<Array<HorizontalNavigationLink>> || Array<HorizontalNavigationLink>,
    default: [{
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
  },
})

const mobileMenu = computed(() => {
  const isSomeArray = props.links.some((x => Array.isArray(x)))
  if (isSomeArray) {
    return props.links[0]
  }
  else {
    return props.links
  }
})
const mobile_is_open = ref(false)
</script>

<template>
  <div
    class="relative items-center"
    :class="[layout]"
  >
    <slot name="logo">
      <div class="w-full h-full flex items-center">
        <p class="text-lg font-bold w-fit">
          QB TECH
        </p>
      </div>
    </slot>

    <slot name="menu">
      <div class="hidden md:flex items-center justify-center">
        <UHorizontalNavigation
          :links="links"
          class="w-fit"
        />
      </div>
      <div class="md:hidden flex items-center justify-end">
        <UButton
          icon="i-heroicons-bars-3-20-solid"
          color="gray"
          @click="() => mobile_is_open=true"
        />
        <USlideover v-model="mobile_is_open">
          <UCard>
            <template #header>
              <div class="flex items-center justify-end">
                <UButton
                  color="gray"
                  icon="i-heroicons-x-mark-20-solid"
                  @click="() => mobile_is_open=false"
                />
              </div>
            </template>
            <div class="w-full h-full">
              <UVerticalNavigation :links="mobileMenu" />
            </div>
          </UCard>
        </USlideover>
      </div>
    </slot>
  </div>
</template>
