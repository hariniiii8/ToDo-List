const express=require("express");

const app=express();
const date=require(__dirname+"/date.js");
app.set('view engine','ejs');
const bodyParser=require("body-parser");
var items=["Buy Food","Cook Food","Eat Food"];
var workitems=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.listen(3000,function()
{
  console.log("Server is running on port 3000");
});
app.get("/",function(req,res)
{
  var day=date.getDate();
res.render("list",{listtitle:day,listitem:items});
});

app.get("/about",function(req,res)
{
  res.render("about");
})


app.post("/",function(req,res)
{
  console.log(req.body);
   let item = req.body.listitem;
  if(req.body.list==="Work")
  {
  workitems.push(item);
res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }



});
app.get("/work",function(req,res)
{
  res.render("list",{listtitle:"Work Title",listitem:workitems});
});
