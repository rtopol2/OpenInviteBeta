import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Event = ({ event }) => {
  const { title, start_time: startTime, end_time: endTime, attendees } = event;
  return (
    <div className="main">
      <h2>{title}</h2>
      <Link to={`/edit/${event._id}`}>
        <span className="btn-floating btn-large waves-effect waves-light right">
          <i className="right material-icons small blue">
            mode_edit
          </i>
        </span>
      </Link>
      <ul>
        <li>{startTime}</li>
        <li>{endTime}</li>
        { attendees.map(attendee => <li>{attendee.name}</li>)}
      </ul>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    attendees: PropTypes.array.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ events }, { match }) => ({
  event: events.find(event => event._id === match.params.event_id),
});

export default withRouter(connect(mapStateToProps)(Event));
