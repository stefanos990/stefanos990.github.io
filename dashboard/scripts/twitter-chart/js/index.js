var data = [
      { y: '2013-02-24', a: 16},
      { y: '2013-09-15', a: 26},
      { y: '2013-10-02', a: 21},
      { y: '2014-01-01', a: 45},
      { y: '2015-01-01', a: 98},
      { y: '2015-06-01', a: 124},
      { y: '2015-07-01', a: 121},
      { y: '2016-01-01', a: 143},
      { y: '2017-02-01', a: 189},
      { y: '2017-02-02', a: 192}
    ],
    config = {
      data: data,
      xkey: 'y',
      ykeys: ['a'],
      labels: ['Twitter Followers'],
      fillOpacity: 1,
      hideHover: 'auto',
      behaveLikeLine: false,
      resize: true,
      lineColors:['#1da1f2'],
      axes: false,
      grid: false,
      smooth: false,
      pointSize: 0,
      parseTime: false
  };
config.element = 'area-chart';
Morris.Area(config);
config.element = 'line-chart';
Morris.Line(config);
config.element = 'bar-chart';
Morris.Bar(config);
config.element = 'stacked';
config.stacked = true;
Morris.Bar(config);
Morris.Donut({
  element: 'pie-chart',
  data: [
    {label: "Friends", value: 30},
    {label: "Allies", value: 15},
    {label: "Enemies", value: 45},
    {label: "Neutral", value: 10}
  ]
});