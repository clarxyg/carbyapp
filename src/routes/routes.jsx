import { Route, Routes } from "react-router-dom";
import { CompleteProfile } from "../screens/CompleteProfile";
import { Dashboard } from "../screens/Dashboard";
import { Drawer } from "../screens/Drawer";
import { Menu } from "../screens/Menu";
import { WorkoutTracker } from "../screens/WorkoutTracker";



export const Navigation = () => {
  return(
    <Routes>
      <Route path="/" element={<CompleteProfile />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/completeprofile" element={<CompleteProfile />}/>
      <Route path="/workouttracker" element={<WorkoutTracker />}/>
      <Route path="/menu" element={<Menu />} />
      <Route path="/drawer" element={<Drawer />} />
    </Routes>
  )
}
