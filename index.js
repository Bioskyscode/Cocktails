$(".grid-items").hide();
//$(".container").hide();
var cocktails = [
    "display1", "display2", "display3", "display4", "display5", 
    "display6", "display7", "display8", "display9", "display10"
];

function disableMenu(params) {
   return $(".menu").prop('disabled', true);
}
function enableMenu(params) {
    location.reload();
    return $(".menu").prop('disabled', false);
 }

// ############ Random Cocktail ########
$(".select-menu").on("click", function menuC() {
    
    if (window.innerHeight < 799) {
        $(".title-text").slideUp();
    }
    $(".grid-items").hide();
    $(".txt-placeholder").hide();
    var randomNumber = Math.floor(Math.random()*cocktails.length);
    $(".Cocktail-number").text(randomNumber + 1);
    var selectedCocktail = cocktails[randomNumber];
    switch (selectedCocktail) {
        case "display1": 
        $(".display1").slideDown();
            break;

        case "display2": 
        $(".display2").slideDown();
            break;

        case "display3": 
        $(".display3").slideDown();
            break;

        case "display4": 
        $(".display4").slideDown();
            break;
        case "display5": 
        $(".display5").slideDown();
            break;

        case "display6": 
        $(".display6").slideDown();
            break;

        case "display7": 
        $(".display7").slideDown();
            break;

        case "display8": 
        $(".display8").slideDown();
            break;

        case "display9": 
        $(".display9").slideDown();
            break;

        case "display10": 
        $(".display10").slideDown();
                break;

        default:
        console.log("error encountered");
            break;
    }
    
    disableMenu();
    setTimeout(() => {
        enableMenu();
    }, 20000);
})

// ########### Toggle-Menu ########
    $(".menu").click(function () {
    $(".txt-placeholder").hide();
     $(".menu").text($(".menu").text() === "Cocktail-Menü ausblenden" ? "Cocktail-Menu ansehen" : "Cocktail-Menü ausblenden");
     $(".grid-items").slideToggle(500);
     });


    //  ################ ALert ##########
    document.addEventListener("DOMContentLoaded", function() {
        var blankText = $(".msg-farewell");
        blankText.hide();
        var idleTimer;
        var idleTime = 5*60*1000; // 5 minutes in milliseconds
        var time = 5;
        function resetIdleTimer() {
            clearTimeout(idleTimer);
            idleTimer = setTimeout(function() {
                // Display the idle message
                if (confirm("Inactivity for " +time+ " minutes, close app?")) {
                    alert("The page will go blank");
                    blankText.fadeIn(7000);
                    $(".container").remove();
                } else {
                    alert("Thanks for using Our Cocktail Menu ❤️");
                }
            }, idleTime);
        }
    
        // Reset the timer on user activity
        document.addEventListener("click",function () {
            resetIdleTimer();
        });
        document.addEventListener("keypress",function () {
            resetIdleTimer();
        });
    
        // Initial start of the timer
        resetIdleTimer();
    });