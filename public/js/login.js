/** toggle text DOM and js wrapper*/
var tog = document.getElementById("reglogToggle");
/** 0: login state, 1: register state */
tog.state = 0;
/** submit button values used in PHP */
tog.vals = ["Register", "Login"];
/** toggle text value parallel to state */
tog.txts = ["not yet registered?", "have an account?"]
/** username input field DOM */
tog.nField = document.getElementById("loginBox-nameField");
/** submit button DOM */
tog.btn = document.getElementById("loginBox-button");
/** fix reference to container DOM */
tog.nParent = tog.nField.parentElement;

// PROPERTIES
// ============================================================================

tog.nParent.removeChild(tog.nField);
// remove username input field as default is login state
tog.btn.setAttribute("value", tog.vals[1]);
// set submit button value
tog.innerHTML = tog.txts[0];
// set toggle text value

// CONSTRUCTOR
// ============================================================================

/** change state and update submit button and toggle text value */
tog.chng = function() {
  tog.btn.setAttribute("value", tog.vals[tog.state]);
  if(++tog.state == 2) tog.state = 0;
  tog.innerHTML = tog.txts[tog.state];
  if(tog.state == 0) tog.nParent.removeChild(tog.nField);
  else tog.nParent.appendChild(tog.nField);
}
/** click event binded to toggle text object */
tog.onclick = tog.chng;

// METHODS
// ============================================================================
