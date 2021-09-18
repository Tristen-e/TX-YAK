//  Tristen Ellis
//  ITSE - 2302
//  Unit 7 Final Project
//  DESC:   Fishing shirt/Merch site (javascript portion)
//  Filename/location:   /TellisFinalProject/scripts/script.js
//
// ITSE -2302 IntermediateWebProgramming (SU 21' TSTC)

/*---------!!! comment key!!--------------
-
  **** x) = labels for required items 
  (with count number(x) for each DIFFERENT type)
-
*/

//----------Declaring variables----------//
//***** 1) contstants
const btnAddD1 = document.querySelector("#btnAddD1");
const btnAddD2 = document.querySelector("#btnAddD2");
const btnAddD3 = document.querySelector("#btnAddD3");
const btnclear = document.querySelector("#btnClear");
const btnconfirm = document.querySelector("#confirm");
const btnreset = document.querySelector("#reset");
const btnPrint = document.querySelector("#btnPrint");
const btnClose = document.querySelector("#btnClose");
// ********* 2) let
let sidebarCheckout = document.getElementById("sidebar");
// *****3) varibles
var radio_check1;
var radio_check2;
var radio_check3;
var items;
var cost;
var totalRounded2Places;
var subtotal;
var total;

// opens up the Overlay form for finalizing checkout
//------------------------------
function toggleForm() {
  document.body.classList.toggle("activeForm");
  //hides the side checkout bar
  sidebarCheckout.style.visibility = "hidden";
}

// loads overlay form with values from the cart
//--------------------------------
function frmValues() {
  tax(cost);
  //subtotal && "<ul>"" in checkout form that holds order details in "<li>"s
  items = document.getElementById("items").innerHTML;
  // items = <ul> for order details
  //setting the innerHTML of <ul> = to items(which is
  document.getElementById("details").innerHTML =
    items +
    '<br/><div class="wLine"></div> <li></li> <h3>Subtotal:  $' +
    cost.toString() +
    ".00</h3> <h3> Total:  $" +
    total.toString() +
    "</h3>";
  scrollTo(0, 0);
}

// -----------------
function confirm() {
  var name = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var check = document.getElementById("mailList").checked;
  var special = document.getElementById("instructions").value;
  document.getElementById("fullname").style.visibility = "hidden";
  document.querySelectorAll(".form-element")[0].innerText = "Name: " + name;
  document.querySelectorAll(".form-element")[1].innerText = "Email: " + email;
  document.querySelectorAll(".form-element")[2].innerText =
    "Recieve future email promoions and offers: " + check;
  document.querySelectorAll(".form-element")[3].innerText =
    "Special Instructions: " + special;
  btnconfirm.style.visibility = "hidden";
  btnreset.style.visibility = "hidden";
  btnPrint.style.visibility = "visible";
  btnClose.style.visibility = "visible";
  scrollTo(0, 0);
}

//resets
function reset() {
  items = "";
  document.getElementById("items").innerHTML = "";
  document.getElementById("subtotal").innerHTML = 0;
  cost = 0;
  subtotal = 0;
}
//for cancel button in overlay form | repoens the sidebar cart
function openCart() {
  sidebarCheckout.style.visibility = "visible";
}

//tax with ****** 4) Argument
function tax(cost) {
  //******* 5) try/catch
  try {
    y = parseFloat(cost);
    z = y * 1.0825;
    totalRounded2Places = z.toFixed(2);
    total = totalRounded2Places;
    // **** 6) Return value
    return total;
  } catch (e) {
    window.alert(e.toString);
  }
}
//Design 1 --------------------------------------------------
//          Design 2 and 3 are essentially the same as design 1
//          with small changes

// ******** 7) Event Listener
btnAddD1.addEventListener("mouseover", function values1() {
  //******* 8)  if/ Else
  if (document.getElementById("S1").checked == true) {
    radio_check1 = document.getElementById("S1").value;
  } else if (document.getElementById("M1").checked == true) {
    radio_check1 = document.getElementById("M1").value;
  } else if (document.getElementById("L1").checked == true) {
    radio_check1 = document.getElementById("L1").value;
  } else radio_check1 == "f";
});

function addD1() {
  if (radio_check1 === undefined || radio_check1 == "f") {
    // **** let & validation Alert
    let er = window.alert("Error: You must select a size before adding item");
    //***return function
    return er;
  }

  sidebarCheckout.style.visibility = "visible";
  items = document.getElementById("items").innerHTML;
  document.getElementById("items").innerHTML =
    items + "<li> " + radio_check1 + " <li> PRO SHORT SLEEVE \t $20</li>";
  subtotal = document.getElementById("subtotal").innerHTML;
  cost = parseInt(subtotal);
  cost += 20.0;
  document.getElementById("subtotal").innerHTML = cost.toString() + ".00";
}

// Design 2 --------------------------------------------------

btnAddD2.addEventListener("mouseover", function values2() {
  if (document.getElementById("S2").checked == true) {
    radio_check2 = document.getElementById("S2").value;
  } else if (document.getElementById("M2").checked == true) {
    radio_check2 = document.getElementById("M2").value;
  } else if (document.getElementById("L2").checked == true) {
    radio_check2 = document.getElementById("L2").value;
  } else radio_check2 == "f";
});

function addD2() {
  if (radio_check2 === undefined || radio_check2 == "f") {
    window.alert("Error: You must select a size before adding item");
    return;
  }
  sidebarCheckout.style.visibility = "visible";
  items = document.getElementById("items").innerHTML;
  document.getElementById("items").innerHTML =
    items + "<li> " + radio_check2 + " TEXAS SPECIAL  \t $25</li>";
  subtotal = document.getElementById("subtotal").innerHTML;
  cost = parseInt(subtotal);
  cost += 25.0;
  document.getElementById("subtotal").innerHTML = cost.toString() + ".00";
}
// Design 3 --------------------------------------------------

btnAddD3.addEventListener("mouseover", function values3() {
  if (document.getElementById("S3").checked == true) {
    radio_check3 = document.getElementById("S3").value;
  } else if (document.getElementById("M3").checked == true) {
    radio_check3 = document.getElementById("M3").value;
  } else if (document.getElementById("L3").checked == true) {
    radio_check3 = document.getElementById("L3").value;
  } else radio_check3 == "f";
});

function addD3() {
  if (radio_check3 === undefined || radio_check3 == "f") {
    window.alert("Error: You must select a size before adding item");
    return;
  }
  sidebarCheckout.style.visibility = "visible";
  items = document.getElementById("items").innerHTML;
  document.getElementById("items").innerHTML =
    items + "<li> " + radio_check3 + " GHOST LONG SLEEVE \t $30</li>";
  subtotal = document.getElementById("subtotal").innerHTML;
  cost = parseInt(subtotal);
  cost += 30.0;
  document.getElementById("subtotal").innerHTML = cost.toString() + ".00";
}
