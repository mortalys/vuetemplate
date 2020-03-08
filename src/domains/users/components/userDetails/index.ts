// core vue libraries
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

// vue template
import template from "./index.vue";

// models
import { IUser } from './../../models/_main';

@Component({
  name: 'UsersDetails',
  mixins: [ template ],
  components: { }  
})
export default class UsersDetails extends Vue {    
  @Prop() user!: IUser;

  // Vue hooks
  public async mounted (): Promise<boolean> {      

    return true
  }
};