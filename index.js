
function hitung() {
   let tinggi1 = document.getElementById('tinggi').value;
   let berat1 = document.getElementById('berat').value;
   let bmi = berat1 / Math.pow((tinggi1/100),2);

   let bmical = (bmi.toFixed(2));

//    document.getElementById("result").innerHTML="BMI Anda Adalah " + bmical;

   let status = document.getElementById("status")
   status.innerHTML = fresult()
   
   function fresult(){
       if(bmical<18.5)
       {
           return " BMI Anda "+ bmical +", Anda Kekurangan Berat Badan"
       }
       else if(bmical>=18.5 && bmical<=24.9)
       {
           return "Berat badan Anda Normal"
       }
       else if(bmical>=25 && bmical<=29.9)
       {
           return "Anda Kelebihan Berat Badan"
       }
       else if(bmical>=30)
       {
            return "Anda obesitas"
       }
       else
       {
         return "Masukkan Berat dan Tinggi Badan Anda"
       }
   }
}

function reset(){
    document.getElementById('berat').value = "";
    document.getElementById('tinggi').value = "";
    document.getElementById('status').innerText = "";
 }
