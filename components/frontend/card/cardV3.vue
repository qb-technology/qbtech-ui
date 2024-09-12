<script setup lang='ts'>
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
})
</script>

<template>
  <UCard :ui="{ divide: '', header: { base: '' } }">
    <!-- <template #header>
      <div class="flex flex-col justify-center items-center gap-5">
        <UButton
          :icon="icon"
          color="gray"
        />
        <p :class="[titleSize]">
          {{ title }}
        </p>
      </div>
    </template> -->

    <div class="grid grid-cols-[36px_1fr] grid-rows-2 gap-x-3 gap-y-5">
      <div class="col-start-1 row-start-1">
        <UButton
          :icon="icon"
          color="black"
        />
      </div>
      <div class="col-start-2 row-start-1">
        <p :class="[titleSize]">
          {{ title }}
        </p>
      </div>
      <div class="col-start-2">
        <slot name="content" />
      </div>
    </div>
  </UCard>
</template>
