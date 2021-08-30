//this file hosts user related function such as login, logout, register, etc.

exports.login = function(){

}

exports.loginpage = function(req, res){
    res.render('login')
}

exports.logout = function(){
    
}

exports.register = function(req, res){
    res.render('register')
}

exports.home = function(req, res){
    res.render('landing')
}