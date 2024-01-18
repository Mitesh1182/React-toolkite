import { all } from "axios";
import { watchGetUser } from "../user/usersaga";


const rootSaga = function* () {
  yield all([
    watchGetUser(),
    // Other forks
  ]);
};

export default rootSaga;