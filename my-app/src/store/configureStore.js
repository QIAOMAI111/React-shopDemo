import { createStore } from 'redux'
import rootReducer from '../reducer'
//定义store，createStore为对应的方法，rootReducer为所设计的Reducer
export default function configureStore(){
  const store = createStore(rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined) //触发redux开发者工具
  return store
}