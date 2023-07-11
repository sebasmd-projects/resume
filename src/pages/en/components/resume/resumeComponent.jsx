import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'
import ContactComponent from '@/pages/en/components/resume/contactResume'
import PythonReumeComponent from '@/pages/en/components/resume/pythonResume'
import QAResume from '@/pages/en/components/resume/qaResume'
import TableResume from '@/pages/en/components/resume/tableReume'
import SoftSkillsResume from '@/pages/en/components/resume/softSkillsResume'

export default function ResumeComponent() {

    const downloadPDF = () => {
        const url = "https://sebasmoralesd.com/cv-sebastian-morales.pdf"
        window.open(url, '_blank')
    }

    return (
        <div className="card mb-4">
            <div id="resume" className="card-header">Curriculum</div>
            <div className="card-body">
                <div className="sbp-preview">
                    <div className="sbp-preview-content">
                        <div className="row">
                            <ContactComponent />
                            <PythonReumeComponent />
                            <QAResume />
                            <TableResume />
                            <SoftSkillsResume />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer text-center">
                <div className="sbp-preview">
                    <div className="sbp-preview-content d-grid gap-2">
                        <Button variant="outline-success" onClick={downloadPDF}>Download <Icon.CloudArrowDown className='mx-1' /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}