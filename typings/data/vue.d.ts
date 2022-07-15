import { Store } from 'vuex'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import { Pinia } from 'pinia'

export interface Params {
  store: Store<any>
  router: RouteLocationNormalizedLoaded,
  pinia: Pinia
}
