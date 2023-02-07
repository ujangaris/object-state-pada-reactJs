import React from "react"

class Eventreact extends React.Component {
  kirimPesan(nama) {
    alert("kirim pesan kepada " + nama)
  }
  ubahTulisan(e) {
    e.target.innerHTML = "Kirim Pesan"
  }
  ubahLagi(e) {
    e.target.innerHTML = "Sentuh"
  }

  render() {
    return (
      <div>
        <h1>Eventreact</h1>
        {/*pada button onClick funcsi arrow function '()=>' agar datanya tidak dijalankan dua kali */}
        <button onClick={() => alert("Hallo World")}>Click Me</button>
        {/* arrow function juga bisa digunakan untuk menampilkan data namun harus menyertakan this di awal function kirimPesan dan e/event pada parameter arro, contoh dibawah */}
        <button onClick={(e) => this.kirimPesan("alex", e)}>Kirim Pesan</button>
        {/* jika tidak menggunakan arrow function dan event harus menggunakan method bind & menambahkan this pada awal function kirimPesan */}
        <button onClick={this.kirimPesan.bind(this, "agus")}>
          Kirim Pesan
        </button>
        <button
          onClick={this.kirimPesan.bind(this, "putri")}
          onMouseEnter={(e) => this.ubahTulisan(e)}
          onMouseOut={this.ubahLagi.bind(this)}
        >
          Sentuh
        </button>
      </div>
    )
  }
}
export default Eventreact
