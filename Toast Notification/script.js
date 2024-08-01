const btn = document.querySelector('.btn');
const NotiContainer = document.querySelector('.container');


btn.addEventListener('click',()=>{
    showNotification()
});

function showNotification() {
    const noti = document.createElement("div");
    noti.classList.add("noti")

    noti.innerText = "This New Idea I Find It Nice"

    NotiContainer.appendChild(noti)

   setTimeout(()=>{
    noti.remove();
   }, 3000)

}