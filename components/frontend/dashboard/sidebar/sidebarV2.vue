<script setup lang='ts'>
import { twMerge, twJoin } from 'tailwind-merge'
import type { qbFrontendSidebarType } from '../../../../utils/types'

const {
  links = [
    { label: 'Events' },
    { label: 'Services' },
    { label: 'Members' },
    { label: 'Gallery' },
    { label: 'Executives' },
    { label: 'Settings' },

  ],
  ui: props_ui,
  user = { name: 'Andrews Boateng', position: 'Manager', image: '' },
} = defineProps<qbFrontendSidebarType>()

const default_props = {
  ui: {
    base: 'relative',
    container: 'h-full grid grid-rows-[48px_minmax(0,1fr)_108px] gap-5',
    padding: '',
    background: '',
    rounded: '',
    header: {
      padding: 'px-4',
      base: 'flex items-center',
    },
    footer: {
      padding: 'px-4',
      base: 'grid grid-cols-[64px_1fr] grid-rows-2',
    },
    body: {
      padding: 'px-4',
      base: '',
    },
  },
} as qbFrontendSidebarType

const ui = computed(() => {
  const _base = twMerge(twJoin(default_props.ui?.base || '', props_ui?.base || ''))
  const _container = twMerge(twJoin(default_props.ui?.container || '', props_ui?.container || ''))
  const _padding = twMerge(twJoin(default_props.ui?.padding || '', props_ui?.padding || ''))
  const _background = twMerge(twJoin(default_props.ui?.background || '', props_ui?.background || ''))
  const _rounded = twMerge(twJoin(default_props.ui?.rounded || '', props_ui?.rounded || ''))

  const _header = twMerge(twJoin(
    Object.values(default_props.ui?.header || {}).filter(x => x),
    Object.values(props_ui?.header || {}).filter(x => x),
  ))
  const _footer = twMerge(twJoin(
    Object.values(default_props.ui?.footer || {}).filter(x => x),
    Object.values(props_ui?.footer || {}).filter(x => x),
  ))
  const _body = twMerge(twJoin(
    [default_props.ui?.body?.base || '', default_props.ui?.body?.padding || ''],
    [props_ui?.body?.base || '', props_ui?.body?.padding || ''],
  ))

  return { _base, _background, _container, _padding, _rounded, _header, _footer, _body }
})
</script>

<template>
  <UCard>
    <template #header>
      <div>
        <slot name="header">
          <p class="text-lg font-bold w-fit">
            QB TECH
          </p>
        </slot>
      </div>
    </template>

    <div :class="[ui._body]">
      <slot name="menu">
        <UVerticalNavigation
          v-if="links"
          :links="links"
          :ui="props_ui?.body?.menu"
        />
      </slot>
    </div>

    <template #footer>
      <div>
        <slot name="footer">
          <div :class="[ui._footer]">
            <div class="row-span-full flex items-center">
              <UAvatar
                :alt="user.name"
                :src="user.image"
                format="webp"
              />
            </div>
            <div class="col-start-2">
              <p class="truncate">
                {{ user.name }}
              </p>
            </div>
            <div class="col-start-2">
              <p class="truncate">
                {{ user.position }}
              </p>
            </div>
          </div>
        </slot>
      </div>
    </template>
  </UCard>
</template>
