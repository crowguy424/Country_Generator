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
    { name: "Brunei Darussalam", url: "brunei.png" },
    { name: "Bulgaria", url: "Bulgaria.jpg" },
    { name: "Burkina Faso", url: "Burk.png" },
    { name: "Burundi", url: "Burundi.png" },
    { name: "Burma", url: "burma.jpg" },
    { name: "Côte d'Ivoire", url: "ivory.jpg" },
    { name: "Burma", url: "burma.jpg" },
    { name: "Cape Verde", url: "Cape.png" },
    { name: "Cambodia", url: "cambodia.jpg" },
    { name: "Cameroon", url: "cameroon.jpg" },
    { name: "Canada", url: "canada.jpg" },
    { name: "Central African Republic", url: "central.jpg" },
    { name: "Canada", url: "canada.jpg" },
    { name: "Chad", url: "chud.jpg" },
    { name: "Chile", url: "chile.jpg" },
    { name: "China", url: "china.jpg" },
    { name: "Colombia", url: "colombia.jpg" },
    { name: "Comoros", url: "comoros.jpg" },
    { name: "Congo-Brazzaville", url: "congo-brazzaville-flag-icon.jpg" },
    { name: "Costa Rica", url: "costa.jpg" },
    { name: "Croatia", url: "croatia.jpg" },
    { name: "Cuba", url: "cuba.jpg" },
    { name: "Cyprus", url: "cyprus.jpg" },
    { name: "Czechia", url: "cz.jpg" },
    { name: "Democratic Republic of Congo", url: "dr.png" },
    { name: "Denmark", url: "den.jpg" },
    { name: "Djibouti", url: "ji.svg" },
    { name: "Dominica", url: "dom.gif" },
    { name: "Dominican Republic", url: "dr.jpg" },
    { name: "Ecuador", url: "ecu.jpg" },
    { name: "Egypt", url: "egypt.jpg" },
    { name: "El Salvador", url: "el.jpg" },
    { name: "Equatorial Guinea", url: "gyn.png" },
    { name: "Eritrea", url: "eri.png" },
    { name: "Estonia", url: "estonia.jpg" },
    { name: "Eswatini", url: "eswa.png" },
    { name: "Ethiopia", url: "ethio.png" },
    { name: "Fiji", url: "fiji.jpg" },
    { name: "Finland", url: "fin.jpg" },
    { name: "France", url: "fra.jpg" },
    { name: "Gabon", url: "gabon.jpg" },
    { name: "Gambia", url: "gam.jpg" },
    { name: "Georgia", url: "george.jpg" },
    { name: "Germany", url: "germ.jpg" },
    { name: "Ghana", url: "ghana.png" },
    { name: "Greece", url: "greece.jpg" },
    { name: "Grenada", url: "gren.png" },
    { name: "Greece", url: "greece.jpg" },
    { name: "Guatemala", url: "guats.jpg" },
    { name: "Guinea", url: "guin.png" },
    { name: "Guinea-Bissau", url: "gunis.png" },
    { name: "Guyana", url: "guyana.jpg" },
    { name: "Haiti", url: "haiti.jpg" },
    { name: "Vatican City", url: "vat.jpg" },
    { name: "Honduras", url: "hondu.jpg" },
    { name: "Hungary", url: "hungary.jpg" },
    { name: "Hong Kong", url: "hk.jpg" },
    { name: "Iceland", url: "ice.jpg" },
    { name: "Indonesia", url: "indonesia.jpg"},
    { name: "Iran", url: "iran.jpg"},
    { name: "Iraq", url: "iraq.jpg"},
    { name: "Ireland", url: "ireland.jpg"},
    { name: "Italy", url: "italy.jpg"},
    { name: "Jamaica", url: "jamaica.jpg"},
    { name: "Japan", url: "japan.jpg"},
    { name: "Jordan", url: "jordan.jpg"},
    { name: "Kazakhstan", url: "Kazakh.jpg"},
    { name: "Kenya", url: "kenya.jpg"},
    { name: "Kiribati", url: "kiribati.jpg"},
    { name: "Kuwait", url: "kuwait.jpg"},
    { name: "Kyrgyzstan", url: "kyrgy.jpg"},
    { name: "Laos", url: "laos.jpg"},
    { name: "Latvia", url: "latvia.jpg"},
    { name: "Lebanon", url: "lebanon.jpg"},
    { name: "Lesotho", url: "lesotho.png"},
    { name: "Liberia", url: "lib.jpg"},
    { name: "Libya", url: "libya.jpg"},
    { name: "Liechtenstein", url: "lie.jpg"},
    { name: "Lithuania", url: "lithuania.jpg"},
    { name: "Luxembourg", url: "luxembourg.jpg"},
    { name: "Madagascar", url: "madagascar.jpg"},
    { name: "Malawi", url: "malawi.jpg"},
    { name: "Malaysia", url: "malaysia.jpg"},
    { name: "Maldives", url: "maldives.jpg"},
    { name: "Mali", url: "mali.jpg"},
    { name: "Malta", url: "malta.jpg"},
    { name: "Marshall Islands", url: "marsh.jpg"},
    { name: "Mauritania", url: "mauritania.jpg"},
    { name: "Mauritius", url: "Mauritius.jpg"},
    { name: "Abkhazia", url: "abz.jpg"},
    { name: "Mexico", url: "mex.jpg"},
    { name: "Micronesia", url: "micro.jpg"},
    { name: "Moldova", url: "mol.svg"},





    




    
    
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
generate();

