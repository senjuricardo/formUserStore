<template>
    <div class="flex ">
        <div class="p-2 ">
            <form class="p-5 border border-primary" @submit.prevent="sendUser($event)" @reset="resertForm">

                <div class="form-group p-2">
                    <input class="form-control" type="text" id="fname" ref="firstName" name="fname"
                        placeholder="First name" v-model="createUser.firstName">
                    <div v-if="formUser.firstNameError" class="errors">first name is missing</div>
                </div>

                <div class="form-group p-2">
                    <input class="form-control" type="text" id="lname" ref="lastName" name="lname"
                        placeholder="Last name" v-model="createUser.lastName">
                    <div v-if="formUser.lastNameError" class="errors">Last name is missing</div>
                </div>

                <div class="form-group p-2">
                    <input class="form-control" type="number" id="age" ref="age" name="age" placeholder="Age"
                        v-model="createUser.age">
                    <div v-if="formUser.ageError" class="errors">age is missing</div>
                </div>

                <div class="form-group p-2 form-control ">
                    <label for="">Select your gender</label>
                    <br>
                    <br>
                    <div>
                        <input class="form-check-input" type="radio" id="one" value="Male"
                            v-model="createUser.gender" />
                        <label class="form-check-label " for="one">Male</label>
                    </div>
                    <div>
                        <input class="form-check-input" type="radio" id="two" value="Female"
                            v-model="createUser.gender" />
                        <label class="form-check-label" for="two">Female</label>
                    </div>
                </div>
                <div v-if="formUser.genderError" class="errors">gender is missing</div>
                <input  class="btn btn-primary m-2" type="submit" :value="changeTitleButoon">
                <input class="btn btn-danger" type="reset" value="Clean">
            </form>
        </div>
        <div>
           
        </div>
    </div>


</template>

<script>
import User from '../models/User'
import Users from './Users.vue'
import isEmptyValue from './../validators/public/isEmptyValue'
import {userStore} from '../store/userStore'
import { mapActions } from 'pinia'

export default {
    setup() {
    // initialize the store
    const userStoreTeste = userStore()
    return {userStoreTeste}
  },
    data() {
        return {
            isEmpty: this.userStoreTeste.getUserEdit,
            buttonTile: 'Send',
            editUserID: -1,
            isUpdate: false,
            createUser: this.userStoreTeste.getUserEdit? this.userStoreTeste.getUserEdit : new User(),
            formUser: {
                firstNameError: false,
                lastNameError: false,
                ageError: false,
                genderError: false
            }
        };
    },
    watch: {
        'createUser.firstName': function () {
            if (isEmptyValue.exec(this.createUser.firstName))
                this.formUser.firstNameError = true
            else
                this.formUser.firstNameError = false
        },
        'createUser.lastName': function () {
            if (isEmptyValue.exec(this.createUser.lastName))
                this.formUser.lastNameError = true
            else
                this.formUser.lastNameError = false
        },
        'createUser.age': function () {
            if (isEmptyValue.exec(this.createUser.age))
                this.formUser.ageError = true
            else
                this.formUser.ageError = false
        },
        'createUser.gender': function () {
            if (isEmptyValue.exec(this.createUser.gender))
                this.formUser.genderError = true
            else
                this.formUser.genderError = false
        },
    },
    computed: {
        getUsers(){
            return this.userStoreTeste.getUsers
        },
        changeTitleButoon(){
            return this.createUser.id ? 'Update' :'Send'
        }
    },
    methods: {
        sendUser(e) {
            Object.entries(this.createUser).forEach(user => {
                const [key, value] = user
                if (isEmptyValue.exec(value) && key != 'id')
                    this.formUser[`${key}Error`] = true
            });
            if (Object.values(this.formUser).some(value => value == true))
                return
                
                if(this.createUser.id){
                this.userStoreTeste.update(this.createUser)
                this.resertForm()
                }
                else{
                    this.userStoreTeste.add(this.createUser)
                this.resertForm()
                }
                
          
        },
        resertForm() {
            this.createUser = new User();
            this.userStoreTeste.cleanUserForm()
                this.formUser.firstNameError= false;
                this.formUser.lastNameError= false;
                this.formUser.ageError= false;
                this.formUser.genderError= false
            this.formUser = {}

        },
        updateUser(item) {
            this.createUser = item
        }
    },
    
}
</script>

<style>
.flex {
    display: flex;
    gap: 40px;
    margin-top: 30px;
}
</style>