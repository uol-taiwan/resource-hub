window.onload = function(){  
   var SCHOOL_START_DATE = "";

   // Fetch School Key Days
   const url = "https://uol-tw.azurewebsites.net/api/skd";

   await fetch(url).then(response => response.json()) 
   .then(data => {
      data.dates.forEach(d => {
         if (d.isClosest) {
            SCHOOL_START_DATE = `${d.month} ${d.day.toString()}, ${d.year.toString()}`; 
            renderSchoolStarts(SCHOOL_START_DATE);
            renderWeekNumber(SCHOOL_START_DATE);
         }
      });
   }).catch((err)=>{
      if (err)
         console.log("Something went wrong...");
   });   


   // Rewrite footer
   let copyright = document.getElementsByClassName("copyright");
   copyright[0].prepend("© UoL Taiwan ");

   // School starts
   function renderSchoolStarts(start_date) {
      let school_starts = document.getElementById("school_starts");
      if (school_starts != null) 
         school_starts.innerText = start_date;
   }

   // Calcuate week number
   function renderWeekNumber(start_date) {
      let ss_dateObj = new Date(start_date);
      let today_date = new Date();
      let diff = (today_date.getTime() - ss_dateObj.getTime() )/(1000*60*60*24);
      let weekCount = Math.ceil(diff/7).toString();
   
      let weekString = document.getElementById("weekNum");
      if (weekString != null) {
         if (weekCount < 1) {
            weekString.innerText = `未開學，開學日：${start_date}`;
         } else {
            weekString.innerHTML = `為學期第<b style="color:salmon;">${weekCount}</b>週`;
         }
      }
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