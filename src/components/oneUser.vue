<template>
    <div>
       
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{$route.params.firstname}}</li>
                <li class="list-group-item">{{$route.params.lastname}}</li>
                <li class="list-group-item">{{$route.params.age}}</li>
                <li class="list-group-item">{{$route.params.gender}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>