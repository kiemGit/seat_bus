const express = require('express');
const app = express();
const port = 3001;

// Example bus data
const busData = {
  busNumber: "123A",
  rows: 4,
  columns: 10,
 seats: [
    { seatNumber: 1, reserved: false },
    { seatNumber: 2, reserved: true },
    { seatNumber: 3, reserved: false },
    { seatNumber: 4, reserved: true },
    { seatNumber: 5, reserved: false },
    { seatNumber: 6, reserved: false },
    { seatNumber: 7, reserved: true },
    { seatNumber: 8, reserved: false },
    { seatNumber: 9, reserved: true },
    { seatNumber: 10, reserved: false },
    { seatNumber: 11, reserved: false },
    { seatNumber: 12, reserved: true },
    { seatNumber: 13, reserved: false },
    { seatNumber: 14, reserved: true },
    { seatNumber: 15, reserved: false },
    { seatNumber: 16, reserved: false },
    { seatNumber: 17, reserved: true },
    { seatNumber: 18, reserved: false },
    { seatNumber: 19, reserved: true },
    { seatNumber: 20, reserved: false },
    { seatNumber: 21, reserved: false },
    { seatNumber: 22, reserved: true },
    { seatNumber: 23, reserved: false },
    { seatNumber: 24, reserved: true },
    { seatNumber: 25, reserved: false },
    { seatNumber: 26, reserved: false },
    { seatNumber: 27, reserved: true },
    { seatNumber: 28, reserved: false },
    { seatNumber: 29, reserved: true },
    { seatNumber: 30, reserved: false },
    { seatNumber: 31, reserved: false },
    { seatNumber: 32, reserved: true },
    { seatNumber: 33, reserved: false },
    { seatNumber: 34, reserved: true },
    { seatNumber: 35, reserved: false },
    { seatNumber: 36, reserved: false },
    { seatNumber: 37, reserved: true },
    { seatNumber: 38, reserved: false },
    { seatNumber: 39, reserved: true },
    { seatNumber: 40, reserved: false }		
  ]
};

// Function to generate the seat map HTML
function generateSeatMap(bus) {
  let html = `
    <html>
      <head>
        <title>Bus Seat Map - ${bus.busNumber}</title>
      </head>
      <body>
        <h1>Seat Map for Bus ${bus.busNumber}</h1>
        <table border="1" cellpadding="10" cellspacing="0" style="text-align:center;">
  `;

  const { rows, columns, seats } = bus;

  let seatIndex = 0;
  for (let i = 0; i < rows; i++) {
    html += '<tr>'; // Start a new row
    for (let j = 0; j < columns; j++) {
      const seat = seats[seatIndex];
      const seatImage = seat.reserved ? 'a.png' : 'b.png';
      html += `<td><img src="${seatImage}" alt="Seat ${seat.seatNumber}" width="50" height="50"></td>`;
      seatIndex++;
    }
    html += '</tr>'; // End the row
  }

  html += `
        </table>
      </body>
    </html>
  `;

  return html;
}

// Serve the seat map dynamically
app.get('/', (req, res) => {
  const seatMapHtml = generateSeatMap(busData);
  res.send(seatMapHtml); // Send the generated HTML to the browser
});

// Serve static files (for images)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
