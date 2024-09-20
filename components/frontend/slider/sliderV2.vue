<script lang="ts" setup>
import { Autoplay, EffectCreative, Navigation, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
// import 'swiper/css/bun'
const modules = [Autoplay, EffectCreative, Navigation, Parallax]
defineProps({
  images: {
    type: Array<{ src: string, alt?: string }>,
  },
  delay: {
    type: Number,
    default: 5000,
  },
  slidesPerView: {
    type: Number,
    default: 5,
  },
  spaceBetween: {
    type: Number,
    default: 20,
  },
  navigation: Boolean,
  as: {
    type: [Object, String],
    default: 'img',
  },
})
</script>

<template>
  <Swiper
    v-bind="$attrs"
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :loop="true"
    :effect="'creative'"
    :autoplay="true"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :navigation="navigation"
    parallax
    :style="{
      '--swiper-navigation-color': 'text-primary',
    }"
    class="w-full mySwiper"
  >
    <template
      v-for="(image, slide) in images"
      :key="slide"
    >
      <SwiperSlide>
        <div class="w-full h-full">
          <slot :name="`slide_${slide}`">
            <component
              :is="as"
              :src="image.src"
              format="webp"
              size="500"
              width="500"
              height="500"
              cross-origin="anonymous"
              class="object-cover block w-full h-full rounded-md"
            />
          </slot>
        </div>
      </SwiperSlide>
    </template>
  </Swiper>
</template>

<style scoped>

</style>
