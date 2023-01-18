import { Route, Routes } from "react-router-dom";
import { CompleteProfile } from "../screens/CompleteProfile";
import { Dashboard } from "../screens/Dashboard";
import { WorkoutTracker } from "../screens/WorkoutTracker";



export const Navigation = () => {
  return(
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/completeprofile" element={<CompleteProfile />}/>
      <Route path="/workouttracker" element={<WorkoutTracker />}/>
    </Routes>
  )
}
