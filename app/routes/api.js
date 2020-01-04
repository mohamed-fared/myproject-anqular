
var User = require("../models/user")


module.exports = function(router){

  // User resgistrtion 
  router.post("/users" , (req,res)=>{
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;

    if (req.body.username == null || req.body.username == "" || req.body.password == null || req.body.password == "" || req.body.email == null || req.body.email == "" ){
      // res.send("Ensure  usename , email , password are provieded  ")
      res.json({ success :false , message: "Ensure  usename , email , password are provieded  " })
    }else{
      user.save((err)=>{
        if(err){
          // res.send("Username or the eamil Already exist")
          res.json({ success :false , message: "Username or the eamil Already exist" })
        }else{
          // res.send("user created!")
          res.json({ success :true , message:"user created!"})
        }
      })
    }
  })
  // User login
  
  router.post("/authenticate",(req,res)=>{
    User.findOne({ username : req.body.username}).select("eamil password username ").exec((err,user)=>{
      if(err) throw err;
      
      if(!user){
        res.json({ success : false , message: ' Could not authenticate user'})
      }else if (user){
        if(req.body.password){
          var validPassword  =  user.comparePassword(req.body.password) 
        }else{
          res.json({ success : false , message: ' No password provided'})
        }
       if (!validPassword){
        res.json({ success : false , message: ' Could not authenticate password '})
         
       }else{
        res.json({ success : true , message: ' User authenticated'})
       }
      }
    })
    
  })
  return router
}

