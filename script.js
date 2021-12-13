window.onload =()=>{
    // dynamically add target _blank to all anchor tags because you forgot
    const allhrefs = document.querySelectorAll('a:not(.navbar-link)');
    allhrefs.forEach(href => {
         href.setAttribute("target","_blank");
    });
}

const alllinkedButtons = document.querySelectorAll('a button');
alllinkedButtons.forEach(button => {
    const parent = button.parentElement;
    parent.classList.add('blank');
});