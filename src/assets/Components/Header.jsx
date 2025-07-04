// Header.jsx
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import styles from "./Header.module.css";

const menu = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },

    {
        label: "Services",
        to: "/services",
        submenu: [
            { label: "Web Design", to: "/services/web-design" },
            { label: "SEO", to: "/services/seo" },
            { label: "Marketing", to: "/services/marketing" },
        ]
    },
    { label: "Contact", to: "/contact" }
];

export default function Header() {
    return (

        <header className="border-bottom shadow-sm">
            {/* Top Info Row */}
            <div className="container py-3">
                <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-md-6 d-flex align-items-center">
                        <img
                            src="/images/logo-group.png"
                            alt="Compactor Logo"
                            style={{ maxHeight: 60 }}
                            className="me-2"
                        />

                    </div>

                    {/* Info */}
                    <div className="col-md-6 d-none d-md-flex justify-content-around text-center">
                        <div>
                            <div className="fw-bold">📍 Our Address</div>
                            <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                                125 Golden St, New York, NY
                            </div>
                        </div>
                        <div>
                            <div className="fw-bold">🕒 Work Time</div>
                            <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                                hi@compactor.com
                            </div>
                        </div>
                        <div>
                            <div className="fw-bold">📞 Call Us Today</div>
                            <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                                548-661-322
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-9">
                        {/* Navigation */}
                        <nav className={styles.nav}>
                            <ul className={styles.navList}>
                                {menu.map((item, idx) => (
                                    <li className={styles.navItem} key={idx}>
                                        <NavLink
                                            to={item.to}
                                            className={({ isActive }) =>
                                                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                            }
                                            end={!item.submenu}
                                        >
                                            {item.label}
                                            {item.submenu && <span className={styles.caret}><FaCaretDown /></span>}
                                        </NavLink>
                                        {item.submenu && (
                                            <ul className={styles.submenu}>
                                                {item.submenu.map((sub, subIdx) => (
                                                    <li key={subIdx}>
                                                        <NavLink
                                                            to={sub.to}
                                                            className={({ isActive }) =>
                                                                isActive ? `${styles.subNavLink} ${styles.active}` : styles.subNavLink
                                                            }
                                                        >
                                                            {sub.label}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    {/* Search, Cart, Contact Button */}
                    <div className="col-md-3 d-flex justify-content-end align-items-center gap-3">

                        <button className="btn btn-warning fw-bold">CONTACT US</button>
                    </div>
                </div>
            </div>

        </header>

    );
}
