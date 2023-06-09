// Button Click adds name.

var btnClick = document.getElementById("btn-reg");
var fname = document.getElementById("fname");
var dataInput = document.getElementById("tr-data");
var errmsg = document.getElementById("error");

btnClick.addEventListener("click", function () {
  var userInputName = fname.value;
  var nameTD = document.createElement("td");
  var addRow = document.createElement("tr");

  if (fname.value !== "") {
    errmsg.innerText = "";
    fname.value = "";
    nameTD.innerText = userInputName;
    dataInput.appendChild(addRow);
    dataInput.appendChild(nameTD);
  } else {
    errmsg.innerText = "Please fill in your name.";
  }
});

// Cities Visited List

var vstBtn = document.getElementById("btn-vst");
var cityInput = document.getElementById("city-input");
var cityVisited = document.getElementById("cityUserVst");
var emsg = document.getElementById("emsg");
var citiesArr = [];

vstBtn.addEventListener("click", function () {
  var userCityVisited = cityInput.value;

  if (userCityVisited !== "") {
    emsg.innerHTML = "";
    cityInput.value = "";
    cityVisited.innerHTML = "";
    citiesArr.push(userCityVisited);

    for (var i = 0; i < citiesArr.length; i++) {
      var li = document.createElement("li");
      li.setAttribute("class", "city");
      li.setAttribute("id", "city-" + i);
      li.innerText = citiesArr[i];

      cityVisited.appendChild(li);
    }
  } else {
    emsg.innerHTML = "Fill in a city you have visited to add it to the list.";
  }
});
