function calculation() {
//Y axis
  var Yvalue = [];
//X axis
  var Xvalue = [0];

  var w = document.getElementById("input").value;
  var x = parseInt(w);
  var n = 0;
//Math to do the conjecture. 
  while (x != 1) {
    if (x % 2 == 0) {
      x = x / 2;
      n += 1;
    } else {
      x = 3 * x + 1;
      n += 1;
    }

    Yvalue.push(x);
    Xvalue.push(n);

   
  }

  new Chart("chart", {
      //line graph
    type: "line",

    data: {
      labels: Xvalue,
      //line graph data
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "#FFFFFF",
          borderColor: "#FFFFFF",
          data: Yvalue,
        },
      ],
    },
    options: {
        //legend won't show up
      legend: { display: false },
        //title data
      title: {
        display: true,
        text: "The progression of the Collatz Conjecture",
        fontSize: 16,
        fontColor: "white",
      },
      scales: {
          //y axis data
        yAxes: [
          {
            ticks: { min: 1, max: Math.max(...Yvalue) }, 
          },
        ],
      },
    },
  });
//information shown to user
  document.getElementById("info").innerHTML =
    "The final number is " + x + " and it took " + n + " iterations.";
}
//scrolup data
function scrollup() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//allow the element to appear/ dissappear based on click.
function question() {
  if (document.getElementById("Explanation").style.display === "none") {
    document.getElementById("Explanation").style.display = "flex";
  } else {
    document.getElementById("Explanation").style.display = "none";
  }
}
