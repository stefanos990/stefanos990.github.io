---
layout: page
title: Dashboard
---

<div class="message">
  Pokémon Moon Team
</div>

<div>
<table align="center">

  <tr>
    <td align="center"><img src="../assets/images/pokemon/lunala.png" alt="Lunala" height="100px" width="100px"></td>
    <td align="center"><img src="../assets/images/pokemon/solgaleo.png" alt="Solgaleo" height="100px" width="100px"></td>		
    <td align="center"><img src="../assets/images/pokemon/kommo-o.png" alt="Kommo-o" height="100px" width="100px"></td>
    <td align="center"><img src="../assets/images/pokemon/lycanroc-midnight.png" alt="Lycanroc" height="100px" width="100px"></td>
    <td align="center"><img src="../assets/images/pokemon/salazzle.png" alt="Salazzle" height="100px" width="100px"></td>
    <td align="center"><img src="../assets/images/pokemon/araquanid.png" alt="Araquanid" height="100px" width="100px"></td>
  </tr> 

  <tr>
    <td align="center"><a href="http://pokemondb.net/pokedex/lunala" target="_blank">Lunala</a></td>
    <td align="center"><a href="http://pokemondb.net/pokedex/solgaleo" target="_blank">Solgaleo</a></td>		
    <td align="center"><a href="http://pokemondb.net/pokedex/kommo-o" target="_blank">Kommo-o</a></td>
    <td align="center"><a href="http://pokemondb.net/pokedex/lycanroc" target="_blank">Lycanroc</a></td>
    <td align="center"><a href="http://pokemondb.net/pokedex/salazzle" target="_blank">Salazzle</a></td>
    <td align="center"><a href="http://pokemondb.net/pokedex/araquanid" target="_blank">Araquanid</a></td>
  </tr> 

  <tr>
    <td align="center">Battles played: 0<br>Wins: 0<br>Loses: 0</td>
    <td align="center"><main>
  <h1>HTML Pie Chart</h1>
  <p>Change the number values in the html.</p>
  <section>
    <div class="pieID pie">
      
    </div>
    <ul class="pieID legend">
      <li>
        <em>Humans</em>
        <span>718</span>
      </li>
      <li>
        <em>Dogs</em>
        <span>531</span>
      </li>
      <li>
        <em>Cats</em>
        <span>868</span>
      </li>
      <li>
        <em>Slugs</em>
        <span>344</span>
      </li>
      <li>
        <em>Aliens</em>
        <span>1145</span>
      </li>
    </ul>
  </section></td>
  </tr> 

</table>
</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58975019-1', 'auto');
  ga('send', 'pageview');

</script>

function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;
  $("."+sliceID).css({
    "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
  });
  $("."+sliceID+" span").css({
    "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
    "background-color": color
  });
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var sliceID = "s"+dataCount+"-"+sliceCount;
  var maxSize = 179;
  if(sliceSize<=maxSize) {
    addSlice(sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(maxSize, pieElement, offset, sliceID, color);
    iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
  }
}
function createPie(dataElement, pieElement) {
  var listData = [];
  $(dataElement+" span").each(function() {
    listData.push(Number($(this).html()));
  });
  var listTotal = 0;
  for(var i=0; i<listData.length; i++) {
    listTotal += listData[i];
  }
  var offset = 0;
  var color = [
    "cornflowerblue", 
    "olivedrab", 
    "orange", 
    "tomato", 
    "crimson", 
    "purple", 
    "turquoise", 
    "forestgreen", 
    "navy", 
    "gray"
  ];
  for(var i=0; i<listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(size, pieElement, offset, i, 0, color[i]);
    $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
    offset += size;
  }
}
createPie(".pieID.legend", ".pieID.pie");