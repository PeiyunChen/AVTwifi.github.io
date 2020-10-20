function updateQRCode() {
    
   var ssid = document.getElementById("ssid").value;
   //console.log("hi");
   var pw = document.getElementById("password").value;
   var enc = document.getElementById("enc").value;
   //var hidden = document.getElementById("hidden").checked;
   var qrcode = document.getElementById("qrcode");
   
   //console.log(pw + "\n");
   //console.log(enc + "\n");
   //console.log(hidden + "\n");
   //console.log(qrcode + "\n");
   //var text = "WIFI:S:" + ssid + ";T:" + enc + ";P:" + pw + ";H:" + hidden + ";;";
   
   var text1 = "WIFI:S:Xiaomi_PC16u;T:WPA;P:shuhuilu;H:false;;";
   var text2 = "WIFI:S:" + ssid + ";T:" + enc + ";P:" + pw + ";;";
   var date = new Date();
   var a = localStorage.setItem("text",text2);
   //console.log(date.getDate());
   qrcode.replaceChild(showQRCode(text2), qrcode.lastChild);

}

function changewindow(){
   window.location.href = "wifi.html";
}

document.getElementById("form").onchange = updateQRCode;
//var a  = localStorage.getItem("page");
//console.log(a)
//updateQRCode();