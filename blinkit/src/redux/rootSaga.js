import { all, fork } from "redux-saga/effects";
import watchGetProductsList from "../pages/home/productsLayout/productList/productListSaga";
export default function* rootSaga() {
  yield all([fork(watchGetProductsList)]);
}
