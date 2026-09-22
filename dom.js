// select an HTML element from the DOM
// save it to a local variable called heading
let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "#FF00FF";
heading.style.fontsize = "10em";
//CSS: font-size

heading.style.backgroundColor = "#03E2FE"
heading.style.border = "12px solid black"
heading.style.textDecoration = "underline wavy";

// do everything one line
document.querySelector("p").style.color = "blue";

// there are different ways to select form the DOM
document.getElementById("topics");

// you can select more than one element at a time
console.log(document.querySelectorAll(".list")[0].style);


let topicsClasslist = document.querySelector("#topics").classList;

topicsClasslist.add("special");
topicsClasslist.toggle("Special");                 


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue
})
                