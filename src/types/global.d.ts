import { } from '@nuxt/types'
import type { $Img, ProviderGetImage } from './image'
import { ModuleOptions } from './module'

declare module '@nuxt/types' {
  interface Context {
    $img: $Img
  }

  interface NuxtAppOptions {
    $img: $Img
    getImage: ProviderGetImage
  }

  interface Configuration {
    image?: Partial<ModuleOptions>
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $img: $Img
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  interface Store<S> {
    $img: $Img
  }
}
