var images = [
    { name: "Bangladesh", url: "bangladesh.png" },
    { name: "Nepal", url: "Nepal.jpg" },
    
    // Add more image objects as needed
  ];
function generate(){
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];
  
    document.body.style.backgroundImage = "url('" + selectedImage.url + "')";
    document.getElementById("imageName").textContent = selectedImage.name;
}