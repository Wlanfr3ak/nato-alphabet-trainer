// Work in Progress
<!DOCTYPE html>
<html>
<body>

<p>Click the Button to generator a String</p>

<button onclick="nato-alphabet-trainer()">Try it</button>

<p id="nato-alphabet-trainer"></p>

<script>
function nato-alphabet-trainer() {
    var x = document.getElementById("nato-alphabet-trainer")
    x.innerHTML = Math.floor((Math.random() * 27) + 1);
}
</script>

</body>
</html>



var natocode = ["A", "Alpha", "B", "Bravo", "C", "Charlie", "D", "Delta", "E", "Echo", "F", "Foxtrot", "G", "Golf", "H", "Hotel", "I", "India", "J", "Juliet", "K", "Kilo", "L", "Lima", "M", "Mike", "N", "November", "O", "Oscar", "P", "Papa", "Q", "Quebec", "R", "Romeo", "S", "Sierra", "T", "Tango", "U", "Uniform", "V", "Victor", "W", "Whiskey", "X", "X-ray", "Y", "Yankee", "Z", "Zulu"];
var natocode = ["A", "Anton", "Ä", "Ärger", "B", "Berta", "C", "Cäsar", "Ch", "Charlotte", "D", "Dora", "E", "Emil", "F", "Friedrich", "G", "Gustav", "H", "Heinrich", "I", "Ida", "J", "Julius", "K", "Kaufmann", "L", "Ludwig", "M", "Martha", "N", "Nordpol", "O", "Otto", "Ö", "Ökonom", "P", "Paula", "Q", "Quelle", "R", "Richard", "S", "Samuel", "Sch", "Schule", "ß", "Eszett", "T", "Theodor", "U", "Ulrich", "V", "Viktor", "W", "Wilhelm", "X", "Xanthippe", "Y", "Ypsilon", "Z", "Zacharias"];

//benbe code:
var alphabet = {
    "a" : "alpha",
    "b" : "bravo";
    
var str = "DO9XE";
var result = " ";

for(i = 0; i < str.length; i++) {
    result += " ";
    result += alphabet[str[i]];
}
document.getElementById("resultDiv").innerText = result;
