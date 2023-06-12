function home() {
    //Showing home section

            //Label
    document.getElementById('homeLabel').style.display = "block";
            //Icon
    document.getElementById('homeIcon').className = "activeIcon";

    //Hiding other navigation items' labels etc.

        //Restaurant section
            //Label
    document.getElementById('restaurantLabel').style.display = "none";
            //Icon
    document.getElementById('restaurantIcon').className = "inactiveIcon";

        //Hotel section
            //Label
    document.getElementById('hotelLabel').style.display = "none";
            //Icon
    document.getElementById('hotelIcon').className = "inactiveIcon";

        //More section
            //Label
    document.getElementById('moreLabel').style.display = "none";
            //Icon
    document.getElementById('moreIcon').className = "inactiveIcon";

    //Changing the iframe source
    document.getElementById('content').src = "https://thehighlandcafe.github.io/hiosmobile/welcome.html";
}

function restaurant() {
        //Showing restaurant section

            //Label
    document.getElementById('restaurantLabel').style.display = "block";
            //Icon
    document.getElementById('restaurantIcon').className = "activeIcon";

    //Hiding other navigation items' labels etc.

        //Home section
            //Label
    document.getElementById('homeLabel').style.display = "none";
            //Icon
    document.getElementById('homeIcon').className = "inactiveIcon";

        //Hotel section
            //Label
    document.getElementById('hotelLabel').style.display = "none";
            //Icon
    document.getElementById('hotelIcon').className = "inactiveIcon";

        //More section
            //Label
    document.getElementById('moreLabel').style.display = "none";
            //Icon
    document.getElementById('moreIcon').className = "inactiveIcon";

    //Changing the iframe source
    document.getElementById('content').src = "https://thehighlandcafe.github.io/hiosmobile/restaurant.html";
}

function hotel() {
    //Showing hotel section

            //Label
    document.getElementById('hotelLabel').style.display = "block";
            //Icon
    document.getElementById('hotelIcon').className = "activeIcon";

    //Hiding other navigation items' labels etc.

        //Home section
            //Label
    document.getElementById('homeLabel').style.display = "none";
            //Icon
    document.getElementById('homeIcon').className = "inactiveIcon";

        //Restaurant section
            //Label
    document.getElementById('restaurantLabel').style.display = "none";
            //Icon
    document.getElementById('restaurantLabel').className = "inactiveIcon";

        //More section
            //Label
    document.getElementById('moreLabel').style.display = "none";
            //Icon
    document.getElementById('moreIcon').className = "inactiveIcon";

    //Changing the iframe source
    document.getElementById('content').src = "https://thehighlandcafe.github.io/hiosmobile/hotelactivities.html";
}

function more() {
    //Showing more section

            //Label
    document.getElementById('moreLabel').style.display = "block";
            //Icon
    document.getElementById('moreIcon').className = "activeIcon";

    //Hiding other navigation items' labels etc.

        //Home section
            //Label
    document.getElementById('homeLabel').style.display = "none";
            //Icon
    document.getElementById('homeIcon').className = "inactiveIcon";

        //Hotel section
            //Label
    document.getElementById('hotelLabel').style.display = "none";
            //Icon
    document.getElementById('hotelIcon').className = "inactiveIcon";

        //Restaurant section
            //Label
    document.getElementById('restaurantLabel').style.display = "none";
            //Icon
    document.getElementById('restaurantIcon').className = "inactiveIcon";

    //Changing the iframe source
    document.getElementById('content').src = "https://thehighlandcafe.github.io/hiosmobile/more.html";
}