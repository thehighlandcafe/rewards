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
    
            //Roomkey section
                //Label
        document.getElementById('roomkeyLabel').style.display = "none";
                //Icon
        document.getElementById('roomkeyIcon').className = "inactiveIcon";

        /*    //More section
                //Label
        document.getElementById('moreLabel').style.display = "none";
                //Icon
        document.getElementById('moreIcon').className = "inactiveIcon";*/
    
        //Changing the iframe source
        document.getElementById('content').src = "https://thehighlandcafe.github.io/hioswebcore/welcome.html";
    
        //Changing the page's titles to match the section
        document.title = "HiOSMobile | Home";
        document.getElementById('pageTitle').textContent = "Home";
    
        //Hiding More container and showing iframe
        document.getElementById('moreContainer').style.display = "none";
        document.getElementById('frameContainer').style.display = "block";

        //Hiding toolbaricon
        document.getElementById('dialog').style.display = "none";
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
    
            //Roomkey section
                //Label
        document.getElementById('roomkeyLabel').style.display = "none";
                //Icon
        document.getElementById('roomkeyIcon').className = "inactiveIcon";

        /*    //More section
                //Label
        document.getElementById('moreLabel').style.display = "none";
                //Icon
        document.getElementById('moreIcon').className = "inactiveIcon";*/
    
        //Changing the iframe source
        document.getElementById('content').src = "https://thehighlandcafe.github.io/hioswebcore/restaurant.html";
    
        //Changing the page's titles to match the section
        document.title = "HiOSMobile | Food";
        document.getElementById('pageTitle').textContent = "Food";
    
        //Hiding More container and showing iframe
        document.getElementById('moreContainer').style.display = "none";
        document.getElementById('frameContainer').style.display = "block";

        //Hiding toolbaricon
        document.getElementById('dialog').style.display = "none";
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
        document.getElementById('restaurantIcon').className = "inactiveIcon";

            //Roomkey section
                //Label
        document.getElementById('roomkeyLabel').style.display = "none";
                //Icon
        document.getElementById('roomkeyIcon').className = "inactiveIcon";
    
        /*    //More section
                //Label
        document.getElementById('moreLabel').style.display = "none";
                //Icon
        document.getElementById('moreIcon').className = "inactiveIcon";*/
    
        //Changing the iframe source
        document.getElementById('content').src = "https://thehighlandcafe.github.io/hioswebcore/hotelactivities.html";
    
        //Changing the page's titles to match the section
        document.title = "HiOSMobile | Hotel";
        document.getElementById('pageTitle').textContent = "Hotel";
    
        //Hiding More container and showing iframe
        document.getElementById('moreContainer').style.display = "none";
        document.getElementById('frameContainer').style.display = "block";

        //Hiding toolbaricon
        document.getElementById('dialog').style.display = "none";
}

function roomkey() {
        //Showing roomkey section

                //Label
        document.getElementById('roomkeyLabel').style.display = "block";
                //icon
        document.getElementById('roomkeyIcon').className = "activeIcon";

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
        document.getElementById('restaurantIcon').className = "inactiveIcon";

            //Hotel section
                //Label
        document.getElementById('hotelLabel').style.display = "none";
                //Icon
        document.getElementById('hotelIcon').className = "inactiveIcon";

        //Changing the iframe source
        document.getElementById('content').src = "https://thehighlandcafe.github.io/hioswebcore/roomkey.html";

        //Changing the page's titles to match the section
        document.title = "HiOSMobile | Room Key";
        document.getElementById('pageTitle').textContent = "Room Key";

        //Hiding More container and showing iframe
        document.getElementById('moreContainer').style.display = "none";
        document.getElementById('frameContainer').style.display = "block";

        //Hiding toolbaricon
        document.getElementById('dialog').style.display = "none";
}
    
/*function more() {
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
        //document.getElementById('content').src = "https://thehighlandcafe.github.io/hiosmobile/more.html";
    
        //Hiding the iFrame altogether
        document.getElementById('frameContainer').style.display = "none";
    
        //Showing the custom More page
        document.getElementById('moreContainer').style.display = "block";
    
        //Changing the page's titles to match the section
        document.title = "HiOSMobile | More";
        document.getElementById('pageTitle').textContent="More";
}
    
function moreNew() {
        window.location.href = "more.html";
}*/

//Toolbaricon functions
        //Opening and closing
function showToolbaricon(dialog) {
        document.getElementById(dialog).style.display = "block";
}

function hideToolbaricon(dialog) {
        document.getElementById(dialog).style.display = "none";
}

        //Buttons on the dialog
function toolbariconPage(destination) {
        window.location.href = destination;
}