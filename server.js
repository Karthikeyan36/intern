var express=require('express');
var app=express();
var server = app.listen(8000,function() {
    var host=server.address().addres
    var port=server.address().port
    console.log("Example app listening at http://%s:%s",host,port)

}); 
app.get('/Bikesbrand/:name',function(req,res){
    var name=req.params.name;
       var output;
    console.log(name);
    if (name==r){
        output=name+"student";
    }
    else{
        output=name+"unknown";
    } 
    res.end(JSON.stringify(output));
});
