// TODO: CONSTANTS
const ALL_PINS = 'ALL_PINS';
const SINGLE_PIN = 'SINGLE_PIN';
const SAVE_PIN = 'SAVE_PIN';
const UNSAVE_PIN = 'UNSAVE_PIN';
const SAVED_PINS = 'SAVED_PINS';
const UPDATE_PIN = 'UPDATE_PIN';
const DELETE_PIN = 'DELETE_PIN';


// TODO: ACTION CREATORS
export const actionAllPins = (pins) => {
  return { type: ALL_PINS, pins }
}

export const actionSinglePin = (pin) => {
  return { type: SINGLE_PIN, pin }
}

export const actionSavePin = (pin) => {
  return { type: SAVE_PIN, pin }
}

export const actionUnsavePin = (pin) => {
  return { type: UNSAVE_PIN, pin }
}

export const actionSavedPins = (pins) => {
  return { type: SAVED_PINS, pins }
}

export const actionUpdatePin = (pin) => {
  return { type: UPDATE_PIN, pin }
}

export const actionDeletePin = (pinId) => {
  return { type: DELETE_PIN, pinId }
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
    // const normalized = normalizePins(data.pins);
    const shuffledPins = data.pins.sort(() => Math.random() - 0.5);
    dispatch(actionAllPins(shuffledPins))
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

export const thunkSavePin = (pinId) => async dispatch => {
  const response = await fetch(`/api/pins/savePin/${pinId}`, {
    method: 'POST'
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(actionSavePin(data.pin))
    return;
  }
}

export const thunkUnsavePin = (pinId) => async dispatch => {
  const response = await fetch(`/api/pins/unsavePin/${pinId}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(actionUnsavePin(data.pin))
    return;
  }
}

export const thunkSavedPins = () => async dispatch => {
  const response = await fetch(`/api/pins/savePin`)

  if (response.ok) {
    const data = await response.json();
    const normalized = normalizePins(data.saved_pins)
    dispatch(actionSavedPins(normalized));
    // ! WHAT IS THIS DOING
    return data.saved_pins.map(pin => pin.id)
  }
}

export const thunkUpdatePin = (pinId, title, description) => async dispatch => {
  const response = await fetch(`/api/pins/updatePin/${pinId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
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
    method: 'DELETE'
  })

  if (response.ok) {
    dispatch(actionDeletePin(pinId))
  }
}

// TODO: INITIAL SLICE STATE
const initialState = {
  allPins: {},
  singlePin: {},
  savedPins: {}
}


// TODO: REDUCER
const pinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PINS:
      return { ...state, allPins: { ...action.pins } }
    case SINGLE_PIN:
      return { ...state, singlePin: { ...action.pin } }
    case UPDATE_PIN:
      return { ...state, singlePin: { ...action.pin } }
    case DELETE_PIN:
      let newState = { ...state, allPins: { ...state.allPins }, singlePin: { ...state.singlePin } }
      delete newState.allPins[action.pinId]
      return newState
    case SAVE_PIN:
      let newSavedPins = { ...state, savedPins: { ...state.savedPins } };
      newSavedPins.savedPins[action.pin.id] = action.pin;
      return newSavedPins;
    case UNSAVE_PIN:
      let unsavePin = { ...state, savedPins: { ...state.savedPins } };
      delete unsavePin.savedPins[action.pin.id]
      return unsavePin
    case SAVED_PINS:
      return { ...state, savedPins: { ...action.pins } }
    default: return { ...state }
  }
}

export default pinsReducer;
