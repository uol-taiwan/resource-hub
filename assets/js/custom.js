window.onload = function(){  
   // Fetch School Key Days
   const url = "https://uol-tw.azurewebsites.net/api/skd";

   fetch(url).then((response)=>{ 
      let res = response.json;
      res.dates.forEach(d => {
         console.log(d);
      });
   }).catch((err)=>{
      if (err)
         console.log("Something went wrong...");
   });
   
   const SCHOOL_START_DATE = "2022/04/04";

   // Rewrite footer
   let copyright = document.getElementsByClassName("copyright");
   copyright[0].prepend("© UoL Taiwan ");

   // School starts
   let school_starts = document.getElementById("school_starts");
   if (school_starts != null) 
      school_starts.innerText = SCHOOL_START_DATE;


   // Calcuate week number
   let ss_dateObj = new Date("04/04/2022");
   let today_date = new Date();
   let diff = (today_date.getTime() - ss_dateObj.getTime() )/(1000*60*60*24);
   let weekCount = Math.ceil(diff/7).toString();

   let weekString = document.getElementById("weekNum");
   if (weekCount < 1) {
      weekString.innerText = `未開學，開學日：${SCHOOL_START_DATE}`;
   } else {
      weekString.innerHTML = `為學期第<b style="color:salmon;">${weekCount}</b>週`;
   }



   // TO-DO: Add comments dynamically
   // let comments = [];
   // // 222
   // comments.push({
   //    module: "ipt1",
   //    name: "Chris",
   //    content: "comment 1",
   //    date: "03/30/2022"
   // });

   // comments.push({
   //    module: "dm",
   //    name: "Chris",
   //    content: "comment 2",
   //    date: "03/30/2022"
   // });



}  