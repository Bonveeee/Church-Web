const PlanVisit = () => {
  return (
    <div className="container">
      <h2>Plan Your Visit</h2>
      <p>
        Welcome to our church! We can't wait to meet you in person. Please take
        a moment to plan your visit by using the form below.
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="visit-date">Date of Visit:</label>
          <input type="date" className="form-control" id="visit-date" />
        </div>
        <div className="form-group">
          <label htmlFor="service-time">Service Time:</label>
          <select className="form-control" id="service-time">
            <option>8:00 AM</option>
            <option>9:30 AM</option>
            <option>11:00 AM</option>
            <option>6:00 PM</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea className="form-control" id="comments" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default PlanVisit;
