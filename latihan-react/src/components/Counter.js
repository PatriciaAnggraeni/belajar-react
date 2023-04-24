// mengimport module React dan class Component ke dalam file js (wajib)
import React, { Component } from 'react';

// lakukan extends class terhadap class Component
class Counter extends Component {

    // jika menggunakan constructor, wajib diberi super keyword
    constructor() {
        super();

        // buat variabel counter
        this.counter = 0;

        // buat state, yang isinya object
        this.state = {
            // beri nilainya berdasarkan variabel counter
            counter: this.counter
        }
    }

    // membuat method untuk menambahkan nilai counter
    increaseCount() {
        // menggunakan setState untuk merubah nilai counter
        this.setState( {
            counter: this.counter += 1
        } )
    }

    // membuat nethod untuk mengurangi nilai counter
    decreaseCount() {
        // beri kondisi jika nilai counter sudah mencapai nol
        if (this.counter === 0) {
            // jika iya, set nilai counter ke nol (biar nggak mines)
            this.counter = 0;
        } else {
            // selama bukan nol, kurangi nilainya
            this.setState( {
                counter: this.counter -= 1
            } )
        }
    }

    // implementasi method render, return JSX
    render() {
        return (
            <div>
                <h1>Counter Number</h1>
                <h2>{this.state.counter}</h2>

                {/* beri tag button, kasih atibut onClick agar penambahan / pengurangan nilai dapat bekerja */}
                <button onClick={ () => this.increaseCount() }>Tambah Nilai</button>
                <button onClick={ () => this.decreaseCount() }>Kurangi Nilai</button>
            </div>
        )
    }

}

// eksport fungsi agar bisa diimport di app.js
export default Counter;