import React from "react"
const Object = () => {
  const motor = {
    // property
    merk: "Honda",
    tipe: "Beat",
    warna: "Hitam",
    bensin: "Pertamax",
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
      <h1>Motor</h1>
      <ul>
        <li>Merk: {motor.merk}</li>
        <li>Tipe: {motor.tipe}</li>
        <li>Warna: {motor.warna}</li>
        <li>Bensin: {motor.bensin}</li>
        <li>Harga: {motor.harga}</li>
        <li>Plat: {motor.plat}</li>
        <li>Status: {motor.status}</li>
      </ul>
      <button onClick={() => motor.nyalakan()}>Nyalakan Mesin</button>
    </div>
  )
}

export default Object
