window.onload = function(){  
   // Rewrite footer
   let copyright = document.getElementsByClassName("copyright");
   copyright[0].prepend("© UoL Taiwan ");

   // School starts
   let school_starts = document.getElementById("school_starts");
   school_starts.innerText = "2022/04/04";

   // Calcuate week number
   let ss_dateObj = new Date("04/04/2022");

   let today_date = new Date();

   let diff = (today_date.getTime() - ss_dateObj.getTime() )/(1000*60*60*24);

   let weekCount = Math.floor(diff/7).toString();

   let weekNum = document.getElementById("weekNum");
   weekNum.innerText = weekCount;

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