<template>
  <section class="links">
      <ul>
        <li v-for="link in coreLinks" :key="link.abbr" class="links-core">
          <a :href="link.url"
            ><p>{{ link.abbr }}</p>
            <span>{{ link.name }}</span></a
          >
        </li>
        <li v-for="link in refLinks" :key="link.abbr" class="links-ref">
          <a :href="link.url"
            ><p>{{ link.abbr }}</p>
            <span>{{ link.name }}</span></a
          >
        </li>
        <li v-for="link in toolLinks" :key="link.abbr" class="links-tool">
          <a :href="link.url"
            ><p>{{ link.abbr }}</p>
            <span>{{ link.name }}</span></a
          >
        </li>
        <li v-for="link in learnLinks" :key="link.abbr" class="links-learn">
          <a :href="link.url"
            ><p>{{ link.abbr }}</p>
            <span>{{ link.name }}</span></a
          >
        </li>
      </ul>
    </section>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  links: Array
});

const coreLinks = computed(() => {
  return alphaSort(props.links.filter((link) => link.type === "core")) || [];
});

const refLinks = computed(() => {
  return alphaSort(props.links.filter((link) => link.type === "reference")) || [];
});

const toolLinks = computed(() => {
  return alphaSort(props.links.filter((link) => link.type === "tool")) || [];
});

const learnLinks = computed(() => {
  return alphaSort(props.links.filter((link) => link.type === "learn")) || [];
});

function alphaSort(list) {
  return list.sort((a, b) => {
    if (a.abbr > b.abbr) {
      return 1;
    } else if (a.abbr < b.abbr) {
      return -1;
    }
    return 0;
  });
}
</script>

<style lang="css" scoped>
.links {
  padding: 3%;
  z-index: 2;
}

.links ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-rows: repeat(3, 120px);
  grid-template-columns: repeat(6, 120px);
  grid-auto-columns: 120px;
  place-items: center;
  justify-content: center;
  grid-auto-flow: column;
  gap: 14px;
}

.links li {
  width: 110px;
  height: 110px;
  margin: 1%;
  color: var(--green);
  text-align: center;
  border-radius: 7px;
  border-style: solid;
  border-width: 3px;
  background-color: var(--brown);
  transition: all 0.2s ease-in-out;
}

.links li a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: var(--offwhite);
  width: 100%;
  height: 100%;
}

.links li a:hover {
  color: var(--brown);
}

.links li a p {
  font-size: 1.75rem;
  font-family: var(--cursive);
  margin: 0;
}

.links li a span {
  font-size: 0.6rem;
  word-break: break-word;
  padding: 0 4%;
}

.links-core {
  border-color: var(--green);
}

.links-core:hover {
  background-color: var(--green);
}

.links-ref {
  border-color: var(--pink);
}

.links-ref:hover {
  background-color: var(--pink);
}

.links-learn {
  border-color: var(--purple);
}

.links-learn:hover {
  background-color: var(--purple);
}

.links-tool {
  border-color: var(--yellow);
}

.links-tool:hover {
  background-color: var(--yellow);
}
</style>