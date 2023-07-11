import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'
import ContactComponent from '@/pages/es/components/resume/contactResume'
import PythonReumeComponent from '@/pages/es/components/resume/pythonResume'
import QAResume from '@/pages/es/components/resume/qaResume'
import TableResume from '@/pages/es/components/resume/tableReume'
import SoftSkillsResume from '@/pages/es/components/resume/softSkillsResume'

export default function ResumeComponent() {

    const downloadPDF = () => {
        const url = "https://sebasmoralesd.com/cv-sebastian-morales.pdf"
        window.open(url, '_blank')
    }

    return (
        <div className="card mb-4">
            <h2 id="resume" className="card-header">Hoja de Vida</h2>
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
                        <Button className="btn btn-outline-success" onClick={downloadPDF}>Descargar <Icon.CloudArrowDown className='mx-1' /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}