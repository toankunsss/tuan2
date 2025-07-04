import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Dashboard from '../pages/Dashboard'
import MyTasks from '../pages/MyTasks'
import NotFound from '../pages/NotFound'
import Setting from '../pages/Setting'
import VitalTask from '../pages/VitalTask'
import TaskCategory from '../pages/TaskCategory'

const Approuter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='task' element={<MyTasks/>}/>
                <Route path='vitalTask' element={<VitalTask/>}/>
                <Route path='taskcategory' element={<TaskCategory/>}/>
                <Route path='setting' element={<Setting/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Approuter
