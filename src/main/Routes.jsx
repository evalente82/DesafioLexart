/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import StockCrud from "../components/stock/stockCrud";
import Array from "../components/stock/Array";
import Hashmap from "../components/stock/Hashmap";
import IdAleatorio from "../components/stock/IdAleatorio";

export default props =>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/stock" element={<StockCrud />} />
    <Route path="/array" element={<Array />} />
    <Route path="/hashmap" element={<Hashmap />} />
    <Route path="/idaleatorio" element={<IdAleatorio />} />
    <Route path="*" element={<Home />} />
  </Routes>