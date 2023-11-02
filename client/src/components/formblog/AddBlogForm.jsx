import './addBlogForm.css' ;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AddBlogForm = () => { 
  const navigate = useNavigate();
  const [formData , setFormData] = useState({}) ;
  const [loading ,  setLoading] = useState(false) ;
  const [error , setError] = useState(null)


  const handleChange = (e) => {
    setFormData ({
      ...formData ,
      [e.target.id]  : [e.target.value]
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() ;
    try {
      setLoading(true)
      const res = await fetch ('http://localhost:4000/api/v1/blog/new' , {
        method  : "POST",
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify({formData})
      })
      setLoading(false)
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(error.message)

    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title : </label>
        <input type="text" id='title'  onChange={handleChange}  required />
        <label>Description : </label>
        <input type="text"  id='description' onChange={handleChange}  rows="5" required  />
        <button type='submit' >{loading ? 'Loading...'  : 'Create Blog'}</button>
      </form>
    </div>
  )
}

export default AddBlogForm
