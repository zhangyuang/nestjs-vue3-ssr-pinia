import { Store } from 'vuex'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import { ISSRNestContext } from 'ssr-types'
import { Pinia } from 'pinia'
import { IndexData } from '~/typings/data'
import { useIndexStore } from '@/pinia-store'

interface IApiService {
  index: () => Promise<IndexData>
}
interface Params {
  store: Store<any>
  router: RouteLocationNormalizedLoaded,
  pinia: Pinia
}

export default async ({ store, router, pinia }: Params, ctx?: ISSRNestContext<{
  apiService?: IApiService
}>) => {
  // 阅读文档获得更多信息 http://doc.ssr-fc.com/docs/features$fetch#%E5%88%A4%E6%96%AD%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83
  const indexStore = useIndexStore(pinia)
  const data = __isBrowser__ ? await (await window.fetch('/api/index')).json() : await ctx?.apiService?.index()
  indexStore.setData(data)
}
