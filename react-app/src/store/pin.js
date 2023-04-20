// TODO: CONSTANTS
const ALL_PINS = 'ALL_PINS';
const SINGLE_PIN = 'SINGLE_PIN';


// TODO: ACTION CREATORS
export const actionAllPins = (pins) => {
  return { type: ALL_PINS, pins }
}

export const actionSinglePin = (pin) => {
  return { type: SINGLE_PIN, pin}
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
    default: return { ...state }
  }
}

export default pinsReducer;
