// mengimport module React ke dalam file js (wajib)
import React, { Component } from 'react';

class User extends Component {
    render() {
        // jika menggunakan class, props menggunakan kata kunci this
        // masing masing mengambil property dari html (id, class dan name)
        return React.createElement(
            'div', { className: `${this.props.class}` }, React.createElement(
                'h1', { id: `${this.props.id}` }, `Selamat Malam, ${this.props.name}`
            )
        );
    }
}

// eksport fungsi agarbisa diimport di app.js
export default User;