// // // console.log(document)
// // // console.log(document["all"])
// // // console.log(document.title)
// // // console.log(document.links)

// // // document.title = "Amirbek's blog"

// // // console.log(document.links)

// // // // console.dir(document.children)
// // // // console.log(document);
// // // // const signButton = document.children[0].children[1].children[0].children[1]
// // // // children[1]
// // // // console.log(signButton)
// // // // signButton.textContent = "Register"

// // // // document.getElementById("title");

// // // const myTitle = document.getElementById("title");

// // // myTitle.innerText = "Hello world"

// // // myTitle.innerHtml = "<h2>Hello</h2> <br> <br> <p>World</p>"

// // // const enterButton = document.getElementById("kirish");

// // // enterButton.innerText = "Kirish"


// // // const linklar = document.getElementsByTagName("a")

// // // console.log(linklar);

// // // linklar[0].style.color = "red"
// // // linklar[1].style.color = "green"
// // // linklar[2].style.color = "gold"

// // // if (!confirm("Linklarni chizig'i bo'lsinmi")) {
// // //     for (let i = 0; i < linklar.length; i++) {
// // //       linklar[i].style.textDecoration = "none"
// // //     }
// // // }

// // //  Document Object Modal = Dom == Html faylning object ko'rinishi
// // // document
// // // Selectorlar
// // // document.getElementaryById("hello")

// // // const btn = document.querySelector("button");

// // const btn = document.querySelector(".signin-btn");

// // const menu1 = document.querySelector(".menu");

// // function counter() {
// //   const box = document.querySelector(".section1")

// //   box.style.backgroundColor = "lime"
// //   box.style.borderWidth = "10px"
// // }

// // const myBox = document.querySelector(".square")

// // // myBox.addEventListener("mouseover", function() {
// // //   myBox.style.backgroundColor = "yellow"
// // // }
// // // )



// // // const myBox = document.querySelector(".square")

// // // myBox.addEventListener("mouseover", function(){
// // //   myBox.style.backgroundColor = "yellow"
// // // }
// // // )

// // // myBox.addEventListener("mouseout", function(){
// // //   myBox.style.backgroundColor = "transparent"
// // // }
// // // )

// // btn.addEventListener("mouseup", function(){
// //   const box = document.querySelector(".square")
// //   myBox.style.display = "none"
// //   // myBox.style.backgroundColor = "lime"
// //   // myBox.style.borderWidth = "10px"
// // }
// // )



// // // menu1.addEventListener("mouseup", function(){
// // //   const box = document.querySelector(".menu")
// // //   myBox.style.display = "none"
// // //   menu1.style.backgroundColor = "lime"
// // //   menu1.style.textDecoration= "none"
// // //   myBox.style.borderWidth = "10px"
// // // }
// // // )

// // // menu1.addEventListener("mouseup", function(){
// // //   menu1.style.backgroundColor = "transparent"

// // // }
// // // )
// // const linklar = document.querySelectorAll("a");

// // linklar.forEach((link)=>{
// //   link.addEventListener("mouseup", ()=>{
// //     link.style.color = "red"
// //     link.style.textDecoration = "none"
// //   })
// // })


// // // const squ = document.querySelectorAll(".square");

// // // squ.forEach((link)=>{
// // //   squ.addEventListener("mouseup", ()=>{
// // //     link.style.color = "red"
// // //     link.style.textDecoration = "none"
// // //   })
// // // })

// // // myBox.addEventListener("mouseover", function() {
// // //   myBox.style.backgroundColor = "yellow"
// // // }
// // // )



// // const squ = document.querySelector(".squ")

// // squ.addEventListener("mouseover", function(){
// //   squ.style.backgroundColor = "yellow"
// //   squ.textContent
// // }
// // )

// // squ.addEventListener("mouseout", function(){
// //   squ.style.backgroundColor = "transparent"
// // }
// // )

// // squ.forEach((squ)=>{
// //    squ.addEventListener("click", ()=>{
  
