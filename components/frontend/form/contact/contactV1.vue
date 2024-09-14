<script setup lang='ts'>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(2, 'Must be at least 2 characters'),
  tel: z.string().optional(),
  title: z.string(),
  message: z.string().min(1, 'Must be at least a character'),
})

const emits = defineEmits(['submit'])

type Schema = z.output<typeof schema>

const state = reactive({
  email: undefined,
  name: undefined,
  tel: undefined,
  title: undefined,
  message: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  // console.log(event.data)
  emits('submit', event.data)
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormGroup
      label="Name:"
      name="name"
    >
      <UInput
        v-model="state.name"
        autocomplete="name"
      />
    </UFormGroup>

    <div class="grid md:grid-cols-2 gap-5">
      <UFormGroup
        label="Email:"
        name="email"
      >
        <UInput
          v-model="state.email"
          autocomplete="email"
        />
      </UFormGroup>

      <UFormGroup
        label="Tel:"
        name="tel"
      >
        <UInput
          v-model="state.tel"
          type="text"
        />
      </UFormGroup>
    </div>

    <UFormGroup
      label="Title:"
      name="title"
    >
      <UInput
        v-model="state.title"
        type="text"
      />
    </UFormGroup>

    <UFormGroup
      label="Message:"
      name="message"
    >
      <UTextarea
        v-model="state.message"
        :rows="4"
        :maxrows="8"
        placeholder="Type your message"
        autoresize
        type="text"
      />
    </UFormGroup>

    <UButton
      type="submit"
      trailing-icon="i-ri-send-plane-fill"
    >
      Send
    </UButton>
  </UForm>
</template>
