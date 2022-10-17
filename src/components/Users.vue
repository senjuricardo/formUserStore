<template>
    <div>
      <!-- <ul v-for="item in list"></ul>
         <li  v-for="item in list">{{item.firstName}}</li> -->
      <table class="table table-hover  border border-danger">
        <thead>
          <tr>
            <th scope="col">first name</th>
            <th scope="col">last name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr  v-for="(item,idx) in getUsers">
          <td> <router-link :to="{name: 'OneUser', params:{firstname:item.firstName, lastname:item.lastName, age:item.age, gender:item.gender}}">{{item.firstName}} </router-link></td>
          <td>{{item.lastName}} </td>
          <td>{{item.age}} </td>
          <td>{{item.gender}} </td>
          <td> <button class="btn btn-info" @click="editUser(item)"> Edit</button></td>
        </tr>
      </tbody>
      </table>
       
    </div>
  
  </template>
  
  <script>
  import {userStore} from '../store/userStore'
  import { mapState } from 'pinia'
  export default {
    
    props: ['list'],
    setup() {
    // initialize the store
        const userStoreTeste = userStore()
        return {userStoreTeste}
  },
    data() {
      return {
        catchData:[]
      }
    },
    computed:{
      ...mapState(userStore, ['getUsers']),
    },
    methods: {
      editUser(item) {
        this.userStoreTeste.update(item)
        this.$router.push({ name: 'FormUser' })
      }
    }
  }
  </script>
  
  <style >
  
  </style>