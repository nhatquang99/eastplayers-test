import React, { useState } from 'react'
import queryString from 'query-string';
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { RESET_BUTTON } from '../constants/buttonConstants';


const SearchBox = ({ history}) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('IN');
    if (keyword.trim()) {
      history.push(`/home?page=1&keyword=${keyword}`)
      dispatch({type: RESET_BUTTON});
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-primary' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox