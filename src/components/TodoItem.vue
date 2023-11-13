<template>
  <v-checkbox
    v-model="getChecked"
    :label="label"
  ></v-checkbox>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
});

const { label } = toRefs(props);

const emits = defineEmits({
  'update:modelValue': (checked: boolean): boolean => checked,
});

const getChecked = computed({
  get() { return props.modelValue; },
  set(val: boolean) {
    emits('update:modelValue', val);
  },
});

</script>

<style lang="scss" scoped></style>
