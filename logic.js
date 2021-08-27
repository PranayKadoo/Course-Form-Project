let cname = document.getElementById("name");
let course = document.getElementById("course");
let author = document.getElementById("author");
let submit = document.getElementById("submit");

let imgarr =["pic1.png","pic2.png", "pic3.jpg", "pic4.jpg", "pic5.jpg","pic6.webp"]

submit.addEventListener("click", function(){

    let num = Math.floor(Math.random() * imgarr.length);
    console.log(num);

    let img = document.createElement("img");
    img.src = imgarr[num];
    cdata.appendChild(img);

    let para1 = document.createElement("P");
    para1.innerText = cname.value;
    cdata.appendChild(para1);

    let para2 = document.createElement("P");
    para2.innerText = course.value;
    cdata.appendChild(para2);

    let para3 = document.createElement("P");
    para3.innerText = author.value;
    cdata.appendChild(para3);
})