// //     let red = Math.floor(Math.random() * 255);
// //     let green = Math.floor(Math.random() * 255);
// //     let blue = Math.floor(Math.random() * 255);

// //     squ.style.backgroundColor = 'rgb(${red}, ${green}, ${blue})'
// //     squ.style.textContent = 'rgb(${red}, ${green}, ${blue})'
// //   })
// // })

// // // const square = document.querySelector(".square")

// // // square.addEventListener("mouseover", function(){
// // //   square.style.backgroundColor = "yellow"
// // // }
// // // )

// // // square.addEventListener("mouseout", function(){
// // //   square.style.backgroundColor = "transparent"
// // // }
// // // )

// // // const boxlar = document.querySelectorAll(".square");

// // // boxlar.forEach((boxlar)=>{
// // //   boxlar.addEventListener("click", ()=>{
// // //     boxlar.style.backgroundColor = "gold"
// // //   })
// // // });
// // const boxlar = document.querySelectorAll(".square");

// // boxlar.forEach((boxlar)=>{
// //   boxlar.addEventListener("click", ()=>{
  
// //     let red = Math.floor(Math.random() * 255);
// //     let green = Math.floor(Math.random() * 255);
// //     let blue = Math.floor(Math.random() * 255);

// //     boxlar.style.backgroundColor = 'rgb(${red}, ${green}, ${blue})'

// //   })
// // })
// // // square.addEventListener("mouseover", function(){
// // //   square.style.backgroundColor = "yellow"
// // // }
// // // )

// // // square.addEventListener("mouseout", function(){
// // //   square.style.backgroundColor = "transparent"
// // // }
// // // )

// // // const boxlar = document.querySelectorAll(".square");

// // // boxlar.forEach((boxlar)=>{
// // //   boxlar.addEventListener("click", ()=>{
// // //     boxlar.style.backgroundColor = "gold"
// // //   })
// // // });
// // const boxlar = document.querySelectorAll(".square");

// // boxlar.forEach((boxlar)=>{
// //   boxlar.addEventListener("click", ()=>{
  
// //     let red = Math.floor(Math.random() * 255);
// //     let green = Math.floor(Math.random() * 255);
// //     let blue = Math.floor(Math.random() * 255);

// //     boxlar.style.backgroundColor = 'rgb(${red}, ${green}, ${blue})'

// //   })
// // })

// let counter = 0;

// const counter1 = document.getElementById('counter-1');
// const pilusBtn = document.getElementById('pilus-btn');
// const minusBtn = document.getElementById('minus-btn');
// const resetBtn = document.querySelector('#reset');


// pilusBtn.addEventListener('click', () => {
//     counter++;
//     counter1.innerHTML = counter;
// });


// minusBtn.addEventListener('click', () => {
//     counter--;
//     counter1.innerHTML = counter;
// });


// resetBtn.addEventListener('click', reset);

// function reset() {
//     counter = 0;
//     counter1.innerHTML = counter;
// }

// pilusBtn.addEventListener("click", ()=>{
//   console.log("+")
// })

// minusBtn.addEventListener("click", ()=>{
//   console.log("-")
// })

// resetBtn.addEventListener("click", ()=>{
//   console.log("Reset")
// })

// function changeColor() {
//   if (son > 0) {
//       counter.style.color = "lime"
//   } else if (son < 0) {
//       counter.style.color = "tomato"
//   } else {
//       counter.style.color = "darkgray"
//   }
// }

// Ismlar ro'yxatini yaratamiz
const names = ["Amirbek", "Jasur", "Sardor",  "Ali",];

// Tasodifiy ismni chiqaradigan funksiya
function getRandomName() {
  const random = Math.floor(Math.random() * names.length)
  return names[random];
}

// Tugmaga bosilganda ishlaydigan funksiya
document.getElementById("generate-btn").addEventListener("click", function() {
  // Tasodifiy ismni olamiz
  const randomName = getRandomName();

  // Natijani ekranga chiqaramiz
  document.getElementById("random-name").textContent = randomName;
});
