pizzeria_array=[];
function submit(){
    var pizzeria_1=document.getElementById("pizzeria_1").value ;
    var pizzeria_2=document.getElementById("pizzeria_2").value ;
    var pizzeria_3=document.getElementById("pizzeria_3").value ;
    var pizzeria_4=document.getElementById("pizzeria_4").value ;
    var pizzeria_5=document.getElementById("pizzeria_5").value ;
pizzeria_array.push(pizzeria_1);
pizzeria_array.push(pizzeria_2);
pizzeria_array.push(pizzeria_3);
pizzeria_array.push(pizzeria_4);
pizzeria_array.push(pizzeria_5);
document.getElementById("ans").innerHTML=pizzeria_array;
}