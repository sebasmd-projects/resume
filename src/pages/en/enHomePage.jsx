import RootLayout from '@/pages/layouts/rootLayout'

import FormattedDate from '@/pages/functions/getDate'

import NavBar from '@/pages/ui/navbar/navBar'
import Footer from '@/pages/ui/footer/footer'

import ResumeComponent from '@/pages/en/components/resume/resumeComponent'

import '@/pages/styles/Index.module.css'

export default function EnHomePage() {

    const formattedDate = FormattedDate()

    return (
        <RootLayout
            title={["Python Dev", "QA Engineer"]}
            description={`${formattedDate} - Focus on web development with Django and DRF, I have experience in quality control and automation tools.`}
            keywords={"python, react, django, django rest framework, resume, curriculum, cv, rest, api, automatización, qa, aqa, bdd"}
            robots="index, follow"
            revisit="30 days"
        >
            <main>
                <NavBar title="Python Dev | AQA Engineer" name="Cambiar a Español" locale="es" />
                <div className="px-4 mt-n10 ">
                    <div className="row">
                        <div className="col-lg-12 order-lg-1 order-2 ">
                            <ResumeComponent />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </RootLayout>
    )
}

