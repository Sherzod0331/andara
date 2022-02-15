
var date = new Date();
var currentDate = date.toISOString().slice(0,10);
var currentTime = date.getHours() + ':' + date.getMinutes();

document.getElementById('date').value = currentDate;
document.getElementById('time').value = currentTime;



function customQuantity() {
    $(
        '<div class="pt_QuantityNav"><div class="pt_QuantityButton pt_QuantityDown">-</div></div>'
    ).insertBefore(".pt_Quantity input");
    $(
        '<div class="pt_QuantityNav"><div class="pt_QuantityButton pt_QuantityUp">+</div></div>'
    ).insertAfter(".pt_Quantity input");
    $(".pt_Quantity").each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find(".pt_QuantityUp"),
            btnDown = spinner.find(".pt_QuantityDown"),
            min = input.attr("min"),
            max = input.attr("max"),
            valOfAmout = input.val(),
            newVal = 0;

        btnUp.on("click", function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
            // cartAdd()
        });
        btnDown.on("click", function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
            // cartAdd()
        });
    });
}

customQuantity();

var a = 0;
function savat() {
  if ((a++)%2==0) {
    document.querySelector(".jadval").style.display = "block"
    document.querySelector(".xarid_savati").style.color = "#18d26e"
  } else {
    document.querySelector(".jadval").style.display = "none"
    document.querySelector(".xarid_savati").style.color = "#000"
  }    
}

var a = 0;
function wrapper() {
  if ((a++)%2==0) {
    document.querySelector(".wrapper").style.display = "flex"
  } else {
    document.querySelector(".wrapper").style.display = "none"
  }    
}

var a = 0;
function wrapper1() {
  if ((a++)%2==0) {
    document.querySelector(".wrapper1").style.display = "flex"
  } else {
    document.querySelector(".wrapper1").style.display = "none"
  }    
}

function close_wrapper() {
    document.querySelector(".wrapper").style.display = "none"
}
function close_wrapper1() {
    document.querySelector(".wrapper1").style.display = "none"
}



function Bisque() {
    var taom = document.querySelector("#Bisque").value;
    // console.log(taom);

    if (taom>0) {
        document.querySelector(".Bisque").style.display = "flex"
        document.querySelector("#Bisque1").value = taom;
        taom = document.querySelector("#Bisque1").value;
    } else {
        document.querySelector(".Bisque").style.display = "none"
    }
}

function Bisque1() {
    var taom = document.querySelector("#Bisque1").value;
    // console.log(taom);

    if (taom>0) {
        document.querySelector(".Bisque").style.display = "flex"
        document.querySelector("#Bisque").value = taom;
    } else {
        document.querySelector(".Bisque").style.display = "none"
        document.querySelector("#Bisque").value = 0;
    }
}

