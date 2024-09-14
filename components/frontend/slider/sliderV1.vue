<script lang="ts" setup>
import { Autoplay, EffectCreative, Navigation, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
// import 'swiper/css/bun'
const modules = [Autoplay, EffectCreative, Navigation, Parallax]
defineProps({
  number: {
    type: Number,
    default: 5,
  },
  delay: {
    type: Number,
    default: 5000,
  },
  navigation: Boolean,
})

const progressCircle = ref(null)
const progressContent = ref(null)
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty('--progress', 1 - progress)
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`
}
</script>

<template>
  <Swiper
    v-bind="$attrs"
    :modules="modules"
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
    :navigation="navigation"
    parallax
    :style="{
      '--swiper-navigation-color': 'text-primary',
    }"
    class="w-full h-full mySwiper"
    @autoplay-time-left="onAutoplayTimeLeft"
  >
    <template
      v-for="slide in number"
      :key="slide"
    >
      <SwiperSlide>
        <div class="w-full h-full">
          <slot :name="`slide_${slide}`">
            <strong class="text-3xl">{{ slide }}</strong>
          </slot>
        </div>
      </SwiperSlide>
    </template>

    <template #container-end>
      <div class="autoplay-progress">
        <svg
          ref="progressCircle"
          viewBox="0 0 48 48"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
          />
        </svg>
        <span ref="progressContent" />
      </div>
    </template>
  </Swiper>
</template>

<style scoped>
.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>
