import React, { useState } from 'react';

function TicketSearch() {
  const [tickets, setTickets] = useState({ date: "", time: "" });
  const [data, setData] = useState([]);

  const handleOnChange = (e) => {
    setTickets({ ...tickets, [e.target.name]: e.target.value });
  }

  const handleOnClick = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            filterTickets(movie: "${tickets.movie}", date: "${tickets.date}") {
              showtime,
              availableseats
            }
          }
        `
      }),
    });

    const result = await response.json();
    setData(result.data.filterTickets);
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="movie" className="form-label">
              Movie Name
            </label>
            <input
              type="text"
              className="form-control"
              name="movie"
              id="movie"
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              name="date"
              id="date"
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-dark" onClick={handleOnClick}>
        Search Tickets
      </button>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Showtime</th>
            <th scope="col">Available Seats</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.showtime}</td>
              <td>{ticket.availableseats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketSearch;
