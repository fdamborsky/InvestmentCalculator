document.addEventListener("DOMContentLoaded", () => {
    const set100vhVar = () => {
        let value = "100vh";

        // If window size is iPad or smaller, then use JS to set screen height.
        if (window.innerWidth && window.innerWidth <= 1024) {
            value = `${window.innerHeight}px`;
        }

        document.documentElement.style.setProperty("--real100vh", value);
    };

    // Call the function on load
    set100vhVar();

    // Optionally, call the function again on resize to handle screen orientation changes
    window.addEventListener("resize", set100vhVar);
});


const navbarhidden = document.querySelector(".navbarhidden")

document.querySelector(".OpenSlider").addEventListener('click',function(event){
    event.preventDefault()
    navbarhidden.style.right = 0
})

document.querySelector(".CloseSlider").addEventListener('click',function(event){
    event.preventDefault()
    navbarhidden.style.right = `${-100}%`
})

