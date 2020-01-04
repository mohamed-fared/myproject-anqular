angular.module("userControllers",["userServices"])


.controller('regCtrl', function($http ,$location,$timeout,User){

    var app = this

     this.regUser = function(regData){
         app.loading = true
         app.errorMsg = false ;
        // console.log("data submited")
        // console.log(this.regData)
       // $http.post('/api/users', this.regData)
        User.create(app.regData).then((data)=>{
          
            // console.log(data.data.success)
            // console.log(data.data.message)
            if(data.data.success){
                app.loading = false
                app.successMsg = data.data.message + "...redirecting";
                
                $timeout(function(){
                    $location.path("/login")
                },2000)
                
            }else{
                
                app.errorMsg = data.data.message
                app.loading = false
            }
        });
    }
    
})

