// core vue libraries
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

// vue template
import template from "./index.vue";

// domain logic
import UsersDomain from './../../index'

// domain components
import { UsersDetails } from './../_main'

// models
import { IUser } from './../../models/_main'

@Component({
  name: 'Users',
  mixins: [ template ],
  components: {
    UsersDetails
  }
})
export default class Users extends Vue {
  public domain: UsersDomain = new UsersDomain();

  public selectedUser: IUser | null = null;
 
  // Vue hooks
  public async mounted (): Promise<boolean> {

    // Get Users
    await this.domain.users.userInfoList();   

    return true
  }

  public userDetailsView(user: IUser) {      
    this.selectedUser = user;      
  }  
}
