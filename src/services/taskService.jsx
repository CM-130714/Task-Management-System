// This is a mock of what an API service might look like for fetching tasks
export const fetchTasks = async () => {
    return [
      { id: '1', title: 'Task 1', status: 'todo', priority: 'high' },
      { id: '2', title: 'Task 2', status: 'inProgress', priority: 'medium' },
      { id: '3', title: 'Task 3', status: 'done', priority: 'low' },
    ];
  };
  
  export const updateTaskStatus = async (taskId, status) => {
    // Here you would make an API call to update the task's status
    console.log(`Task ${taskId} updated to status ${status}`);
  };
  