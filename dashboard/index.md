---
layout: page
title: Dashboard
---
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

<div class="message">
  Interesting Photos
</div>

<div id="flickrembed"></div><div style="position:absolute; top:-70px; display:block; text-align:center; z-index:-1;"><a href="https://youtubevideoembed.com/">How to embed a you Tube video</a></div><small style="display: block; text-align: center; margin: 0 auto;"></small><script src='https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=www.flickr.com/photos/stefanos990/&sort=0&by=user&theme=slider&scale=fill&limit=10&skin=default&autoplay=true'></script>
<br>

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

</table>
</div>
<br>

<div class="message">
  Facebook Friends
</div>
 <iframe width="760" height="300" frameborder="0" scrolling="no" src="/dashboard/scripts/fb-chart/"></iframe>
<div class="message">
  Twitter Followers
</div>
 <iframe width="760" height="300" frameborder="0" scrolling="no" src="/dashboard/scripts/twitter-chart/"></iframe>
<br>

<div>

<iframe src="//www.facebook.com/plugins/share_button.php?href=http://stefanos990.com/dashboard&amp;layout=button_count&amp;appId=460671367340473&amp;text=Dashboard" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px;" allowTransparency="true"></iframe>

<iframe id="tweet-button" allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/tweet_button.html?via=stefanos990&amp;count=horizontal&amp;url=http://stefanos990.com/dashboard&amp;text=Dashboard"></iframe>
</div>

{% include analytics.html %}