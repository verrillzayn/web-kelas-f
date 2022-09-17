import React from 'react';
import TaskListCard from './TaskListCard';
import TaskListModal from './TaskListModal';

export const TaskList = () => {
  return (
    <>
      <div className="container-content-2" style={{ marginBottom: '30px' }}>
        <h1 className="layanan-judul">Daftar Tugas</h1>
      </div>
      <TaskListModal />
      <div className="container-list-tugas task-list-card-container">
        <TaskListCard />
      </div>
    </>
  );
};
