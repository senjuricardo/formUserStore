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
      <tr  v-for="(item,idx) in list">
        <td>{{item.firstName}} </td>
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
export default {
  props: ['list'],
  setup() {
    return {}
  },
  methods: {
    editUser(item) {
      this.$emit('updateUser', item)
    }

  }
}
</script>

<style >

</style>