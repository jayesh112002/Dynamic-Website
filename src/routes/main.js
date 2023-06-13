const express = require('express')
const { route } = require('express/lib/application');
const async = require('hbs/lib/async');
const Contact =require("../models/Contact");
const Detail = require("../models/Detail");
const Service = require('../models/Service');
const slider = require('../models/slider');


const routes = express.Router()
routes.get("/", async (req,res)=>{

    const details = await Detail.findOne({"_id":"638de714b4f10fd5001c2795"})
    const slides = await slider.find()
    const services = await Service.find()


    //console.log(slides)
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    });
});

routes.get('/gallery',async (req,res) =>{
    const details = await Detail.findOne({"_id":"638de714b4f10fd5001c2795"})
    res.render("gallery",{
        details:details
    });
});
   //process contact form
routes.post("/process-contact-form", async(request,response)=>{
    console.log("form is submitted")
    console.log(request.body);
    //save the data to Db
    try{
        const data=  await Contact.create(request.body)
        console.log(data)
        response.redirect("/") 
    }
    catch(e){
        console.log(e)
        response.redirect("/")
    }
})

module.exports=routes