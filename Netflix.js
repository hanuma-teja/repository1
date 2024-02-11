let cont2 = document.getElementById("cont2");
let cont3 = document.getElementById("cont3");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let val1 = true;
let val2 = true;

let context1 = document.getElementById("nothing");
let context2 = document.getElementById("nothing");

btn1.onclick = function() {
    if (val1 === true) {
        cont2.classList.add("cont2a");
        cont2.classList.remove("cont2b");
        context1 = document.createElement("p");
        context1.textContent = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!";
        context1.style.padding = "18px";
        context1.classList.add("context");
        cont2.appendChild(context1);
        val1 = false;

        cont3.classList.remove("cont2a");
        cont3.classList.add("cont2b");
        cont3.removeChild(context2);
        val2 = true;
    } else {
        cont2.classList.remove("cont2a");
        cont2.classList.add("cont2b");
        cont2.removeChild(context1);
        val1 = true;
    }
};

btn2.onclick = function() {
    if (val2 === true) {
        cont3.classList.add("cont2a");
        cont3.classList.remove("cont2b");
        context2 = document.createElement("p");
        context2.textContent = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.";
        context2.style.padding = "18px";
        context2.classList.add("context");
        cont3.appendChild(context2);
        val2 = false;

        cont2.classList.remove("cont2a");
        cont2.classList.add("cont2b");
        cont2.removeChild(context1);
        val1 = true;
    } else {
        cont3.classList.remove("cont2a");
        cont3.classList.add("cont2b");
        cont3.removeChild(context2);
        val2 = true;
    }
};