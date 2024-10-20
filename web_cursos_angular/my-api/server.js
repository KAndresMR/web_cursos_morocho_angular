const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simulación de datos de cursos
let courses = [
    { id: 1, nameCourse: 'Curso de Diseño Web', nameInstructor: 'María López', startDate: '15/10/2024', duration: '6', description: 'Explora el diseño web moderno utilizando HTML5, CSS3 y herramientas de diseño gráfico.', showDetails: false },
    { id: 2, nameCourse: 'Curso de Ciberseguridad', nameInstructor: 'Andres Morocho', startDate: '30/05/2024', duration: '10', description: 'Aprende los fundamentos de la programación en varios lenguajes.', showDetails: false },
    { id: 3, nameCourse: 'Gestion Empresarial', nameInstructor: 'Roberto Garcia', startDate: '15/06/2024', duration: '16', description: 'Aprende los fundamentos de la gestión empresarial.', showDetails: false },
    { id: 4, nameCourse: 'Vision por Computador', nameInstructor: 'Vladimir Roblez', startDate: '31/10/2024', duration: '18', description: 'Aprende los fundamentos de visión por computador en varios aspectos.', showDetails: false },
    { id: 5, nameCourse: 'Programación Web', nameInstructor: 'Critian Timbi', startDate: '22/01/2024', duration: '20', description: 'Aprende los fundamentos de la programación web en varios lenguajes.', showDetails: false },
    { id: 6, nameCourse: 'Desarrollo de Aplicaciones Móviles', nameInstructor: 'Ana Torres', startDate: '12/03/2024', duration: '14', description: 'Crea aplicaciones móviles para Android y iOS utilizando herramientas modernas.', showDetails: false },
    { id: 7, nameCourse: 'Inteligencia Artificial', nameInstructor: 'Carlos Mendoza', startDate: '05/04/2024', duration: '8', description: 'Introducción a la inteligencia artificial y sus aplicaciones en la vida real.', showDetails: false },
    { id: 8, nameCourse: 'Análisis de Datos', nameInstructor: 'María Fernández', startDate: '10/07/2024', duration: '12', description: 'Aprende a analizar datos y obtener información valiosa a partir de ellos.', showDetails: false },
    { id: 9, nameCourse: 'Marketing Digital', nameInstructor: 'Laura Gómez', startDate: '01/05/2024', duration: '10', description: 'Estrategias de marketing digital para potenciar tu negocio en línea.', showDetails: false },
    { id: 10, nameCourse: 'Fotografía Digital', nameInstructor: 'José Pérez', startDate: '20/09/2024', duration: '5', description: 'Curso práctico de fotografía digital y edición de imágenes.', showDetails: false },
    { id: 11, nameCourse: 'Ciencia de Datos', nameInstructor: 'Sofia Martinez', startDate: '15/11/2024', duration: '15', description: 'Estudia la ciencia de datos y aprende a trabajar con grandes volúmenes de información.', showDetails: false },
    { id: 12, nameCourse: 'Robótica', nameInstructor: 'Diego Ríos', startDate: '02/12/2024', duration: '8', description: 'Construcción y programación de robots utilizando herramientas y técnicas modernas.', showDetails: false },
    { id: 13, nameCourse: 'Blockchain y Criptomonedas', nameInstructor: 'Lucía Rojas', startDate: '25/01/2025', duration: '6', description: 'Conoce el funcionamiento del blockchain y cómo invertir en criptomonedas.', showDetails: false },
    { id: 14, nameCourse: 'UX/UI Design', nameInstructor: 'Fernando López', startDate: '10/03/2025', duration: '12', description: 'Aprende sobre diseño de experiencia de usuario e interfaz de usuario.', showDetails: false },
    { id: 15, nameCourse: 'Gestión de Proyectos', nameInstructor: 'Cristina Vallejo', startDate: '05/02/2025', duration: '8', description: 'Estrategias y herramientas para una gestión efectiva de proyectos.', showDetails: false }
];


// Rutas
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

    app.get('/api/courses/:id/additional-info', (req, res) => {
    const courseId = parseInt(req.params.id); // Convierte a número
    const course = courses.find(c => c.id === courseId);

    if (course) {
        const additionalInfo = {
            dato: course.description // Cambia esto para devolver la descripción del curso
        };
        res.json(additionalInfo);
    } else {
        res.status(404).json({ message: 'Curso no encontrado' });
    }
});

  

app.post('/api/courses', (req, res) => {
    const newCourse = { id: courses.length + 1, ...req.body };
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

app.delete('/api/courses/:id', (req, res) => {
    const { id } = req.params;
    courses = courses.filter(course => course.id !== parseInt(id));
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
