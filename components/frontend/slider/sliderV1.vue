<script lang="ts" setup>
defineProps({
  number: {
    type: Number,
    default: 5,
  },
  delay: {
    type: Number,
    default: 5000,
  },
})
</script>

<template>
  <Swiper
    v-bind="$attrs"
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: delay,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    class="w-full h-full"
  >
    <template
      v-for="slide in number"
      :key="slide"
    >
      <SwiperSlide>
        <!-- <slot :name="`slide_${slide}`"> -->
        <div class="w-full h-full grid place-content-center bg-gray-800">
          <slot :name="`slide_${slide}`">
            <strong class="text-3xl">{{ slide }}</strong>
          </slot>
        </div>
        <!-- </slot> -->
      </SwiperSlide>
    </template>
    <SwiperSlide
      v-for="slide in number"
      :key="slide"
    >
      <strong>{{ slide }}</strong>
    </SwiperSlide>
  </Swiper>
</template>
