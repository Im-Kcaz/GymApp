import EXERCISE from "../enums/EXERCISE";
import IWarmup from "./Warmup";

interface IExercise {
    exercise: EXERCISE,
    weight: number,
    sets: number,
    reps: number,
    actualWeight?: number,
    rpe?: number,
    description?: string,
    warmups?: IWarmup
}

export default IExercise;