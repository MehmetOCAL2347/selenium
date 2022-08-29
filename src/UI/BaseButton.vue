<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  border-radius: 3px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  white-space:nowrap
}

.blue {
  border: 1px solid var(--navy-blue-light);
  background-color: var(--navy-blue-light);
  color: var(--primary-white);
}
.blue:hover {
  background-color: var(--navy-blue);
  border-color: var(--navy-blue);
}

.dark-blue {
  border: 1px solid var(--navy-blue);
  background-color: var(--navy-blue);
  color: var(--primary-white);
}

.dark-blue:hover {
  background-color: var(--navy-blue-light);
  border-color: var(--navy-blue-light);
}
</style>