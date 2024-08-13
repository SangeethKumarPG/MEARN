import React from "react";
import { Link } from "react-router-dom";

function WatchHistory() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link
          to="/home"
          style={{ textDecoration: "none", color: "black", fontWeight: "750" }}
        >
          <i className="fa-solid fa-arrow-left me-1"></i>&nbsp;Back to home
        </Link>
      </div>
      <table className="table table-striped border rounded container mb-5 mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Cloudkid</td>
            <td>https://www.youtube.com/watch?v=n9SkxksDuWU</td>
            <td>07-08-2024 11:30AM</td>
            <td>
              <button className="btn btn-light text-danger border-0">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default WatchHistory;
