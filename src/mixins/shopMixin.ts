export default {
  methods: {
    formatPrice(value: number): string {
      return `$${value.toFixed(2)}`;
    },
    formatNumber(value: number): string {
      return new Intl.NumberFormat("en-US").format(value);
    },
  },
};
