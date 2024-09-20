<script setup lang='ts'>
defineProps({
  imgSrc: {
    type: String,
    default: 'https://lh3.googleusercontent.com/a-/ALV-UjUBOAJl2-PsjZk9dQKZUnhSLru0Apdpi4jP5Ug8jbrzmGdTJkNA=s500-p-k-rw-no',
  },
  alt: {
    type: String,
  },
  name: {
    type: String,
    default: 'Andrews Okyere',
  },
  position: {
    type: String,
    default: 'Member',
  },
  containerClass: {
    type: String,
    default: 'bg-gray-100 dark:bg-gray-800',
  },
  nameClass: {
    type: String,
    default: 'bg-gray-100 dark:bg-gray-900 shadow',
  },
})
const img_optimizer = useImage()
</script>

<template>
  <div
    class="relative py-4"
    :class="[containerClass]"
  >
    <slot name="image">
      <div
        :style="{ 'background-image': `url(${img_optimizer(imgSrc, { format: 'webp' })})` }"
        class="w-full min-h-[300px] bg-contain rounded-lg"
      />
    </slot>
    <div class="px-4 relative">
      <div
        class="space-y-2 rounded-lg py-3 px-2 -my-6"
        :class="[nameClass]"
      >
        <slot name="member_name">
          <p class="font-semibold text-center">
            {{ name }}
          </p>
        </slot>
        <slot name="member_position">
          <p class="text-xs text-center">
            {{ position }}
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>
