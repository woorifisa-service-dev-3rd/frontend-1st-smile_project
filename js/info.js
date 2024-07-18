const lis = document.getElementsByClassName("app-icon");
const telecom = document.getElementById("telecom");
const phone = document.getElementById("phone");
let header = document.getElementById("header");

Array.from(lis).forEach((li, index) => {
  li.addEventListener("click", () => {
    if (index > 13) return;
    // insertIcon(li);
    if (index == 6) {
      telecom.style.display = "block";
      phone.style.width = "105px";
    } else {
      telecom.style.display = "none";
      phone.style.width = "180px";
    }
  });
});

// function insertIcon(li){
//   const tagToString = li.firstElementChild.outerHTML + `<span class="header-name">${li.lastElementChild.textContent}</span>`;
//   header.replaceChildren();
//   header.insertAdjacentHTML('beforeend',tagToString);
// }

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}
