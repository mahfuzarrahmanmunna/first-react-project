// export default function ToDo({ task, isDone }) {
//     return (
//         <li>Class : {task}</li>
//     )
// }

// export default function ToDo({ task, isDone }) {
//     if (isDone == true) {
//         return <li>Learn : {task}</li>
//     }
//     return <li>To be Done : {task}</li>

// }


// Conditional Rendaraing   : 3--> tarnary
// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone ? <li>Done : {task} time: {time}</li> : <li>Not Done: {task}</li>
// }



// conditional Rendaring   4:--->

export default function ({ task, isDone, time = 0 }) {
    return isDone && <li>done the Task : {task} and time is : {time}</li>
}

