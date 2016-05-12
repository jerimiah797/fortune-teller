export default eventFormReducer = function (state = [], action) {
  //console.log('itemsReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SHOW_EVENT_FORM':
      return {
        ...state,
        visible: action.visible
      }
    default:
      return state;
  }
}
