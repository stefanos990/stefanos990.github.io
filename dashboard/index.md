---
layout: page
title: Dashboard
---
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

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
    <td align="left">Battles: 0<br>Wins: 0<br>Loses: 0</td>
    <td align="center" colspan="5"><iframe width="425" height="350" frameborder="1" src="http://stefanos990.com/scripts/pie-chart/"></iframe></td>
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
<script type="text/javascript">
	$(function () {
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
});
</script>