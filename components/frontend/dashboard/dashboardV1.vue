<script setup lang='ts'>
import { twMerge, twJoin } from 'tailwind-merge'
import type { QbFrontendDashboardType } from '../../../utils/types'

const { ui: props } = defineProps<{ ui: QbFrontendDashboardType }>()

const default_config = {
  sidebar: {
    padding: 'pt-4',
  },
  main: {
    padding: 'pt-4',
  },
  base: 'grid grid-cols-[250px_1fr] w-full h-full',

} as QbFrontendDashboardType

const sidebar = computed(() => {
  const _s = Object.values(default_config.sidebar || {}).filter(x => x)
  const props_s = Object.values(props.sidebar || {}).filter(x => x)
  return twMerge(
    twJoin(
      ..._s,
      ...props_s,
    ),
  )
})

const main = computed(() => {
  const _s = Object.values(default_config.main || {}).filter(x => x)
  const props_s = Object.values(props.main || {}).filter(x => x)
  return twMerge(
    twJoin(
      ..._s,
      ...props_s,
    ),
  )
})
const base = computed(() => {
  return twMerge(
    twJoin(
      props.base,
      default_config.base,
    ),
  )
})
</script>

<template>
  <div :class="base">
    <div
      :class="[sidebar]"
    >
      <slot name="sidebar">
        <div>
          sidebar
        </div>
      </slot>
    </div>
    <div
      :class="main"
    >
      <slot>
        main content
      </slot>
    </div>
  </div>
</template>
