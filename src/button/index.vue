<template>
  <button
    :class="[
      'nb-button',
      'nb-button--normal',
      `${type ? `nb-button--${type}` : 'nb-button--primary'}`,
      `${plain ? 'nb-button--plain' : ''}`,
      `${hairline? 'nb-button--plain nb-button--hairline nb-hairline--surround' : ''}`,
      `${round ? 'nb-button--round' : ''}`,
      `${square ? 'nb-button--square' : ''}`,
      `${disabled ? 'nb-button--disabled' : ''}`,
      `${size ? `nb-button--${size}` : ''}`,
      `${block ? `nb-button--block` : ''}`,
    ]"
    :disabled='disabled'
    :style="getStyle()"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'nb-button',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    hairline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    block: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    console.log(this);
  },
  methods: {
    getStyle() {
      const { color, plain } = this;
      if (color) {
        const style = {
          color: plain ? color : 'white',
        };

        if (!plain) {
          // Use background instead of backgroundColor to make linear-gradient work
          style.background = color;
        }

        // hide border when color is linear-gradient
        if (color.includes('gradient')) {
          style.border = 0;
        } else {
          style.borderColor = color;
        }

        return style;
      }
   }
  }
};
</script>

<style lang="less">
@import './index.less';
</style>
