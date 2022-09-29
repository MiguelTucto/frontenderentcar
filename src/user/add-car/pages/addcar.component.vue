<template>
    <NavbarComponent />
    <h1 class = "title">Add a car</h1>
    <div class="container-add-car">
        <form>
            <div class = container-cars-items>
                <div>
                    <label for="">Address: </label>
                    <input type="text">
                    <label for="">Brand: </label>
                    <input type="text">
                    <label for="">Year: </label>
                    <input type="number">
                    <label for="">Model: </label>
                    <input type="text">
                    <label for="">Milage: </label>
                    <input type="number">
                    <label for="">Seating: </label>
                    <input type="number">
                    <label for="">Manual: </label>
                    <input type="text">
                </div>
                <div>
                    <label for="">Value in dollars: </label>
                    <input type="number">
                    <label for="">Extra information: </label>
                    <input type="text">
                    <label for="">Rate: </label>
                    <input type="number">
                    <label for="">Amount day: </label>
                    <input type="number">
                    <label for="">URL: </label>
                    <input type="text">
                    <label for="">Category: </label>
                    <input type="text">
                    <label for="">Mechanic conditions: </label>
                    <input type="text">
                </div>
            </div>
            <div class="container-button">
                <input class = "button" type="submit" value = "Send">
            </div>
        </form>
    </div>
</template>
<script>
import NavbarComponent from "../../../components/navbar.component.vue";
export default{
    name: "addcar.component",
    components:{
        NavbarComponent
    }   ,
    data(){
        return{

        }
    }
}

</script>
<style>
.title{
    text-align: center;
}
.container-add-car{
    display: flex;
    justify-content: center;
    height: 100vh;
}
form{
    width: 500px;
    height: 440px;
    padding: 10px;
    margin-top: 10px;
}
label{
    display: block;
}
input{
    border: 2px solid #DDDFE2;
    border-radius: 4px;
    outline: none;
}
input:focus{
    border: 2px solid #1266F1;
}
.container-cars-items{
    display: flex;
    justify-content: space-between;
}
.container-button{
    display: flex;
    justify-content: center;
    width: 100%;
}
.button{
    margin-top: 10px;
    padding: 10px;
    width:200px;
    color: white;
    border: none;
    font-weight: bold;
    background-color: #1266F1;
}

</style>