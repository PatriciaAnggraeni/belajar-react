// mengimport module React ke dalam file js (wajib)
import React, { Component } from 'react';

// menggunakan functional komponen
/* function Welcome() {
    return <h1>Welocme Back, User!</h1>
} */

// menggunakan class component
class Welcome extends Component {
    render() {
        return <h1>Welcome Back, User!</h1>
    }
}

// eksport fungsi agar bisa diimport di app.js
export default Welcome;