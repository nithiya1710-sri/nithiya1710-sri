const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitbtn = document.querySelector(".exit-btn");
startBtn.onclick = () => {
  popupInfo.classlist.add(active);
}
exitBtn.onclick = () => {
  popupInfo.classlist.remove(active);
}
