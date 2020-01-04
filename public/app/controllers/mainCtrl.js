angular.module("mainController" , ["authServices"])

.controller("mainCtrl", function(Auth,$timeout,$location){

    var app = this
    this.s = "sdfsdfsdf"

    this.doLogin = function(logingData){
        console.log("data")
        app.loading = true
        app.errorMsg = false ;
       console.log(this.logingData)

       Auth.login(app.logingData).then((data)=>{

           if(data.data.success){
               app.loading = false
               app.successMsg = data.data.message + "...redirecting"; 
               console.log(app.successMsg)
               $timeout(function(){
                   $location.path("/home")
               },2000)
               
           }else{

               app.errorMsg = data.data.message
               app.loading = false
           }
       });
    }

})




