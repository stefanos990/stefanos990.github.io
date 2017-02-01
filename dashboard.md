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
    <td align="center"><div class="panel">
  <div class="ctrl">
    <span>_</span>
    <span>&times;</span>
  </div>
  
  <div class="chart">
    <div class="percentage" data-percent="71">
      <span>71</span><sup>%</sup>
    </div>
    <div class="label">New visits</div>
  </div>
  
  <div class="chart">
    <div class="percentage" data-percent="46">
      <span>46</span><sup>%</sup>
    </div>
    <div class="label">Bounce rate</div>
  </div></td>
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

/**
 * Built with the jQuery plugin that was born as a result of the great dribble shot
 * http://rendro.github.io/easy-pie-chart/
 **/
$('.percentage').easyPieChart({
  animate: 1000,
  lineWidth: 4,
  onStep: function(value) {
    this.$el.find('span').text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find('span').text(Math.round(to));
  }
});