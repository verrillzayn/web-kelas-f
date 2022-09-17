import mongoose from 'mongoose';

const TaskList = mongoose.Schema({
  tugas: {
    type: String,
    required: true,
  },
  matkul: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
});

export default mongoose.model('TasksList', TaskList);
