/* Problem - 01  Divide the Asset 

রহিম করিম ২ ভাই।  তাদের বাবার একটা জমি আছে  যার ক্ষেত্রফল  area নামে একটা ভ্যারিয়েবলে সেভ করা আছে।  তাদের বাবা তাদের কে সমান  ২  ভাগে সম্পত্তি ভাগ করে দিতে চান। এখন ২ জন ঠিক কতটুকু জমি পাবে সেটা প্রোগ্রাম করে বের করো।

*/

/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var areaResult = area / 2;
console.log(areaResult);


/* Problem - 02  Cycle or  Laptop

মন্টূ  SSC পরীক্ষায় GPA 5 পেয়েছে ।  সে তার বাবার কাছে বায়না ধরেছে যে তাকে Cycle কিনে দিতে হবে কিংবা Laptop কিনে দিতে হবে।  মন্টুর বাবার  কাছে  যত টাকা আছে সেটা money নামে একটা ভ্যারিয়েবলে সেইভ করা আছে।  মন্টুর বাবা কিছু শর্তের ভিত্তি তে সিদ্ধান্ত নিবেন যে মন্টু কে কি কিনে দিবেন। 
মন্টুর বাবার টাকা 25000 কিংবা তার থেকে বেশি  থাকলে Laptop কিনে দিবেন। 
মন্টুর বাবার টাকা 10000 কিংবা তার থেকে বেশি  থাকলে Cycle কিনে দিবেন। 
এরথেকে কম থাকলে মন্টু কে স্বান্তনা পুরষ্কার হিসেবে Chocolate কিনে দিবেন। 
এখন মন্টুর বাবার জন্য একটা প্রোগ্রাম লিখে দাও এবং মন্টু কি পাবে সেটা আউটপুট হিসেবে দেখাও

*/

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}


/* Problem 03 - Medicine Planner 

মাসের ১ তারিখে রহিমা বেগম কে ডাক্তার কিছু ঔষধ দিয়েছেন  যেটা ঠিক ৩  দিন পর পর খেতে হবে। রহিমা বেগম কে যতদিন ঔষধ খেতে হবে সেটা lastDay নামে একটা ভ্যারিয়েবলে সেইভ করা আছে। 
রহিমা বেগম কোন কোন দিন ঔষধ খাবে এবং কোন কোন দিন ঔষধ খাবেনা  তার একটা লিস্ট তোমাকে প্রোগ্রামিং করে বানিয়ে দিতে হবে।

*/

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(`${i} - medicine`);
  } else {
    console.log(`${i} - rest`);
  }
}


/* Problem 04 - Delete / Store

সুমনার পিসি তে অনেক অনেক ফাইল জমে গেছে। সুমনা pdf , docx ফাইল গুলো এবং যেসব ফাইলের নামের প্রথমে # আছে সেগুলো ছাড়া বাকী ফাইল  গুলো কে ডিলিট করে  দিতে চায়।  ফাইল এর  নাম fileName নামক ভ্যারিয়েবলে স্টোর করা আছে।   সুমনার জন্য একটা প্রোগ্রাম লিখে দাও  যেটা সুমনা কে নির্দেশনা দিবে ফাইল টি সে রাখবে না ডিলিট করবে। 
ফাইলের নামের প্রথমে # থাকলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store" 
ফাইল টা pdf হলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store" 
ফাইল টা docx হলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store"
এর বাইরে অন্য সব কিছুর জন্য output দেখাবে  "Delete"

*/

/** Problem 04 - (Delete / Store) */
var fileName = "result.pdf";
//write your code here
var pdf = fileName.slice(-4);
var docx = fileName.slice(-5);
if (
  fileName[0].includes("#") ||
  pdf.includes(".pdf") ||
  docx.includes(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}


/* Problem 05 - PH Email Generator

{ name: string , roll: number ,department: string  }


উপরের অব্জেক্ট এর Structure টি লক্ষ্য করো।  ph university তে  পড়া student এর Data   student  নামের একটা ভ্যারিয়েবলে সেইভ করা আছে  ।  তোমাকে এমন একটা প্রোগ্রাম লিখতে হবে যেটা   student  অব্জেক্ট এর ডাটা এর উপর ভিত্তি করে  একটা ইমেইল  জেনারেট করে দেবে। ইমেইল টা হবে ঠিক নিচের স্ট্রাকচারে 
name roll . department @ph.ac.bd

*/


/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
var studentName = student.name.toLocaleLowerCase();
var studentDepartment = student.department.toLocaleLowerCase();
console.log(`${studentName}${student.roll}.${studentDepartment}@ph.ac.bd`);


/* Problem 06 :  Current Salary ( Challenge Problem ) 

হাসান সাহেব সরকারী চাকুরী করেন ।  তিনি কত বছর ধরে  চাকুরী করেন  সেটা  experience নামে একটা ভ্যারিয়েবলে Save করা আছে । হাসান সাহেবে যে salary দিয়ে জয়েন করেছেন সেটা startingSalary নামে একটা ভ্যারিয়েবলে save করা আছে। 
প্রতি বছর হাসান সাহেবের স্যালারি ৫% করে বৃদ্ধি হয় । হাসান সাহেবের বর্তমান স্যালারি  কত সেটা বের করার জন্য প্রোগ্রাম লেখো। দশমিকের পর সর্বোচ্চ ২ ডিজিট সংখ্যা থাকবে।

*/

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;
for (var i = 1; i <= experience; i++) {
  currentSalary += currentSalary * 0.05;
}
var resultSalary = currentSalary.toFixed(2);
console.log(resultSalary);
