var arr=['images/banner1.jfif','images/banner2.jfif','images/banner3.jfif']
var i=0
function slider(){
document.getElementById("myimage").src=arr[i]
i++
if(i>2)
{
     i=0
}
}
setInterval(slider,1000);
