export default userReducer = function (state = [], action) {
  //console.log('itemsReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'SET_USERDATA_AVAILABLE':
      return {
        ...state,
        userDataAvailable: action.userDataAvailable
      }
    default:
      return {
        ...state,
        userDataAvailable: true
      }
  }
}
