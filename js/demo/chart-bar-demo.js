
   // setup 
   const data = {
    labels: [
        'January',
        'February',
        'March',
        'April'
    ],
    datasets: [{
        type: 'bar',
        data: [4215, 5312, 6251, 7841, 9821, 13000],
        label: "GP",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
    },{
        type: 'bar',
        data: [1000, 4444, 9999, 2222, 2500, 15000],
        label: "Dental",
        backgroundColor: "#D39292",
        hoverBackgroundColor: "#D6A0A0",
        borderColor: "#D39292",
    },{
        type: 'bar',
        data: [3000, 1000, 5500, 7111, 8888, 10984],
        label: "Specialist",
        backgroundColor: "#714288",
        hoverBackgroundColor: "#7D5193",
        borderColor: "#714288",
    }],
   
    };

    // config 
   const config = {
    type: 'scatter',
    data: data,
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );