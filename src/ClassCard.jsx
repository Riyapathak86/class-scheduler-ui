import React from "react";
import "./index.css"; 

function ClassCard() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="container mt-4 px-3">
      <h3 className="fw-bold mb-4 text-center text-md-start">Schedule Your Class</h3>

      <div className="row g-4">
       
        <div className="col-12 col-md-4">
          <img
            src="/student.jpg"
            alt="student"
            className="img-fluid rounded-4 shadow w-100 mb-3"
          />

          <div className="d-grid gap-3">
            <button className="btn btn-light shadow border text-center rounded-3 py-3">
              📋 Copy Class Link
            </button>
            <button className="btn btn-primary fw-semibold rounded-3 py-3">
              Schedule Class
            </button>
          </div>
        </div>

       
        <div className="col-12 col-md-8">
          <h4 className="fw-bold">Foundation And The Basics</h4>
          <p className="text-muted mb-3" style={{ maxWidth: "600px" }} >
            A subset of AI that enables machines to learn from data and improve
            their performance over time without being explicitly programmed.
          </p>

          <div className="d-flex gap-3 flex-wrap text-secondary mb-4">
            <span>👥 55+ Class</span>
            <span>⏱ 2 Hours</span>
            <span>📁 Project 0</span>
          </div>

          <h6 className="fw-semibold mb-2">Choose A Date</h6>
          <div className="d-flex flex-wrap gap-2 overflow-auto mb-3 pb-1">
            {days.map((day, i) => (
              <button
                key={i}
                className="btn btn-outline-success border-success text-nowrap rounded-3"
                style={{ minWidth: "100px" }}
              >
                {day}
                <div>
                  <small>June 1</small>
                </div>
              </button>
            ))}
          </div>

          <p className="text-muted small mb-4">
            Note: You need to schedule two or three days before the actual class starts.
          </p>

          <p className="fw-semibold mb-2">Choose The Time Of The Day</p>
          <div className="d-flex flex-nowrap gap-2 overflow-auto pb-2">
            <button className="btn btn-outline-success border-success rounded-3 text-nowrap" style={{ minWidth: "120px" }}>
              Morning<br />
              <small>6 – 7 AM</small>
            </button>
            <button className="btn btn-outline-success border-success rounded-3 text-nowrap" style={{ minWidth: "120px" }}>
              Morning<br />
              <small>7 – 8 AM</small>
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
