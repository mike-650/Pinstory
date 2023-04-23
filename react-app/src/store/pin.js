// TODO: CONSTANTS
const ALL_PINS = 'ALL_PINS';
const SINGLE_PIN = 'SINGLE_PIN';
const UPDATE_PIN = 'UPDATE_PIN';
const DELETE_PIN = 'DELETE_PIN';


// TODO: ACTION CREATORS
export const actionAllPins = (pins) => {
  return { type: ALL_PINS, pins }
}

export const actionSinglePin = (pin) => {
  return { type: SINGLE_PIN, pin }
} 

export const actionUpdatePin = (pin) => {
  return { type: UPDATE_PIN, pin }
}

export const actionDeletePin = (pinId) => {
  return { type: DELETE_PIN, pinId}
}

// TODO: NORMALIZE DATA
const normalizePins = (data) => {
  let normalized = {};
  data.forEach(pin => {
    normalized[pin.id] = pin
  })
  return normalized
}

// TODO: THUNK AC'S
export const thunkAllPins = () => async dispatch => {
  const response = await fetch('/api/pins/allPins')

  if (response.ok) {
    const data = await response.json();
    const normalized = normalizePins(data.pins);
    dispatch(actionAllPins(normalized))
    return;
  }
}

export const thunkSinglePin = (pinId) => async dispatch => {
  const response = await fetch(`/api/pins/singlePin/${pinId}`)

  if (response.ok) {
    const data = await response.json()
    dispatch(actionSinglePin(data.pin))
    return;
  }
}

export const thunkUpdatePin = (pinId, title, description) => async dispatch => {
  const response = await fetch(`/api/pins/updatePin/${pinId}`, {
    method:'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ title: title, description: description })
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(actionUpdatePin(data.updatedPin));
    return;
  }
}

export const thunkDeletePin = (pinId) => async dispatch => {
  const response = await fetch(`/api/pins/deletePin/${pinId}`, {
    method:'DELETE'
  })

  if (response.ok) {
    dispatch(actionDeletePin(pinId))
  }
}

// TODO: INITIAL SLICE STATE
const initialState = {
  allPins: {},
  singlePin: {}
}


// TODO: REDUCER
const pinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PINS:
      return { ...state, allPins: { ...action.pins } }
    case SINGLE_PIN:
      return { ...state, singlePin: { ...action.pin }}
    case UPDATE_PIN:
      return { ...state, singlePin: { ...action.pin }}
    case DELETE_PIN:
      let newState = { ...state, allPins: { ...state.allPins }, singlePin: { ...state.singlePin}}
      delete newState.allPins[action.pinId]
      return newState
    default: return { ...state }
  }
}

export default pinsReducer;
