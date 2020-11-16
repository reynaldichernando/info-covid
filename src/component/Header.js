import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="app-header">
            <nav>
                <ul>
                    <li>Logo</li>
                    <li>
                        <Link to="/">Beranda</Link>
                    </li>
                    <li>
                        <Link to="/provinsi">Data Provinsi</Link>
                    </li>
                </ul>
            </nav>
            <span>LAYANAN DARURAT 0811 1211 2112</span>
        </header>
    );
}

export default Header;