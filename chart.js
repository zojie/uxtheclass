let data = {
  labels: ["", ""],
  series: [82, 18]
};

let chartOptions = {
  labelInterpolationFnc: function(value) {
    return value[0];
  },
  donut: true,
  donutWidth: 20,
  donutSolid: true,
  startAngle: 0,
  showLabel: false
};

let responsiveOptions = [
  [
    "screen and (min-width: 640px)",
    {
      chartPadding: 10,
      // labelOffset: 100,
      labelDirection: "neutral",
      labelInterpolationFnc: function(value) {
        return value;
      }
    }
  ],
  [
    "screen and (min-width: 1024px)",
    {
      // labelOffset: 80,
      chartPadding: 10
    }
  ]
];

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  // let activeTab = e.target // newly activated tab
  // if(e.target.id = "tabs-requirement"){
    new Chartist.Pie("#chart1", data, chartOptions, responsiveOptions);
  // }
  // console.log(activeTab);
  // e.relatedTarget // previous active tab
});
