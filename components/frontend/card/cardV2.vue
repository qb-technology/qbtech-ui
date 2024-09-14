<script setup lang='ts'>
import type { ButtonColor } from '#ui/types'

defineProps({
  icon: {
    type: String,
    default: 'i-heroicons-envelope',
  },
  size: {
    type: String,
    default: 'w-8 h-8 md:w-10 md:h-10',
  },
  title: {
    type: String,
    default: 'E-Mail',
  },
  titleSize: {
    type: String,
    default: 'text-lg md:text-xl lg:text-2xl',
  },
  buttonColor: {
    type: String as PropType<ButtonColor>,
    default: () => 'gray',
  },
})
</script>

<template>
  <UCard :ui="{ divide: '', header: { base: '' } }">
    <template #header>
      <div class="flex flex-col justify-center items-center gap-5">
        <UButton
          :icon="icon"
          :color="buttonColor"
        />
        <p :class="[titleSize]">
          {{ title }}
        </p>
      </div>
    </template>

    <div class="text-center">
      <slot name="content" />
    </div>
  </UCard>
</template>
