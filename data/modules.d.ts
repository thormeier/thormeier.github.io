import type { Article } from '~/components/TArticle.vue'
import type { Resume } from '~/pages/resume.vue'

declare module 'articles.json' {
  const value: Article[]
  export default value
}

declare module 'resume.json' {
  const value: Resume
  export default value
}
