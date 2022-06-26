import IExerciseDay from "../entities/ExerciseDay";
import { mockExercises1, mockExercises2 } from "./exercise-mock";

const mockExerciseDays: IExerciseDay[] = [
    { exercises: mockExercises1, date: new Date("06/01/2022") },
    { exercises: mockExercises2, date: new Date("06/02/2022") }
];

export default mockExerciseDays;