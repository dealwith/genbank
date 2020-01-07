import React from "react";
import { connect } from "react-redux";

import { history } from "../../helpers";
import { alertActions } from "../../actions";

const Notification = props => {
  const { alert } = props;

  history.listen((location, action) => {
    props.clearAlerts();
  });

  const closeNotification = () => props.clearAlerts();

  return (
    <>
      {alert.message && (
        <div className={`alert g-alert ${alert.type}`}>
          {alert.message}
          <button
            className="g-alert__close"
            aria-labelledby="Close Notification"
            onClick={closeNotification}
          >
            <span className="g-hide-visually">Close</span>
            <svg className="g-alert__close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedNotification = connect(mapState, actionCreators)(Notification);
export { connectedNotification as Notification };
