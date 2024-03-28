import { all, fork } from "redux-saga/effects";
import watchGetProductsList from "../AllProducts/productList/productListSaga";

export default function* rootSaga() {
  yield all([fork(watchGetProductsList)]);
}
