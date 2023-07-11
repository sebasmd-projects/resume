import 'bootstrap-icons/font/bootstrap-icons.css';

import ChangeLanguage from "@/pages/functions/changeLanguage";

export default function NavBar({title, name, locale}) {
    return (
        <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
            <div className="container-xl px-4">
                <div className="page-header-content pt-4">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto mt-4">
                            <h1 className="page-header-title">
                                <div className="page-header-icon"><i className="bi bi-chat-left-text-fill"></i></div>
                                Sebastián Morales
                            </h1>
                            <div className="page-header-subtitle">{title}</div>
                        </div>
                        <div className="col-auto mt-4">
                            <ChangeLanguage title={name} locale={locale} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}