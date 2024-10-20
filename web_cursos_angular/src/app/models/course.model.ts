// src/app/models/course.model.ts
export interface Course {
    id: number;
    nameCourse: string;
    nameInstructor: string;
    startDate: string;
    duration: string;
    description: string;
    showDetails: boolean;
    additionalInfo?: {
        dato?: string; // Información adicional que puede o no estar presente
    } | null; // Permitir null en caso de no haber información adicional
}
