import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h1>Add a note</h1>
        <form>
          <div className="mb-3 col-md-4">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3 col-md-8">
            <label htmlFor="description" className="form-label">Description  </label>
            <input type="text" className="form-control" id="description" />
          </div>
          {/* <div className="mb-3 form-check">
            {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> 
          </div> */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <h1>Your notes</h1>
    </div>
  )
}

export default Home
