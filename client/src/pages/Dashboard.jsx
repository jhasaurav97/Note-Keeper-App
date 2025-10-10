import React, { useState } from 'react'

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState([]);

  return (
    <div className='relative pt-8 bg-white dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <h1>Your Notes</h1>
        <button>Add Notes</button>
      </div>
    </div>
  )
}

export default Dashboard;
