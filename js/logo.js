/* 
    This combined with the CSS animates the logo coming in one piece at a time,
    then spins it off screen. This only happens on initial site load.
    It does not animate on reload, back/forward, or navigating within site
    (if you want to see the animation play again, click the url, then press enter)
    Author: Samuel Herman
    Date: 1 June 2025
*/

document.addEventListener('DOMContentLoaded', () => {
    let links = document.querySelectorAll(".link");
    let getLogoPiece = document.querySelectorAll(".logo-piece");
    let getLogoWrapper = document.querySelector(".logo-wrapper");

    // Function to set the flag for internal link
    const setInternalLinkFlag = () => {
        sessionStorage.setItem('internalLink', 'true');
    }

    links.forEach(link => {
        if (link) {
            link.addEventListener('click', setInternalLinkFlag);
        }
    });

    // Get the navigation entry
    const navigationEntries = performance.getEntriesByType("navigation");
    let shouldAnimationPlay = false;

    // Check if there's a navigation entry and its type
    if (navigationEntries.length > 0) {
        const navigationType = navigationEntries[0].type;
        const internalLink = sessionStorage.getItem('internalLink');

        // Play the animation only if it's an initial navigation
        // (not reload or back/forward or internal site link)
        if (navigationType === 'navigate' && !internalLink) {
            shouldAnimationPlay = true;
        }
    } else {
        // Fallback for old browsers
        shouldAnimationPlay = true;
    }   
    
    if (shouldAnimationPlay) {
        getLogoWrapper.style.display = 'flex';
        setTimeout(function() {
            for (let i = 0; i < getLogoPiece.length; i++) {
                getLogoPiece[i].style.display = 'block';
            }
        }, 100);
    }

    sessionStorage.removeItem('internalLink');
});