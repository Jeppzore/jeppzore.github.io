document.getElementById("showMapButton").addEventListener("click", function(){
    const mapContainer = document.getElementById("mapContainer");
    const mapIFrame = document.getElementById("googleMap");

    mapIFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d-122.4194156846817!3d37.77492927975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f5fdbff%3A0x2f6f7e8a2dfd9e0b!2s123%20Pastry%20Lane%2C%20Sweetville%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1707231234567";

    mapContainer.style.display = "block";

    // Hide the button after clicking
    this.style.display = "none";
})