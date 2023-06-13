const taskData = {
    tasks: {
        "task-1": {id: "task-1", content: "úkol 1"},
        "task-2": {id: "task-2", content: "úkol 2"},
        "task-3": {id: "task-3", content: "úkol 3"},
        "task-4": {id: "task-4", content: "úkol 4"},
    },
    columns: {
        "column-1": {
            id:"column-1",
            title: "Úkoly",
            taskIds: ["task-1", "task-2", "task-3", "task-4"],
        },
    },
    columnOrder: ["column-1"],
};
export default taskData;