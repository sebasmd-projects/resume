import style from '@/pages/styles/Index.module.css'

export default function PythonReumeComponent() {
    return (
        <div className="col-md-6">
            <h3>
                Python Developer
            </h3>
            <p align="justify">
                I am a Python developer with a focus on <strong>Django</strong> and <strong>Django REST Framework</strong>,
                using class-based views to create efficient, maintainable, and scalable web applications.
                I have experience integrating Python&apos;s native features into web environments,
                leveraging the power of Python to deliver high-quality web services.
            </p>
            <p align="justify">
                My experience includes unit and integration testing with <strong>Pytest</strong>,
                ensuring reliability and stability in the applications I develop.
                I am familiar with the drf-yasg library,
                which enables automatic API documentation generation to facilitate seamless collaboration with team members and external stakeholders.
            </p>
            <p align="justify">
                I have knowledge of data analysis using NumPy and Pandas libraries,
                allowing me to efficiently process and manipulate large datasets, adding value to the projects I work on.
                My experience with <strong>PostgreSQL</strong> allows me to design and maintain database systems that meet the requirements of complex web applications.
            </p>
            <p align="justify">
                I have experience in creating advanced queries and managing data using Django&apos;s ORM and custom administrators,
                optimizing performance and flexibility in the applications I develop. Additionally, I have knowledge of other libraries in the Django ecosystem,
                such as <span className={style.tooltip}>Celery<span className={`${style.tooltiptext} mx-4`}>Celery is a Python library used for performing background or scheduled tasks asynchronously. It is widely used for managing asynchronous tasks in Django applications.</span>
                </span>, further expanding the possibilities of the projects I contribute to.
            </p>
            <p>
                By combining my expertise in Python, Django, and dedication to best practices,
                I am confident in my ability to create high-quality web applications tailored to the needs of any project.
            </p>
        </div>
    )
}

