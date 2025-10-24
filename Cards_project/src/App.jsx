import React from 'react'
import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>
        <div className='google'>
          <div className='navbar'>
            <a href="https://www.google.com/">
              <img
                className='logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
              />
            </a>
            <button className='btn'>
              Save <Bookmark size={18} style={{ marginLeft: '6px' }} />
            </button>
          </div>
          <div className='content'>
            <a
              href="https://www.google.com/about/careers/applications/jobs/results/116498926541906630-senior-ux-designer/"
              className='title'
            >
              Google
            </a>
            <h2 className='role'>Senior UI/UX Designer</h2>
          </div>
        </div>
        <div className='center'></div>
      </div>
    </div>
  )
}

export default App
