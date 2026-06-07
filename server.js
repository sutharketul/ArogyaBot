const express=require("express");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/analyze",(req,res)=>{

let symptoms=req.body.symptoms.toLowerCase();

let data={

conditions:["General Health Issue"],
risk:"Normal",
doctor:"",
hospital:"",
diet:""

};


if(symptoms.includes("headache")){

data={

conditions:[
"Migraine",
"Stress",
"Dehydration"
],

risk:"Medium",

doctor:"Dr Amit Shah (Neurologist)",

hospital:"Neuro Care Hospital - 3 km",

diet:"Drink more water and take proper sleep"

};

}


else if(
symptoms.includes("bone")
||
symptoms.includes("joint")
||
symptoms.includes("leg pain")
){

data={

conditions:[
"Muscle strain",
"Bone issue"
],

risk:"Medium",

doctor:"Dr Amul Modi (Orthopedic)",

hospital:"Ortho Care Hospital - 2 km",

diet:"Take calcium rich food"

};

}


else if(
symptoms.includes("cold")
||
symptoms.includes("vomiting")
){

data={

conditions:[
"Seasonal Viral Infection",
"Cold & Flu"
],

risk:"Normal",

doctor:"Dr Raj Patel (General Physician)",

hospital:"City Hospital - 1.5 km",

diet:""

};

}


else if(
symptoms.includes("nose bleed")
||
symptoms.includes("chest pain")
){

data={

conditions:[
"Emergency symptom detected"
],

risk:"Emergency",

doctor:"Dr Neha Joshi",

hospital:"Emergency Care Center - 1 km",

diet:""

};

}


res.json(data);

});

app.listen(3000,()=>{

console.log("Server Running");
});