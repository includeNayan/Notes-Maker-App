import React, { useState } from 'react'
import { useSearchParams } from 'react-router';

const Home = () => {
    const [title,setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const noteId = searchParams.get("noteId");
  return (
    <div>
    <div className='flex flex-row gap-7'>
      <input
      className='p-2 rounded-2xl mt-2'
    type="text" 
      placeholder='enter title here'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <button>
        {
        noteId ? "Update Note" : "Create Note"
}
      </button>
    </div>

    <div>
       <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write Your Content Here...."
            className="w-full p-3  focus-visible:ring-0"
            style={{
              caretColor: "#000",
            }}
            rows={20}
          />
    </div>
    </div>
  )
}

export default Home
