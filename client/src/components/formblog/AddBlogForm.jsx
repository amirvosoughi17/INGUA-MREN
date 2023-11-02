import './addBlogForm.css' ;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AddBlogForm = () => { 
 
  return (
    <div>
      <form  method='post'>
        <label>Title : </label>
        <input type="text" name='title'    required />
        <label>Description : </label>
        <input type="text"  name='description' rows="5" required  />
        <button type='submit'>Create Blog</button>
      </form>
    </div>
  )
}

export default AddBlogForm
