student_array=[];
function submit(){
    var name_1=document.getElementById("student_1").value ;
    var name_2=document.getElementById("student_2").value ;
    var name_3=document.getElementById("student_3").value ;
    var name_4=document.getElementById("student_4").value ;
    var name_5=document.getElementById("student_5").value ;
student_array.push(name_1);
student_array.push(name_2);
student_array.push(name_3);
student_array.push(name_4);
student_array.push(name_5);
document.getElementById("ans").innerHTML=student_array;
}