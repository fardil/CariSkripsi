import React, {useState} from 'react';
import axios from 'axios';
import qs from 'qs';
import './Assets/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Skripsi from "./Pages/Skripsi";

function App() {

  // const [value, setValue] = useState({
  //   skripsi: [],
  //   input: ''
  // });

  // const getData = async () => {
  //   const BASE_URL = "http://localhost:3030/skripsi-finder/query";

  // const headers = {
  //   'Accept': 'application/sparql-results+json,*/*;q=0.9',
  //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  // };

  //   // Query Sparql
  //   const queryData = {
  //     query:
  //       `PREFIX sf: <http://skripsifinder.com/skripsi#>

  //       SELECT ?judul ?nama ?npm ?peminatan ?tahun 
  //       WHERE
  //       {
  //         ?d    sf:judul    ?judul ;
  //               sf:nama    ?nama ;
  //               sf:npm    ?npm ;
  //               sf:peminatan    ?peminatan ;
  //               sf:tahun    ?tahun ;
  //         FILTER regex(?judul, "${value.input}") 
  //       }`
  //   };

  //   try {
  //     const { data } = await axios(BASE_URL, {
  //       method: 'POST',
  //       headers,
  //       data: qs.stringify(queryData)
  //     });
  //     console.log(data);

  //     // Convert Data
  //     const formatted_data = data.results.bindings.map((skripsi, index) => formatter(skripsi, index));
  //     console.log(formatted_data)

  //     setValue({
  //       ...value,
  //       skripsi: formatted_data
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // const formatter = (skripsi, index) => {
  //   return {
  //     "id": index,
  //     "judul": skripsi.judul.value,
  //     "nama": skripsi.nama.value,
  //     "npm": skripsi.npm.value,
  //     "peminatan": skripsi.peminatan.value,
  //     "tahun": skripsi.tahun.value
  //   }
  // }

  // const handleChange = event => {
  //   setValue({
  //     ...value,
  //     'input': event.target.value
  //   })
  // }

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Skripsi" component={Skripsi}></Route>
      </Router>
    </div>
  );
}

export default App;
