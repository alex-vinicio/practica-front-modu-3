window.addEventListener('DOMContentLoaded', (e)=>{
    // var input  = document.getElementById('inputButton');

    // input.addEventListener('change', (e)=>{
    //     document.getElementById('div-log').innerHTML = e.target.value;
    // })

    var person = newperson("pablo");
    person.printName();
})

class Person {
    
     constructor(name){
        this.name = name;
        
    }

    printName(){
        console.log('Person constructor', name);
    }
}

function numeroParInpar(inicio, fin){
    for (let index = inicio; index < fin; index++) {
        if(index%2 == 0){
            console.log(index + " es par");
        }else{
            console.log(index + " es impar");
        }
        
    }
}

function removeAllHTML(){
    document.body.innerHTML = "";
}

//fucion callback
// window.addEventListener('load', function(e){
//     alert("hola!");
// })

// window.addEventListener('DOMContentLoaded', (e)=>{
//     //alert("hola!");
//     alert();
// })

