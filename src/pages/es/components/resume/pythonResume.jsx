import style from '@/pages/styles/Index.module.css'

export default function PythonReumeComponent() {
    return (
        <div className="col-md-6">
            <h3>
                Desarrollador Python
            </h3>
            <p align="justify">
                Soy un desarrollador Python con un enfoque en <strong>Django</strong> y <strong>Django REST Framework</strong>,
                utilizando vistas basadas en clases para crear aplicaciones web eficientes, fáciles de mantener y escalables.
                Tengo experiencia en la integración de funciones nativas de Python en entornos web,
                aprovechando el poder de Python para brindar servicios web de alta calidad.
            </p>
            <p align="justify">
                Mi experiencia incluye pruebas unitarias y de integración con <strong>Pytest</strong>,
                asegurando la confiabilidad y estabilidad de las aplicaciones que desarrollo.
                Estoy familiarizado con la biblioteca drf-yasg,
                que permite la generación automática de documentación API para facilitar la colaboración fluida con los miembros del equipo y las partes interesadas externas.
            </p>
            <p align="justify">
                Tengo conocimiento de análisis de datos con las bibliotecas de NumPy y Pandas,
                puedo procesar y manipular grandes conjuntos de datos de manera eficiente, agregando valor a los proyectos en los que trabajo.
                Mi experiencia en <strong>PostgreSQL</strong> me permite diseñar y mantener sistemas de bases de datos cumpliendo los requisitos de las aplicaciones web complejas.
            </p>
            <p align="justify">
                Tengo experiencia en la creación de consultas avanzadas y la gestión de datos utilizando el ORM de Django y los administradores personalizados,
                optimizando el rendimiento y la flexibilidad de las aplicaciones que desarrollo. Además, tengo conocimientos en otras bibliotecas del ecosistema Django,
                como <span className={style.tooltip}>Celery<span className={style.tooltiptext}>Celery es una biblioteca de Python que se utiliza para realizar tareas en segundo plano o tareas programadas de manera asíncrona. Es ampliamente utilizada para la gestión de tareas asincrónicas en aplicaciones Django.</span>
                </span>, ampliando aún más las posibilidades de los proyectos en los que contribuyo.
            </p>
            <p>
                Al combinar mi experiencia en Python, Django y dedicación a las mejores prácticas, 
                confío en mi capacidad para crear aplicaciones web de alta calidad adaptadas a las necesidades de cualquier proyecto.
            </p>
        </div>
    )
}

