function toggleVisibility(showDiv, hideDiv) {
    var showElement = document.getElementById(showDiv);  // Récupère la div à afficher
    var hideElement = document.getElementById(hideDiv);  // Récupère la div à cacher

    showElement.style.transition = "1s ease";
    hideElement.style.transition = "1s ease";

    // D'abord, rendre l'élément visible en jouant sur l'opacité et la transition
    showElement.style.visibility = "visible";  // Rendre la div visible
    showElement.style.opacity = 1;  // Rendre l'opacité à 1 (visible)
    
    // Rendre l'élément caché en ajustant l'opacité et en jouant sur la transition
    hideElement.style.opacity = 0;  // Rendre l'opacité à 0 (invisible)
    
    // Utiliser un délai avant de mettre le hideElement en visibility: hidden pour ne pas bloquer l'animation
    setTimeout(function() {
        hideElement.style.visibility = "hidden";  // Cacher réellement l'élément après la transition
    }, 500);  // La durée de la transition
}