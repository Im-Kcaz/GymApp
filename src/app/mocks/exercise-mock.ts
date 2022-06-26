import IExercise from "../entities/Exercise";
import EXERCISE from "../enums/EXERCISE";

export const mockExercises1: IExercise[] = [
    {exercise: EXERCISE.SQUAT, weight: 100, reps: 5, sets: 3},
    {exercise: EXERCISE.BENCH, weight: 100, reps: 5, sets: 3},
    {exercise: EXERCISE.DEADLIFT, weight: 100, reps: 5, sets: 3},
    {exercise: EXERCISE.SQUAT, weight: 300, reps: 5, sets: 3},
    {exercise: EXERCISE.SQUAT, weight: 500, reps: 5, sets: 3}
];

export const mockExercises2: IExercise[] = [
    {exercise: EXERCISE.SQUAT, weight: 500, reps: 5, sets: 3},
    {exercise: EXERCISE.BENCH, weight: 500, reps: 5, sets: 3},
    {exercise: EXERCISE.DEADLIFT, weight: 500, reps: 5, sets: 3},
    {exercise: EXERCISE.SQUAT, weight: 500, reps: 5, sets: 3},
    {exercise: EXERCISE.SQUAT, weight: 700, reps: 5, sets: 3}
];

export default mockExercises1;