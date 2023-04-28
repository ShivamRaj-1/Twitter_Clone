import React, { useState } from 'react';
import { FaSistrix } from "react-icons/fa";

export default function SearchAppBar() {

  const [inputfield, setInputField] = useState('')
  
  return (
    <div>
      <div style={{
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",

        backgroundColor: '#f5f8fa',
        padding: "15px",
        borderRadius: '23px',

        // "&:focus": {
        //   background: '#fff',
        //   border: "2px solid #1da1f2",
        //   cursor: 'pointer',
        // }

      }} >
        


        <FaSistrix style={{color: 'gray'}} size={20}  />

        <input
          type="text"
          placeholder='Search'
          value={inputfield}
          onChange={(e) => setInputField(e.target.value)}

          style={{
            paddingLeft: '30px',
            // width: '100%',
            border: "none",
            outline: 'none',
            background: 'transparent',
          }}
        />
      </div>
    </div>


  );
}