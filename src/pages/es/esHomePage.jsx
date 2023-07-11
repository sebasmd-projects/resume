import RootLayout from '@/pages/layouts/rootLayout'

import NavBar from '@/pages/ui/navbar/navBar'
import Footer from '@/pages/ui/footer/footer'

import ResumeComponent from '@/pages/es/components/resume/resumeComponent'

import '@/pages/styles/Index.module.css'

export default function EsHomePage() {

    return (
        <RootLayout
            title={["Desarrollador Python", "Ingeniero AQA"]}
            description="Sebastian Morales es un desarrollador Python con un enfoque en Django y Django REST Framework como frameworks, además de esto cuenta con experiencia como ingeniero de control de calidad en varios marcos y herramientas de automatización."
            keywords={["python", "react", "django", "django rest framework", "hoja de vida", "cv", "rest", "api"]}
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

