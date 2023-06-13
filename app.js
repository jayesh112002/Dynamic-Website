const express = require("express");
const hbs = require("hbs")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const routes = require('./src/routes/main')
const Detail =  require("./src/models/Detail")
const Slider = require("./src/models/slider")
const Service = require("./src/models/Service")

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)
 

//(template engine)

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")
mongoose.set('strictQuery', false);
+
//db connection
// mongoose.connect("mongodb://localhost/practise", (err) => {
//     if (err) {
//         console.error("Error connecting to the database:", err);
//     } else {
//         console.log("Database connected successfully");
//         // Your additional code here
//     }
// });

// 
mongoose.connect('mongodb://127.0.0.1:27017/practise').
  catch(error => handleError(error));

// Or:
// try {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
// } catch (error) {
//   handleError(error);
// }
  

    //  
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Courses',
    //         description:'we provide courses that helps our students in learning and in placement',
    //         linkText1:'https://www.wikipedia.com',
    //         link1:'Check',
    //         linkText2:'https://www.wikipedia.com',
    //         link2:'Support'
    //     },
    //     {
    //         icon:'fab fa-affiliatetheme',
    //         title:'Learn Projects',
    //         description:'we provide courses that helps our students in learning and in placement',
    //         linkText1:'https://www.wikipedia.com',
    //         link1:'Learn',
    //         linkText2:'https://www.wikipedia.com',
    //         link2:'Support'
    //     },
    //     {
    //         icon:'fab fa-affiliatetheme',
    //         title:'Learn Projects',
    //         description:'we provide courses that helps our students in learning and in placement',
    //         linkText1:'https://www.wikipedia.com',
    //         link1:'Learn',
    //         linkText2:'https://www.wikipedia.com',
    //         link2:'Support'
    //     }
    // ])

    // 
    //     {
    //         title:'Hello Welcome',
    //         subTitle:'Hey This Is First Slide',
    //         imageUrl:"/static/images/s1.jpg"
    //     },
    //     {
    //         title:'Second Slide',
    //         subTitle:'Hey This Is Second Slide',
    //         imageUrl:"/static/images/s2.png"
    //     },
    //     {
    //         title:'Third Slide',
    //         subTitle:'Hey This Is Third Slide',
    //         imageUrl:"/static/images/s3.jpg"
    //     }
    // ])

//    Detail.create({
//     brandName:"Website",
//     brandIconUrl:"https://yt3.ggpht.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s176-c-k-c0x00ffffff-no-rj", alt:"" ,width:"40" ,height:"40", style:"border-radius:50%;" ,class :"d-inline-block align-text-top",
//     links:[
//         {
//             label:"Home",
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/services"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//             label:"About",
//             url:"/about"
//         },
//         {
//             label:"Contact Us",
//             url:"/contact-us"
//         },
//     ]
//    })




app.listen(process.env.PORT||5556,()=>{
    console.log("server started")
})