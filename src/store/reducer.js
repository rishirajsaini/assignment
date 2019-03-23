import { getUsers } from "../services/userService";
const intialState = {
  users: getUsers()
};

const reducer = (state = intialState, action) => {
  return state;
};

export default reducer;
