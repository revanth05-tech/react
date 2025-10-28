import React from 'react'
import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className='paper'>
      <nav className='topnav'>
        <h1 className='heading'>Job Listings</h1>
        <button className='explorebtn'>Explore More</button>
      </nav>

     <div className='cards_container'>
         {/* card 1 */}
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
              className='title'>
              Google
            </a>
            <h2 className='role'>Senior UI/UX Designer</h2>
            <div className="btn_001">
              <button className='btn_01'>Part Time</button>
              <button className='btn_02'>Senior Level</button>
            </div>
          </div>
          <footer className='footer'>
            <span className='location'>Mountain View, CA</span>
            <span className='date'>2 days ago</span>
          </footer>
        </div>
        <div className='center'></div>
      </div>

      {/* card 2 */}
      <div className='card'>
        <div className='amazon'>
          <div className='navbar'>
            <a href="https://www.amazon.com/">
              <img
                className='logo'
                src="data:image/png;base64,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"
                alt="Amazon Logo"
              />
            </a>
            <button className='btn'>
              Save <Bookmark size={18} style={{ marginLeft: '6px' }} />
            </button>
          </div>
          <div className='content'>
            <a
              href="https://amazon.jobs/en/"
              className='title'>
              Amazon
            </a>
            <h2 className='role'>Amazon Opportunities</h2>
            <div className="btn_001">
              <a href="https://hiring.amazon.com/search/part-time-jobs" className='btn_01'>Part Time</a>
              <a href="https://www.amazon.jobs/content/en/career-programs/university/jobs-for-grads" className='btn_02'>Senior Level</a>
            </div>
          </div>
          <footer className='footer'>
            <span className='location'>Mountain View, CA</span>
            <span className='date'>2 days ago</span>
          </footer>
        </div>
        <div className='center'></div>
      </div>
      
      {/* card 3 */} 
      <div className='card'>
        <div className='Nvidia'>
          <div className='navbar'>
            <a href="https://www.nvidia.com/en-in/">
              <img
                className='logo'
                src="data:image/png;base64,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"
                alt="Google Logo"
              />
            </a>
            <button className='btn'>
              Save <Bookmark size={18} style={{ marginLeft: '6px' }} />
            </button>
          </div>
          <div className='content'>
            <a
              href="https://www.nvidia.com/en-in/about-nvidia/careers/"
              className='title'>
              Nvidia
            </a>
            <h2 className='role'>Find Fun</h2>
            <div className="btn_001">
              <a href="https://www.nvidia.com/en-in/about-nvidia/careers/" className='btn_01'>Jobs</a>
              <a href="https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/" className='btn_02'>Inturnships</a>
            </div>
          </div>
          <footer className='footer'>
            <span className='location'>Mountain View, CA</span>
            <span className='date'>2 days ago</span>
          </footer>
        </div>
        <div className='center'></div>
      </div>
       {/* card 4 */}
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
              className='title'>
              Google
            </a>
            <h2 className='role'>Senior UI/UX Designer</h2>
            <div className="btn_001">
              <button className='btn_01'>Part Time</button>
              <button className='btn_02'>Senior Level</button>
            </div>
          </div>
          <footer className='footer'>
            <span className='location'>Mountain View, CA</span>
            <span className='date'>2 days ago</span>
          </footer>
        </div>
        <div className='center'></div>
      </div>
     </div>

      </div>
    </div>
  )
}

export default App
