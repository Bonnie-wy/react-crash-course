const tasks = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food shooping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <p>{task.text}</p>
            ))}
        </>
    )
}

export default Tasks
