async function sendMessage(){

const input=document.getElementById("symptoms");

const text=input.value.trim();

if(text==="") return;

const chatBox=document.getElementById("chatBox");

chatBox.innerHTML+=`

<div class="userMessage">

${text}

</div>

`;

chatBox.innerHTML+=`

<div class="botMessage" id="loading">

Analyzing...

</div>

`;

chatBox.scrollTop=chatBox.scrollHeight;

const response=await fetch("/analyze",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
symptoms:text
})

});

const data=await response.json();

document.getElementById(
"loading"
).remove();

document.getElementById(
"condition"
).innerHTML=
data.conditions.join("<br>");

document.getElementById(
"risk"
).innerHTML=
data.risk;

document.getElementById(
"doctor"
).innerHTML=
data.doctor+"<br><br>"+data.hospital;


chatBox.innerHTML+=`

<div class="botMessage">

<b>Possible Conditions:</b><br>

${data.conditions.join(", ")}

<br><br>

<b>Risk:</b><br>

${data.risk}

<br><br>

<b>Doctor:</b><br>

${data.doctor}

<br><br>

<b>Hospital:</b><br>

${data.hospital}

${data.diet?`<br><br><b>Diet:</b><br>${data.diet}`:""}

</div>

`;

chatBox.scrollTop=chatBox.scrollHeight;

input.value="";

}