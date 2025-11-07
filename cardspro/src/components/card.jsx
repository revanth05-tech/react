import React from 'react'

const card = (props) => {

  return (
    <div>
          <div className="parent">
      <article className="card">

        {/* Top Section */}
        <header className="top">
          <img 
            src={props.logo}
            alt="Company Logo" 
          />
          <button>Save</button>
        </header>

        {/* Center Section */}
        <section className="center">
          <h3>{props.company} <span>{props.post}</span></h3>
          <h2>{props.role}</h2>
          <div className="details">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </section>

        {/* Bottom Section */}
        <footer className="bottom">
          <div className="info">
            <div>
              <h3>{props.salary}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply</button>
          </div>
        </footer>

      </article>
    </div>
    </div>
  )
}

export default card
