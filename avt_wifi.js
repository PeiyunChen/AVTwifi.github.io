function updateQRCode() {
    
   var ssid = document.getElementById("ssid").value;
   //console.log("hi");
   var pw = document.getElementById("password").value;
   var enc = document.getElementById("enc").value;
   var hidden = document.getElementById("hidden").checked;
   var qrcode = document.getElementById("qrcode");
   
   console.log(pw + "\n");
   console.log(enc + "\n");
   console.log(hidden + "\n");
   //console.log(qrcode + "\n");
   var text = "WIFI:S:" + ssid + ";T:" + enc + ";P:" + pw + ";H:" + hidden + ";;";
   
   var text1 = "WIFI:S:Xiaomi_PC16u;T:WPA;P:shuhuilu;H:false;;";
   var date = new Date();
   console.log(date.getDate());
   qrcode.replaceChild(showQRCode(text), qrcode.lastChild);
}

document.getElementById("form").onchange = updateQRCode;
//updateQRCode();