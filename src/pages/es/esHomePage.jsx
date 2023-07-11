import RootLayout from '@/pages/layouts/rootLayout'

import NavBar from '@/pages/ui/navbar/navBar'
import Footer from '@/pages/ui/footer/footer'

import ResumeComponent from '@/pages/es/components/resume/resumeComponent'

import '@/pages/styles/Index.module.css'

export default function EsHomePage() {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    return (
        <RootLayout
            title={["Desarrollador Python", "Ingeniero AQA"]}
            description={`${formattedDate} - Enfoque en el desarrollo web con Django y DRF, tengo experiencia con el área de control de calidad y herramientas de automatización.`}
            keywords={"python, react, django, django rest framework, hoja de vida, cv, rest, api, automatización, qa, aqa, bdd"}
            robots="index, follow"
            revisit="30 days"
        >
            <main>
                <NavBar title="Desarrollador Python | Ingiero AQA" name="Switch to English" locale="en" />
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

