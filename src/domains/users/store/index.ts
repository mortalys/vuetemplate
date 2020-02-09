import Vue from 'vue'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

// Models
import { IUser } from '../models/_main'

@Module({
  namespaced: true
})
export default class StoreUsers extends VuexModule {
  // Props (aka state)
  public users: IUser | undefined;

  @Mutation
  userAdd (payload: IUser): boolean {
    // Vue.set(this.users, payload, payload)
    return true
  }

  @Action
  userActionAdd (payload: IUser): boolean {
    // add loading ... when async
    // commit('moduleStateSet', true);

    // try make mutation to model
    try {
      // fetch online
      // call for mutation
      this.context.commit('userAdd', payload)
    } catch (e) {
      console.log(e)
    }

    // remove loading ... when async
    // commit('moduleStateSet', true);
    return true
  }
}

