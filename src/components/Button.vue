<script setup lang="ts">
type ButtonType = 'submit' | 'reset' | 'button' | undefined;
type ButtonKind = 'primary' | 'cancel';

const baseClasses = 'px-2 py-1 rounded-lg border cursor-pointer';
const ButtonKindClasses: Record<ButtonKind, string> = {
  primary: 'bg-green-500 border-green-600 text-white active:bg-green-600',
  cancel: 'bg-red-500 border-red-600 text-white active:bg-red-600',
};

const { type = 'button', kind } = defineProps<{ type?: ButtonType; kind: ButtonKind }>();
const classes = `${baseClasses} ${ButtonKindClasses[kind]}`;
</script>

<template>
  <button @click="$emit('pressed')" v-bind:type="type" v-bind:class="classes"><slot /></button>
</template>
