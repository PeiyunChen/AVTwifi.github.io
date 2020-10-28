var wifi_password;
var date = new Date();
var today_month = date.getMonth();
var today_date = date.getDate();

async function getData(){
   const response = await fetch('Wifi_Password.csv');
   const data = await response.text();
   //console.log(data['Start Date']);
   //console.log(data);
   const rows = data.split('\n');
   //console.log(rows);
   rows.forEach(elt => {
      const row = elt.split(',');
      
      const start_date_full = row[1];
      const end_date_full = row[5];
      //console.log(row[1]);
      const start_year = start_date_full.slice(0,4);
      const start_month = start_date_full.slice(5,7);
      const start_date = start_date_full.slice(8,10);
      const end_year = end_date_full.slice(0,4);
      const end_month = end_date_full.slice(5,7);
      const end_date = end_date_full.slice(8,10);
      if(today_month+1>= start_month && today_month+1<=end_month){
         if(today_date >= start_date && today_date<= end_date){
            console.log(today_month);
            console.log(today_date);
            console.log(start_month);
            console.log(start_date);
            wifi_password = row[8];
            console.log(wifi_password);
            console.log("success");
         }
            
      }
      
   });
   updateQRCode();


}

async function updateQRCode() {
    
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
   var text_with_csv = "WIFI:S:vw-guest;T:WPA;P:"+wifi_password+";H:false;;";
   
   var a = localStorage.setItem("text",text2);
   //console.log(date.getMonth());
   //console.log(date.getDate());
   //console.log(date.getUTCMonth());
   //console.log(date.getFullYear());   

   qrcode.replaceChild(showQRCode(text_with_csv), qrcode.lastChild);
   console.log(text_with_csv);


}



function changewindow(){
   window.location.href = "wifi.html";
}
/*
function readTextFile(file)
{
   const fs = require('fs') 
  
   fs.readFile('code.txt', (err, data) => { 
       if (err) throw err; 
     
       console.log(data.toString()); 
   }) ;
}
*/
//document.getElementById("form").onchange = updateQRCode;

getData();
//updateQRCode();
//readTextFile();
//var a  = localStorage.getItem("page");
//console.log(a)
//updateQRCode();