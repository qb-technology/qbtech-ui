<script setup lang='ts'>
defineProps({
  title: {
    type: String,
    default: 'Become a Volunteer',
  },
  icon: {
    type: String,
    // default: 'i-fluent-people-community-20-filled',
    default: 'i-heroicons-users',
  },
  content: {
    type: String,
    default: 'Want to contribute to society? Join us now',
  },
  iconBackground: {
    type: String,
    default: 'bg-primary-50 dark:bg-primary-900',
  },
  titleClass: {
    type: String,
    default: 'text-base md:text-lg font-bold',
  },
  contentClass: {
    type: String,
    default: 'text-sm',
  },
  iconSize: {
    type: String,
    default: 'w-9 h-9',
  },
  iconClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="grid  gap-5 p-4 group">
    <div class="w-fit h-full">
      <div
        class="rounded-full p-4"
        :class="[iconBackground]"
      >
        <slot name="icon">
          <UIcon
            :name="icon"
            :class="[iconSize, iconClass]"
          />
        </slot>
      </div>
    </div>
    <div class="flex flex-col gap-2.5">
      <div>
        <p :class="[titleClass]">
          {{ title }}
        </p>
      </div>
      <div>
        <p
          class="text-pretty"
          :class="[contentClass]"
        >
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>
