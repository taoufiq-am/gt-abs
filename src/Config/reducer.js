const initialState = {
  users: [
    { id: "1", name: "John", email: "john@gmail.com" },
    { id: "2", name: "Killer", email: "killer@gmail.com" }
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_user":
      return { ...state, users: [...state.users, action.payload] }

    case "Update_user":
      const user = state.users.find(
        (u) => u.id === parseInt(action.payload.id)
      )
      if (user) {
        user.name = action.payload.name;
        user.email = action.payload.email;
      }
      return state
    case "Delete_user":
      return {
        ...state,
        users: [
          ...state.users.filter((u) => u.id !== parseInt(action.payload)),
        ]
      }
    default: return state
  }
}
export default reducer;