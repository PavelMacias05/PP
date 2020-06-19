const  bcrypt = require('bcrypt');
class Router{
    constructor(app,db){
        this.login (app,db)
        this.singup (app,db)
        this.logout(app,db)
        this.isLoggedIn(app,db)
    }
    login(app,db){
        app.post('/login',(req,res)=>{
            let username = req.body.username
            let password = req.body.password
            let cols = [username];
            db.query('SELECT* FROM userdd WHERE username = ? LIMIT 1',cols,(err,data,fields)=>{
                if(err){
                    res.json({
                        succes:false,
                        msg:"Error has occured"
                    })
                    return false
                }
                if(data && data.length === 1){
                    console.log(data)
                }
            })
        })

    }
    singup(app,db){
        app.post('/singup',(req,res)=>{
            let phone = req.body.phone
            let email = req.body.email
            let password = bcrypt.hashSync(req.body.password,9);
            let name = req.body.name
            let lastname = req.body.lastname
    
        })


    }
    logout(app,db){

    }
    isLoggedIn(app,db){}

}
module.exports = Router