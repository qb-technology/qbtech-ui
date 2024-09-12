<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const emits = defineEmits(['submit'])

const schema = z.object({
  email: z.string().email('Invalid email'),
  first_name: z.string(),
  last_name: z.string(),
  password: z.string().min(8, 'Must be at least 8 characters').regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one special character.',
  ),
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined,
  first_name: undefined,
  last_name: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
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
    <div class="grid md:grid-cols-2 gap-5">
      <UFormGroup
        label="First Name"
        name="first_name"
      >
        <UInput
          v-model="state.first_name"
          autocomplete="first_name"
        />
      </UFormGroup>
      <UFormGroup
        label="Last Name"
        name="last_name"
      >
        <UInput
          v-model="state.last_name"
          autocomplete="last_name"
        />
      </UFormGroup>
    </div>
    <UFormGroup
      label="Email"
      name="email"
    >
      <UInput v-model="state.email" />
    </UFormGroup>

    <FrontendFormInputPassword v-model="state.password" />

    <UButton type="submit">
      Sign Up
    </UButton>
  </UForm>
</template>
