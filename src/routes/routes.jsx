import { Route, Routes } from "react-router-dom";
import { CompleteProfile } from "../screens/CompleteProfile";
import { Dashboard } from "../screens/Dashboard";
import { Item } from "../screens/Item";
import { Menu } from "../screens/Menu";
import { WorkoutTracker } from "../screens/WorkoutTracker";
import { Meal } from "../screens/Meal";



export const Navigation = () => {
  return(
    <Routes>
      <Route path="/" element={<CompleteProfile />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/completeprofile" element={<CompleteProfile />}/>
      <Route path="/workouttracker" element={<WorkoutTracker />}/>
      <Route path="/menu" element={<Menu />} />
      <Route path="/item" element={<Item />} />
      <Route path="/meal" element={<Meal />} />
    </Routes>
  )
}
