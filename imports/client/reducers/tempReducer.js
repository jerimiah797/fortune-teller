export default userReducer = function (state = [], action) {
  //console.log('itemsReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
}
