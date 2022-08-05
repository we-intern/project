
   // setup 
   const data05 = {
    labels: ['00:00 ', '01:00', '02:00 ', '12:00 ', '14:00 ', '16:00 ', '23:59'],
    datasets: [{
      label: 'Gross',
      data: [65, 59, 80, 81, 26, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    }]
  };

    // config 
    const config05 = {
        type: 'line',
        data: data05,
      };

    // render init block
    const linechart2 = new Chart(
      document.getElementById('owner'),
      config05
    );