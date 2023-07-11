import ChangeTable from "@/pages/functions/changeTable";

export default function TableResume() {
    const isMobile = ChangeTable()

    if (isMobile) {
        return (
            <div className="col-12">
                <h2 className="text-center">SKILLS</h2>
                <div className="row">

                    <div className="col-12">
                        <h5 className="list-group-item text-center">Technologies</h5>
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
                        <h5 className="list-group-item text-center">Platforms</h5>
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
                            <div className="col-6">
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
                        <h3 className="list-group-item text-center">Others</h3>
                        <div className="row d-flex">
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Automation
                                    </li>
                                    <li>
                                        Performance
                                    </li>
                                    <li>
                                        API Testing
                                    </li>
                                    <li>
                                        Mobile Testing
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Test Planning
                                    </li>
                                    <li>
                                        Unit Testing
                                    </li>
                                    <li>
                                        Agile Methodology
                                    </li>
                                    <li>
                                        Database Testing
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <h5 className="list-group-item text-center">Databases</h5>
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
                        <h5 className="list-group-item text-center">Soft Skills</h5>
                        <div className="row d-flex">
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Attention to detail
                                    </li>
                                    <li>
                                        Analytical Thinking
                                    </li>
                                    <li>
                                        Communication
                                    </li>
                                    <li>
                                        Problem solving
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-inline mb-2 mx-auto justify-content-center">
                                    <li>
                                        Flexibility
                                    </li>
                                    <li>
                                        Time management
                                    </li>
                                    <li>
                                        Stress management
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
                        <th colSpan="5" className="th-center">SKILLS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="5" className="table-active">Platforms</td>
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
                        <td colSpan="5" className="table-active">Technologies</td>
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
                        <td colSpan="5" className="table-active">Databases</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>MongoDB</td>
                        <td>Postgresql</td>
                        <td>MySQL</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="5" className="table-active">Others</td>
                    </tr>
                    <tr>
                        <td>Automation</td>
                        <td>Performance</td>
                        <td>API Testing</td>
                        <td>Mobile Testing</td>
                        <td>Test Planning</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Unit Testing</td>
                        <td>Agile Methodology</td>
                        <td>Database Testing</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="5" className="table-active">Soft Skills</td>
                    </tr>
                    <tr>
                        <td>Attention to detail</td>
                        <td>Analytical Thinking</td>
                        <td>Communication</td>
                        <td>Problem solving</td>
                        <td>Flexibility</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Time management</td>
                        <td></td>
                        <td>Stress management</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}