var data = [
      { y: '2009-02-24', a: 55},
      { y: '2010-09-15', a: 132},
      { y: '2011-10-02', a: 168},
      { y: '2012-01-01', a: 199},
      { y: '2013-01-01', a: 459},
      { y: '2014-06-01', a: 698},
      { y: '2015-07-01', a: 756},
      { y: '2016-01-01', a: 802},
      { y: '2017-02-01', a: 865},
    ],
    config = {
      data: data,
      xkey: 'y',
      ykeys: ['a'],
      labels: ['Facebook Friends'],
      fillOpacity: 1,
      hideHover: 'auto',
      behaveLikeLine: false,
      resize: true,
      lineColors:['#4267b2'],
      axes: false,
      grid: false,
      smooth: false,
      pointSize: 0
  };
config.element = 'area-chart';
Morris.Area(config);