<template>
  <!-- <RouterView :links="getLinks()"/> -->
  <main>
    <h1 class="greeting">Good {{ greeting }}, Linda!</h1>

    <section class="search-group">
      <form
        id="search-form"
        action="https://www.google.com/search"
        method="get"
      >
        <label for="search"
          ><span class="material-icons search-icon">search</span></label
        >
        <input
          type="text"
          name="query"
          id="search"
          ref="searchInput"
          autocomplete="on"
          placeholder="What can I help you find?"
        />
      </form>
    </section>

    <section class="links">
      <ul>
        <li class="links-spacer"></li>
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

    <section class="design">
      <div class="design1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#618985"
            fill-opacity="1"
            d="M0,64L30,53.3C60,43,120,21,180,37.3C240,53,300,107,360,154.7C420,203,480,245,540,218.7C600,192,660,96,720,85.3C780,75,840,149,900,186.7C960,224,1020,224,1080,202.7C1140,181,1200,139,1260,144C1320,149,1380,203,1410,229.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div class="design2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#b082a0"
            fill-opacity="1"
            d="M0,64L26.7,90.7C53.3,117,107,171,160,186.7C213.3,203,267,181,320,144C373.3,107,427,53,480,80C533.3,107,587,213,640,240C693.3,267,747,213,800,202.7C853.3,192,907,224,960,197.3C1013.3,171,1067,85,1120,58.7C1173.3,32,1227,64,1280,112C1333.3,160,1387,224,1413,256L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div class="design3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#cb7c82"
            fill-opacity="1"
            d="M0,224L48,229.3C96,235,192,245,288,256C384,267,480,277,576,240C672,203,768,117,864,96C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  </main>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import HomeLinks from "./linkListHome";
import WorkLinks from "./linkListWork";

// const searchInput = ref(null);

// onMounted(() => {
//   const path = route.path;
//   if (path === '/') {
//     return HomeLinks;
//   } else if (path === '/work') {
//     return WorkLinks;
//   }
// })

export default {
  setup() {
    const route = useRoute();
    const searchInput = ref(null);
    const path = route.path;
    return {
      searchInput,
      path
    };
  },
  data() {
    return {
      greeting: "",
      links: [],
    };
  },
  computed: {
    coreLinks() {
      return (
        this.alphaSort(this.links.filter((link) => link.type === "core")) || []
      );
    },
    refLinks() {
      return (
        this.alphaSort(
          this.links.filter((link) => link.type === "reference")
        ) || []
      );
    },
    toolLinks() {
      return (
        this.alphaSort(this.links.filter((link) => link.type === "tool")) || []
      );
    },
    learnLinks() {
      return (
        this.alphaSort(this.links.filter((link) => link.type === "learn")) || []
      );
    },
  },
  methods: {
    alphaSort(list) {
      return list.sort((a, b) => {
        if (a.abbr > b.abbr) {
          return 1;
        } else if (a.abbr < b.abbr) {
          return -1;
        }
        return 0;
      });
    },
    getDaytime(hour) {
      let daytime = "";

      switch (hour) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          daytime = "morning";
          break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
          daytime = "afternoon";
          break;
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
          daytime = "evening";
          break;
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          daytime = "night";
          break;
        default:
          daytime = "day";
          break;
      }
      return daytime;
    },
  },
  created() {
    this.greeting = this.getDaytime(new Date().getHours());
  },
  mounted() {

    if (this.path === "/") {
      this.links = HomeLinks;
    } else if (this.path === "/work") {
      this.links = WorkLinks;
    }

    this.searchInput.focus();
  },
};
</script>

<style lang="scss" scoped></style>
