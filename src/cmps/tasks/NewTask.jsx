import React, {useState} from 'react';
import ContentTask from './ContentTask';
import { SideBar } from './SideBar';
import { AddFile, AddLabel, DueDate, PeopleAssigned } from './modals';
import { TaskProvider } from '../../context/TaskContext.jsx';
import { AiOutlineConsoleSql } from 'react-icons/ai';


const NewTask = ({ match }) => {
    const [toggleMode, setToggleMode] = useState({
        label: false,
        pplAssigned: false,
        dueDate: false,
        file: false
    })
    const { projectId } = match.params
    const IsClicked = () => {
        const isClicked = Object.keys(toggleMode).filter(k => toggleMode[k])
        switch (isClicked[0]) {
            case 'label':
                return <AddLabel
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                />
            case 'pplAssigned':
                return <PeopleAssigned
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                />
            case 'dueDate':
                return <DueDate
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                />
            case 'file':
                return <AddFile
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                />
            default:
                break;
        }
        return null;
    }

    return (
        <TaskProvider>
            <div className="main-task flex justify-center">
                <ContentTask setToggleMode={setToggleMode} projectId={projectId} />
                <SideBar setToggleMode={setToggleMode} />
                <IsClicked />
            </div>
        </TaskProvider>

    )
}

export default NewTask;