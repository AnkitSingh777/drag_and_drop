var store='';
function dragStart(event){event.dataTransfer.setData("key", event.target.id);}
function ondropfun(event,val,id){
    event.preventDefault();
    let data = event.dataTransfer.getData("key");
   let img=document.createElement("img");
   img.setAttribute("src",document.getElementById(data).getAttribute('src'));
   img.setAttribute('style',document.getElementById(data).getAttribute('style'));
   event.target.appendChild(img);
   document.getElementById(id).setAttribute('style',(document.getElementById(id).getAttribute('style').substr(0,72)+"true"));
   store+=store==''?data+val:'+'+data+val;
}
function allowDrop(event){ event.preventDefault();}
function result(){
    document.getElementById("result_div").setAttribute("style","display:true");
    document.getElementById("result_div").innerHTML="RESULT::<br/><br/>"+store;
}
