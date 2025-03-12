const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");
const delBtn = document.querySelector("#clear")
const colorPicker = document.getElementById("colorPicker");

let selectedColor = "#ffffff"

colorPicker.addEventListener("input", function(event) {
    selectedColor = event.target.value;
    console.log("selected color: ", selectedColor)
})

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 1);
    setCookie("lastName", lastText.value, 1);
    setCookie("favColor", selectedColor, 1);
    document.getElementById("greeting").innerText = " Grettings " + firstText.value + " " + lastText.value + " hope you have a good day!";
    document.body.style.backgroundColor = selectedColor;
    colorPicker.value = selectedColor;
});

cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName") || "";
    lastText.value = getCookie("lastName") || "";
    selectedColor = getCookie("favColor") || "#ffffff";
    document.body.style.backgroundColor = selectedColor;
    colorPicker.value = selectedColor;
    document.getElementById("greeting").innerText = " Grettings " + firstText.value + " " + lastText.value + " hope you have a good day!";

});
delBtn.addEventListener("click", () =>{
    deleteCookie("firstName");
    deleteCookie("lastName");
    deleteCookie("favColor")
    location.reload();
})


function setCookie(name, value, time2Live){
    const date = new Date();
    date.setTime(date.getTime() + time2Live * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires};path=/`;
    console.log(document.cookie);
} 
function deleteCookie(name){
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
function getCookie(name){
   const cDecode = decodeURIComponent(document.cookie);
   const cArray=cDecode.split("; ");
   for (let element of cArray){
    let [key,value] = element.split("=");
    if (key === name){
        return value;
    }
        
   }
   cArray.forEach(element => {
    if(element.indexOf(name) == 0){
        result = element.substring(name.length + 1);
    }
   })
   return result;
}

