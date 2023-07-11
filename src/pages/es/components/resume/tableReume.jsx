import ChangeTable from "@/pages/functions/changeTable";

export default function TableResume() {
    const isMobile = ChangeTable()

    if (isMobile) {
        return (
            <div className="col-12">
                <h2 className="text-center">HABILIDADES</h2>
                <div className="row">

                    <div className="col-12">
                        <h5 className="list-group-item text-center">Tecnologías</h5>
                        <div className="row d-flex">
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Python
                                    </li>
                                    <li>
                                        Java
                                    </li>
                                    <li>
                                        C#
                                    </li>
                                    <li>
                                        Cucumber
                                    </li>
                                    <li>
                                        AllureReports
                                    </li>
                                    <li>
                                        Django
                                    </li>
                                    <li>
                                        Pytest
                                    </li>
                                    <li>
                                        NUnit
                                    </li>
                                    <li>
                                        JUnit
                                    </li>
                                    <li>
                                        BDD
                                    </li>
                                    <li>
                                        JavaScript
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Gherkin
                                    </li>
                                    <li>
                                        Selenium
                                    </li>

                                    <li>
                                        SpecFlow
                                    </li>
                                    <li>
                                        Appium
                                    </li>
                                    <li>
                                        LoadRunner
                                    </li>
                                    <li>
                                        Git
                                    </li>
                                    <li>
                                        Rest/API
                                    </li>
                                    <li>
                                        RobotFramework
                                    </li>
                                    <li>
                                        HTML
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                    <li>
                                        Next.js
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <h5 className="list-group-item text-center">Plataformas</h5>
                        <div className="row d-flex">
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Cypress
                                    </li>
                                    <li>
                                        Jenkins
                                    </li>
                                    <li>
                                        Jira
                                    </li>
                                    <li>
                                        Confluence
                                    </li>
                                    <li>
                                        Postman
                                    </li>
                                    <li>
                                        GitHub
                                    </li>
                                    <li>
                                        GitLab
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        SourceTree
                                    </li>
                                    <li>
                                        BrowserStack
                                    </li>
                                    <li>
                                        Katalon
                                    </li>
                                    <li>
                                        Wrike
                                    </li>
                                    <li>
                                        Team Foundation Server
                                    </li>
                                    <li>
                                        Citrix
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <h3 className="list-group-item text-center">Otros</h3>
                        <div className="row d-flex">
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Automatización
                                    </li>
                                    <li>
                                        Rendimiento
                                    </li>
                                    <li>
                                        Pruebas de API
                                    </li>
                                    <li>
                                        Pruebas en móviles
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Planificación de pruebas
                                    </li>
                                    <li>
                                        Pruebas Unitarias
                                    </li>
                                    <li>
                                        Metodologías ágiles
                                    </li>
                                    <li>
                                        Pruebas en bases de datos
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <h5 className="list-group-item text-center">Bases de datos</h5>
                        <div className="d-flex">
                            <ul className="list-inline mb-2 mx-auto justify-content-center">
                                MongoDB
                            </ul>
                            <ul className="list-inline mb-2 mx-auto justify-content-center">
                                Postgresql
                            </ul >
                            <ul className="list-inline mb-2 mx-auto justify-content-center">
                                MySQL
                            </ul>
                        </div>

                    </div>

                    <div className="col-12">
                        <h5 className="list-group-item text-center">Habilidades Blandas</h5>
                        <div className="row d-flex">
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Atención al detalle
                                    </li>
                                    <li>
                                        Pensamiento analítico
                                    </li>
                                    <li>
                                        Comunicación
                                    </li>
                                    <li>
                                        Resolución de problemas
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Flexibilidad y adaptabilidad
                                    </li>
                                    <li>
                                        Manejo del tiempo
                                    </li>
                                    <li>
                                        Manejo del estrés
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    

    return (
        <div className="col-12 table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="5" className="th-center">HABILIDADES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="5" className="table-active">Plataformas</td>
                    </tr>
                    <tr>
                        <td>Cypress</td>
                        <td>Jenkins</td>
                        <td>Jira</td>
                        <td>Confluence</td>
                        <td>Postman</td>
                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td>GitLab</td>
                        <td>SourceTree</td>
                        <td>BrowserStack</td>
                        <td>Katalon</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Wrike</td>
                        <td>Team Foundation Server</td>
                        <td>Citrix</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="5" className="table-active">Tecnologías</td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td>Java</td>
                        <td>C#</td>
                        <td>Cucumber</td>
                        <td>AllureReports</td>
                    </tr>
                    <tr>
                        <td>Django</td>
                        <td>Pytest</td>
                        <td>NUnit</td>
                        <td>JUnit</td>
                        <td>BDD</td>
                    </tr>
                    <tr>
                        <td>Gherkin</td>
                        <td>Selenium</td>
                        <td>JavaScript</td>
                        <td>SpecFlow</td>
                        <td>Appium</td>
                    </tr>
                    <tr>
                        <td>LoadRunner</td>
                        <td>Git</td>
                        <td>Rest/API</td>
                        <td>RobotFramework</td>
                        <td>HTML</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>CSS</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="5" className="table-active">Bases de datos</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>MongoDB</td>
                        <td>Postgresql</td>
                        <td>MySQL</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="5" className="table-active">Otros</td>
                    </tr>
                    <tr>
                        <td>Automatización</td>
                        <td>Rendimiento</td>
                        <td>Pruebas de API</td>
                        <td>Pruebas en móviles</td>
                        <td>Planificación de pruebas</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Pruebas Unitarias</td>
                        <td>Metodologías ágiles</td>
                        <td>Pruebas en bases de datos</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="5" className="table-active">Habilidades Blandas</td>
                    </tr>
                    <tr>
                        <td>Atención al detalle</td>
                        <td>Pensamiento analítico</td>
                        <td>Comunicación</td>
                        <td>Resolución de problemas</td>
                        <td>Flexibilidad y adaptabilidad</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Manejo del tiempo</td>
                        <td></td>
                        <td>Manejo del estrés</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}