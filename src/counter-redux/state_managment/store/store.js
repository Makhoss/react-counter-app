import {configureStore  } from "@reduxjs/toolkit";
import { Reducer } from "../reducers/reducers";

export const store=configureStore({reducer:Reducer})