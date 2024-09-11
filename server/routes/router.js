const express = require("express");
const router = express.Router();
const users = require("../models/schema.js");


// router.get("/",(req, res)=>{
//     console.log("Connect");
// });

///// <<<<<<------------- ADD USER ->>>>>>>>>>>>>>

router.post("/register", async(req, res)=>{
    // console.log(req.body);
    const {name, email, age, mobile, work, address, desc} = req.body;

    if(!name || !email || !age || !mobile || !work || !address || !desc)
    {
        res.status(422).json("Please fill the data");
    }

    try {
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser)  // if user is already present 
        {
            res.status(422).json("This user is already present");
        }
        else
        {
            const adduser = new users({
                name, email, age, mobile, work, address, desc
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
    } 
    catch (error) {
        res.status(422).json(error);
    }
});



// <<<<<<<<<<<<<------ GET USER ---------->>>>>>>>>>>
router.get("/getdata", async(req,res)=>{
    try{
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    }
    catch(error){
        res.status(422).json(error);
    }
})


////  <<<<<<---- Get Indivisual User ---->>>>>>

router.get("/getuser/:id", async(req, res)=>{
    try{
        console.log(req.params);
        const {id} = req.params;
        const userindivisual = await users.findById({_id:id});
        console.log(userindivisual);
        res.status(201).json(userindivisual);
    }
    catch(error){
        res.status(422).json(error);
    }
});

//////  <<<<<------ Update User data  ---->>>>>>>

router.patch("/updateuser/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const updateduser = await users.findByIdAndUpdate(id, req.body,{
            new: true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);
    }
    catch(error){
        res.status(422).json(error);
    }
})


// ------>>>>> delete User   ---->>>> 
router.delete("/deleteuser/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const deletuser = await users.findByIdAndDelete({_id:id})

        console.log(deletuser);
        res.status(201).json(deletuser);
    }
    catch(error){
        res.status(422).json(error);
    }
})

module.exports = router;