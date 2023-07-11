import Link from "next/link"
import ChangeLanguage from "@/pages/functions/changeLanguage";

export default function NavLink() {

    return (
        <div className="nav-sticky">
            <div className="card">
                <div className="card-body">
                    <ul className="nav flex-column" id="stickyNav">
                        <ChangeLanguage title="Cambiar a Español" locale="es" />
                        <hr />
                        <li className="nav-item">
                            <Link className="nav-link" href="#resume">
                                Curriculum
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