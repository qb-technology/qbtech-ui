<script setup lang='ts'>
defineProps({
  imgSrc: {
    type: String,
    default: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  title: {
    type: String,
    default: 'BOA Wedding',
  },
  date: {
    type: String,
    default: '21/02/2025',
  },
  location: {
    type: String,
    default: 'Remote',
  },
  excerpt: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn',
  },
  to: String,
  containerClass: {
    type: String,
    default: 'bg-gray-100 dark:bg-gray-800',
  },
})
const img_optimizer = useImage()
</script>

<template>
  <div
    class="w-full"
    :class="[containerClass]"
  >
    <div
      :style="{ 'background-image': `url(${img_optimizer(imgSrc, { format: 'webp' })})` }"
      class="w-full min-h-[150px] bg-center rounded-lg"
    />
    <div class="space-y-2.5 p-4">
      <slot name="date_location">
        <UButtonGroup
          :ui="{
            wrapper: {
              horizontal: 'space-x-4',
            },
          }"
          size="sm"
          orientation="horizontal"
        >
          <UButton
            variant="ghost"
            color="gray"
            icon="i-heroicons-clock"
            :padded="false"
            :label="date"
          />
          <UButton
            variant="ghost"
            color="gray"
            icon="i-heroicons-map-pin"
            :padded="false"
            :label="location"
          />
        </UButtonGroup>
      </slot>
      <slot name="title">
        <p class="text-wrap font-semibold text-lg">
          {{ title }}
        </p>
      </slot>
      <!-- <slot name="excerpt">
        <p class="text-pretty">
          {{ excerpt }}
        </p>
      </slot> -->
      <slot name="read_more">
        <UButton
          variant="link"
          :to="to"
          label="Read More"
          trailing-icon="i-heroicons-chevron-right"
        />
      </slot>
    </div>
  </div>
</template>
