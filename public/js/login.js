
var tog = document.getElementById("reglogToggle");
tog.state = 0;
tog.vals = ["Register", "Login"];
tog.nField = document.getElementById("loginBox-nameField");
tog.nParent = tog.nField.parentElement;
tog.nParent.removeChild(tog.nField);
tog.onclick = function() {
  var btn = document.getElementById("loginBox-button");
  btn.setAttribute("value", tog.vals[tog.state]);
  if(++tog.state == 2) tog.state = 0;
  tog.innerHTML = tog.vals[tog.state];
  if(tog.state == 0) tog.nParent.removeChild(tog.nField);
  else tog.nParent.appendChild(tog.nField);
}
