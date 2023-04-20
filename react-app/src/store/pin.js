// TODO: CONSTANTS
const ALL_PINS = 'ALL_PINS';


// TODO: ACTION CREATORS
export const actionAllPins = (pins) => {
  return { type: ALL_PINS, pins }
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
  const response = await fetch('/api/pins/')

  if (response.ok) {
    const data = await response.json();
    const normalized = normalizePins(data.pins);
    dispatch(actionAllPins(normalized))
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
    default: return { ...state }
  }
}

export default pinsReducer;
