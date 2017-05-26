import { combineReducers } from 'redux';

const eventsReducer = (state = { events: [] }, { type, payload }) => {
  switch (type) {
    case 'ADD EVENTS':
      return { ...state, events: [...state.events, ...payload] };
    case 'EDIT EVENT':
      return { ...state,
        events: [...state.events.filter(event => event._id !== payload._id), payload.event],
      };
    case 'DELETE EVENT':
      return { ...state,
        events: state.events.filter(event => event._id !== payload._id),
      };
    default:
      return state;
  }
};

export default combineReducers({
  eventsReducer,
});