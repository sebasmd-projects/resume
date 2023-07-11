import RootLayout from '@/pages/layouts/rootLayout'

import NavBar from '@/pages/ui/navbar/navBar'
import Footer from '@/pages/ui/footer/footer'

import ResumeComponent from '@/pages/en/components/resume/resumeComponent'

import '@/pages/styles/Index.module.css'

export default function EnHomePage() {

    return (
        <RootLayout
            title={["Python Dev", "QA Engineer"]}
            description="Sebastian Morales is a Python Dev with a focus on Django and Django REST Framework, and a QA Engineer with experience in various automation frameworks and tools."
            keywords={["python", "react", "django", "django rest framework", "curriculum", "cv", "rest", "api"]}
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

