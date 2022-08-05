
   // setup 
   const data02 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Looping tension',
      data: [65, 59, 80, 81, 26, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    }]
  };

    // config 
    const config02 = {
        type: 'line',
        data: data02,
      };

    // render init block
    const linechart = new Chart(
      document.getElementById('linechart'),
      config02
    );