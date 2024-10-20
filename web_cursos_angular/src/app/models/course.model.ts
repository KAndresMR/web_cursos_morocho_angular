// src/app/models/course.model.ts
export interface Course {
    id: number; // Agrega la propiedad id, hazla opcional si no siempre está presente
    nameCourse: string;
    nameInstructor: string;
    startDate: string;
    duration: string;
    description: string;
    showDetails: boolean;
    additionalInfo?: {
        dato?: string;
    } | null; // Permitir null en caso de no haber información adicional
}
