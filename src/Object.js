import React, { useState } from "react"
const Object = () => {
  let [mtr, setMtr] = useState({
    // property
    merk: "Honda",
    tipe: "Beat",
    warna: "Hitam",
    bensin: 20,
    harga: 10000000,
    plat: "B 1234 ABC",
    status: "OFF",
    // method
    nyalakan: () => {
      console.log("nyalakan mesin")
      //   jalankan setState untuk merubah data
      setMtr((data) => {
        return {
          // spread operator
          ...data,
          status: "ON",
          bensin: data.bensin - 5,
        }
      })
    },
  })
  const motor = {
    // property
    merk: "Honda",
    tipe: "Beat",
    warna: "Hitam",
    bensin: 20,
    harga: 10000000,
    plat: "B 1234 ABC",
    status: "OFF",
    // method
    nyalakan: () => {
      console.log("nyalakan mesin")
      motor.status = "ON"
      console.log(motor.status)
    },
  }
  return (
    <div>
      <h1> Motor </h1>{" "}
      <ul>
        <li> Merk: {mtr.merk} </li> <li> Tipe: {mtr.tipe} </li>{" "}
        <li> Warna: {mtr.warna} </li> <li> Bensin: {mtr.bensin}L </li>{" "}
        <li> Harga: {mtr.harga} </li> <li> Plat: {mtr.plat} </li>{" "}
        <li> Status: {mtr.status} </li>{" "}
      </ul>{" "}
      <button onClick={() => mtr.nyalakan()}> Nyalakan Mesin </button>{" "}
    </div>
  )
}

export default Object
