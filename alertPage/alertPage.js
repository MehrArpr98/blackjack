var str = sessionStorage.getItem("str");
var array = str.split('.');


if(array.length == 1){
    document.getElementById('h5').innerHTML=array[0]+".";
    document.getElementsByTagName('li')[0].style.display="none";
    document.getElementsByTagName('li')[1].style.display="none";
}else if(array.length == 2){
    document.getElementById('li1').innerHTML=array[0]+".";
    document.getElementById('h5').innerHTML=array[1]+".";
    document.getElementsByTagName('li')[1].style.display="none";

}else {
    document.getElementById('li1').innerHTML=array[0]+".";
    document.getElementById('li2').innerHTML=array[1]+".";
    document.getElementById('h5').innerHTML=array[2]+".";

}
