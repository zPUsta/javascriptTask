// 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);)
// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.
// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h

// 4. toLocaleDateString(); ->arashdir

// 1-ci tapşırıq
// let birthday = new Date("03-28-2024");
// setInterval(() =>{
//   let now =new Date();
//   let between = now - birthday;
//   let gun = Math.trunc(between/(1000*60*60*24));
//   let saat = Math.trunc((between/(1000*60*60))%24);
//   let deqiqe = Math.trunc((between/(1000*60))%60);
//   let saniye = Math.trunc((between/1000)%60);
//   function getRandomColor(){
//     let letters= '0123456789ABCDEF';
//     let color = "#"
//     for (let i=0;i<6;i++){
//       color += letters[Math.floor(Math.random()*16)]
//     }
//     return color;
    
//   }

//   let color = getRandomColor();
//   console.log(`%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`, `color:${color}; font-size: 18px;`);
// }, 1000);


// 2-ci tapşırıq

// let students = [
//   {
//     id: 1,
//     name: "Narmin",
//     surname: "Hajiyeva",
//     mark: 98,
//   },
//   {
//     id: 2,
//     name: "Leman",
//     surname: "Mammadli",
//     mark: 45,
//   },
//   {
//     id: 3,
//     name: "Puste",
//     surname: "Zeynalova",
//     mark: 44,
//   },
//   {
//     id: 4,
//     name: "Kenan",
//     surname: "Agayev",
//     mark: 91,
//   },
// ];

// let searchWord = prompt("sözü daxil edin:")

// let filteredStudents = students.filter(student => 
//   student.name.includes(searchWord) 
// );

// if (filteredStudents.length > 0) {
//   console.log(`${searchWord} mövcuddur`);
// } else {
//   console.log(`${searchWord} tapılmadı`);
// }


// 3-cü tapşırıq
// let word = prompt("sözü daxil edin")

// for(let i=0; i<word.length * 2; i++){
//   if(i<word.length){
//      console.log(word.substring(0, i + 1));
//   }
//   else{
//     console.log(word.substring(0,word.length * 2 - i - 1))
//   }
// }