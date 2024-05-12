var images = [
    { name: "Bangladesh", url: "bangladesh.png" },
    { name: "Nepal", url: "nepal.jpg" },
    { name: "India", url: "india.png" },
    { name: "Afghanistan", url: "afghanistan.jpg" },
    { name: "Albania", url: "albania.jpg" },
    { name: "Algeria", url: "algeria.jpg" },
    { name: "Andorra", url: "andorra.jpg" },
    { name: "Angola", url: "angola.jpg" },
    { name: "Antigua and Barbuda", url: "Ang.png" },
    { name: "Argentina", url: "Argentina.jpg" },
    { name: "Armenia", url: "armenia.jpg" },
    { name: "Australia", url: "australia.jpg" },
    { name: "Austria", url: "austria.jpg" },
    { name: "Azerbaijan", url: "azerbaijan.jpg" },
    { name: "Bahamas", url: "bahamas.png" },
    { name: "Bahrain", url: "bahrain.jpg" },
    { name: "Barbados", url: "barbados.png" },
    { name: "Belarus", url: "belarus.jpg" },
    { name: "Belgium", url: "belgium.jpg" },
    { name: "Belize", url: "belize.png" },
    { name: "Benin", url: "benin.jpg" },
    { name: "Bolivia", url: "bolivia.jpg" },
    { name: "Bhutan", url: "bhutan.jpg" },
    { name: "Bosnia and Herzegovina", url: "bos.jpg" },
    { name: "Botswana", url: "botswana.png" },
    { name: "Brazil", url: "brazil.jpg" },
    { name: "Brunei", url: "brunei.png" },
    { name: "Bulgaria", url: "Bulgaria.jpg" },
    { name: "Burkina Faso", url: "Burk.png" },
    { name: "Burundi", url: "Burundi.png" },
    { name: "Burma", url: "burma.jpg" },

      // Add more image objects as needed
  ];
const generate = () => {
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];
  
    document.body.style.backgroundImage = "url('" + selectedImage.url + "')";
    document.getElementById("imageName").textContent = selectedImage.name;
}

document.getElementById("btn").addEventListener(
    "click",
    generate
);
//init call
//enerate();

