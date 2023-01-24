// Intelligent Traffic Control System

const roadUsers=[];


function Register(name, phone, vehicleId){
    roadUsers.push({name, phone, vehicleId})
console.log('Welcome '+name)
}


function Control(){
    if(roadUsers.length>5){
        console.log("Use the Next Route, Congession Possible")
        console.log('\n')
    }else{
        console.log("Continue along the road")
        console.log('\n')
    }
}

function Start(user){
    Register(user.name, user.phone, user.vehicleId);
    Control();
}

Start({name:'Emmanuel Erim', phone:'09060966606', vehicleId:'323hhf'});
Start({name:'Sunday James', phone:'09060966606', vehicleId:'323hhf'});
Start({name:'Affiong David', phone:'09060966606', vehicleId:'323hhf'});
Start({name:'Eyo Etim', phone:'09060966606', vehicleId:'323hhf'});
Start({name:'Jacob Samuel', phone:'09060966606', vehicleId:'323hhf'});
Start({name:'Esther Fred', phone:'09060966606', vehicleId:'323hhf'});