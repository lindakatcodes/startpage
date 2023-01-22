import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

/**
 * Each link should have a url, a name to display, and a type to control the display coloring
 * Default shape: 
 * url - string
 * name - string
 * abbr - string (2 letter abbreviation for display)
 * type - string
 * 
 * Available types:
 * core - general links I regularly go to 
 * reference - documentation sites
 * tool - tools for a specific use
 * learn - resources for learning
 * 
 * { url: '', name: '', abbr: '', type: '' },
 */
const links = [
  { url: 'https://www.youtube.com/', name: 'YouTube', abbr: 'Yt', type: 'core' },
  { url: 'https://www.twitch.tv/', name: 'Twitch', abbr: 'Tw', type: 'core' },
  { url: 'https://www.excalidraw.com/', name: 'Excalidraw', abbr: 'Ex', type: 'core' },
  { url: 'https://www.notion.com/', name: 'Notion', abbr: 'No', type: 'core' },
  { url: 'https://coolors.co/generate', name: 'Palatte Generator', abbr: 'Cp', type: 'tool' },
  { url: 'https://colorable.jxnblk.com/', name: 'Contrast Check', abbr: 'Cc', type: 'tool' },
  { url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', name: 'Flexbox Guide', abbr: 'Fb', type: 'reference' },
  { url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', name: 'Grid Guide', abbr: 'Gr', type: 'reference' },
  { url: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet', name: 'Markdown', abbr: 'Md', type: 'reference' },
  { url: 'https://www.freecodecamp.org/learn', name: 'FreeCodeCamp', abbr: 'Fc', type: 'learn' },
  { url: 'https://adventofcode.com/', name: 'Advent of Code', abbr: 'Ac', type: 'learn' },
  { url: 'https://regexr.com/', name: 'RegExr', abbr: 'Re', type: 'tool' },
  { url: 'https://www.a11yproject.com/checklist/', name: 'A11y Checklist', abbr: 'Al', type: 'reference' },
  { url: 'https://vuejs.org/guide/quick-start.html', name: 'Vue Docs', abbr: 'Vu', type: 'reference' },
  { url: 'https://reactjs.org/docs/getting-started.html', name: 'React Docs', abbr: 'Re', type: 'reference' },
  { url: 'https://angular.io/docs', name: 'Angular Docs', abbr: 'Ng', type: 'reference' },
]

createApp({
  data() {
    return {
      greeting: ''
    };
  },
  computed: {
    coreLinks() {
      return links.filter((link) => link.type === 'core') || [];
    },
    refLinks() {
      return links.filter((link) => link.type === 'reference') || [];
    },
    toolLinks() {
      return links.filter((link) => link.type === 'tool') || [];
    },
    learnLinks() {
      return links.filter((link) => link.type === 'learn') || [];
    }
  },
  methods: {
    getDaytime(hour) {
      let daytime = '';

      switch (hour) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          daytime = 'morning';
          break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
          daytime = 'afternoon';
          break;
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
          daytime = 'evening';
          break;
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          daytime = 'night';
          break;
        default:
          daytime = 'day';
          break;
      }
      return daytime;
    }
  },
  created() {
    this.greeting = this.getDaytime(new Date().getHours());
  }
}).mount("#app");