function showPage(section, moreContainer ) {
    //hiding more main page
    document.getElementById(moreContainer).style.display = 'none';
    
    //showing more section page that was selected by user
    document.getElementById(section).style.display = 'block';
}

function backToMain(section, moreContainer) {
    //hiding more section page that was selected by user
    document.getElementById(section).style.display = 'none';

    //showing more main page
    document.getElementById(moreContainer).style.display = 'block';
}