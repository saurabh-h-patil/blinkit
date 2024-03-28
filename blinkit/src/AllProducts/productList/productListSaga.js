import { put, takeLatest } from "redux-saga/effects";
import modified from "../../lib/data/modified.json";

import {
  getProducts,
  getProductsFailed,
  getProductsSuccess,
} from "./productListSlice";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getProductsListAction(action) {
  try {
    yield console.log("Request inside getProducts Saga: ", action);
    const response = yield modified;
    console.log({ response });
    if (!response) {
      // Return error
      yield put(getProductsFailed({ err: "Unable to load products" }));
      return;
    }

    yield put(getProductsSuccess({ results: response.products }));
  } catch (e) {
    console.log("Error: ", e);
    yield put(getProductsFailed({ err: "Unable to load products" }));
  }
}

function* watchGetProductsList() {
  yield takeLatest(getProducts, getProductsListAction);
}

export default watchGetProductsList;
