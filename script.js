window.onload =()=>{
    // dynamically add target _blank to all anchor tags because you forgot
    const allhrefs = document.querySelectorAll('a');
    allhrefs.forEach(href => {
         href.setAttribute("target","_blank");
    });
}