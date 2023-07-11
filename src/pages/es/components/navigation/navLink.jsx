import Link from "next/link"

export default function NavLink() {

    return (
        <div className="nav-sticky">
            <div className="card">
                <div className="card-body">
                    <ul className="nav flex-column" id="stickyNav">
                        
                        <hr />
                        <li className="nav-item">
                            <Link className="nav-link" href="#resume">
                                Hoja de Vida
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#proyect1">
                                ResumeAPP
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}