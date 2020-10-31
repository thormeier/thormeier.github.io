export default {
  data() {
    return {
      animations: {}
    }
  },

  methods: {
    animate(which) {
      if (!this.animations[which]) {
        return
      }

      const animatingElement = this.animations[which]

      if (!animatingElement.hasAnimated) {
        setTimeout(() => {
          animatingElement.hasAnimated = true
        }, animatingElement.delay)
      }
    }
  }
}
