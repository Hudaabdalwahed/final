import type { Directive } from "vue";

const vFocus: Directive<HTMLInputElement> = {
  mounted(el) {
    el.focus();
  },
};

export default vFocus;
