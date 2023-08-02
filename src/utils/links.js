import {BiBarChart, BiCalendarEdit, BiUserPin} from "react-icons/bi"
import {MdQueryStats} from "react-icons/md"

const links = [
    {
        id: 1,
        text: 'stats',
        path: '/',
        icon: <BiBarChart/>
    },
    {
        id: 2,
        text: 'all jobs',
        path: 'all-jobs',
        icon: <MdQueryStats/>
    },
    {
        id: 3,
        text: 'Add job',
        path: 'add-job',
        icon: <BiCalendarEdit/>
    },
    {
        id: 4,
        text: 'Profile',
        path: 'profile',
        icon: <BiUserPin/>
    },
]

export default links