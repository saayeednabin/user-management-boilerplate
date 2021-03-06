import { fork } from "redux-saga/effects";
import register from "./register";
import login from "./login";
import {
  watchGetAllMembers,
  watchGetMemberProfile,
  watchLoadEditMemberProfile,
  watchSetMemberProfile,
} from "./members";
import { watchGetProfile, watchSetProfile } from "./profile";

export default function* () {
  yield fork(register);
  yield fork(login);
  yield fork(watchGetAllMembers);
  yield fork(watchGetMemberProfile);
  yield fork(watchLoadEditMemberProfile);
  yield fork(watchSetMemberProfile);
  yield fork(watchGetProfile);
  yield fork(watchSetProfile);
}
