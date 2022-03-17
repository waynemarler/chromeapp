function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}
  



let counter = localStorage.getItem("counter") ?? 0;
    if (counter == 0) {




	const node = document.createElement("Div");
	node.setAttribute("id", "Pogcont");
	node.setAttribute("class", "Pogcont");
	node.style.position = "absolute"
	const xy = getRandomPosition(node);
	node.style.top = xy[0] + 'px';
	node.style.left = xy[1] + 'px';
	const popup = document.createElement("Div");
	popup.setAttribute("id", "popup");
	popup.setAttribute("class", "popupcont");
    node.appendChild(popup);
	const text = document.createTextNode("My popup!");
	popup.appendChild(text);
	
	
	

	//image function
	
const icon = document.createElement("IMG");
  icon.setAttribute("id", "PogImg");
  icon.setAttribute("src", "https://pogsbucket.s3.eu-west-2.amazonaws.com/pogicons/dot-circle-o-512.png");
  icon.setAttribute("width", "75px");
  icon.setAttribute("height", "");
  icon.setAttribute("alt", "The Pulpit Rock");
  node.appendChild(icon)
	
	document.body.appendChild(node);
	
const maker = document.createElement("Div");
	maker.setAttribute("id", "Maker");
	maker.setAttribute("class", "marker");
	//maker.appendChild(icon)
	
	document.body.appendChild(maker);
	
const card = document.createElement("IMG");
  card.setAttribute("id", "Pogcard");
  card.setAttribute("class", "pogcard");
  card.setAttribute("src", "https://pogsbucket.s3.eu-west-2.amazonaws.com/marvel+cards/card1.JPG");
  card.setAttribute("width", "240px");
  card.setAttribute("height", "");
  card.setAttribute("alt", "The Pulpit Rock");
  popup.appendChild(card)
	
	document.body.appendChild(node);	

	


}
   if (counter >= 0) {
        newCount = (counter == 5) ? 0 : ++counter;
        localStorage.setItem("counter", newCount);
    }
    
    
    function popupFunction() {
   var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}
    
    document.getElementById("Pogcont").onclick=function(){popupFunction()};
    

