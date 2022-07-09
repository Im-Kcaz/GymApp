import IExercise from "../entities/Exercise";
import EXERCISE from "../enums/EXERCISE";

export const mockExercises1: IExercise[] = [
    { exercise: EXERCISE.SQUAT, 
        weight: 100, 
        reps: 5, 
        sets: 3, 
        actualWeight: 105, 
        rpe: 10, 
        description: "Squat", 
        warmups: [
            { weight: 10, sets: 10, reps: 10 },
            { weight: 20, sets: 10, reps: 10 }
        ] 
    },
    { exercise: EXERCISE.BENCH, weight: 100, reps: 5, sets: 3,  warmups: [] },
    { exercise: EXERCISE.DEADLIFT, weight: 100, reps: 5, sets: 3,  warmups: [] },
    { exercise: EXERCISE.SQUAT, weight: 300, reps: 5, sets: 3,  warmups: [] },
    { exercise: EXERCISE.SQUAT, weight: 500, reps: 5, sets: 3,  warmups: [] }
];

export const mockExercises2: IExercise[] = [
    { exercise: EXERCISE.SQUAT, weight: 500, reps: 5, sets: 3,  warmups: [] },
    { exercise: EXERCISE.BENCH, weight: 500, reps: 5, sets: 3,  warmups: [] },
    { exercise: EXERCISE.DEADLIFT, weight: 500, reps: 5, sets: 3,  warmups: [] },
    { exercise: EXERCISE.SQUAT, weight: 500, reps: 5, sets: 3,  warmups: [] },
    { exercise: EXERCISE.SQUAT, weight: 700, reps: 5, sets: 3,  warmups: [] }
];

export default mockExercises1;