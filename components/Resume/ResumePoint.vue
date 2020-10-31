<template>
  <div>
    <h3 class="text-xl pb-3 print:text-sm font-script">
      <span class="font-bold">
        {{ title }}
      </span>

      <span class="md:whitespace-no-wrap">
        (<template v-if="dateEnd === 'today'">since </template
        >{{ dateStartFormatted
        }}<template v-if="dateEnd && dateEnd !== 'today'">
          &ndash; {{ dateEndFormatted }}</template
        >)
      </span>
    </h3>
    <p></p>
    <p class="mb-3 font-bold">
      {{ where }}
    </p>
    <p v-if="what.length > 0" class="print:text-sm">
      {{ what }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    dateStart: {
      type: Date,
      required: true
    },
    dateEnd: {
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    what: {
      type: String,
      required: true
    },
    where: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    dateStartFormatted() {
      return this.formatDate(this.dateStart)
    },

    dateEndFormatted() {
      return this.formatDate(this.dateEnd)
    }
  },

  methods: {
    formatDate(date) {
      const year = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice('-2')
      const day = ('0' + date.getDate()).slice('-2')

      return `${year}-${month}-${day}`
    }
  }
}
</script>
