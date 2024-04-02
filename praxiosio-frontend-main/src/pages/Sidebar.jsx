import React, { useState } from 'react';
import './Sidebar.css'; // Import CSS file
 import TRANSLATE from '../assets/images/TRANSLATE.png'
 import LISTEN from '../assets/images/LISTEN.png'
 import Plagarism from '../assets/images/Plagarism.png'
 import Copy from '../assets/images/COPY.jpg'
 import Save from '../assets/images/save.png'
 import download from '../assets/images/download.png'
 import loading from '../assets/images/loading.png'

function Sidebar() {

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleItemClick = (item) => {
    setSearchText(item);
  
  };

  return (
    <div>
      
      <section>
      {/* //Left Part */}

      <nav className='searchbar'>

        {/* this  is input */}
      <div className="search-container">
        <input 
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange} // Update state on input change
        />
        <span className="search-icon">&#128269;</span>
      </div>
       
        {/* this  is data part */}
      <div>
      <ul style={{ marginLeft :'20px'}}>
      <li><a href="#" onClick={() => handleItemClick('RECOMMENDATION')}>RECOMMENDATION</a></li>
      <li><a href="#" onClick={() => handleItemClick('LINE BY LINE')}>LINE BY LINE</a></li>
        <li><a href="#" onClick={() => handleItemClick('TRASNLATE')}>TRASNLATE</a></li>
        <li><a href="#" onClick={() => handleItemClick('COMMENTS')}>COMMENTS</a></li>
        <li><a href="#" onClick={() => handleItemClick('OUTPUT')}>OUTPUT</a></li>
        <li><a href="#" onClick={() => handleItemClick('CONCISE')}>CONCISE</a></li> 
        <li><a href="#" onClick={() => handleItemClick('ERROR')}>ERROR</a></li>
        <li><a href="#" onClick={() => handleItemClick('DETAIL')}>DETAIL</a></li>
       
      </ul>
      </div>
      
       {/* this  is Add1 part */}
      <div className='add1'> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, provident? Maiores sed illum temporibus mollitia, saepe asperiores quisquam, repellat, enim ullam quam rerum odit exercitationem corporis? Sint qui eius nemo.
      </div>
       
       {/* second search */}
      <nav className='searchbar mt-5' >

      <div className="search-container">
        <input 
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange} // Update state on input change
        />
        <span className="search-icon">&#128269;</span>
      </div>
      <div className="scrollable-list">
      <ul style={{height:'300px'}}>
        <li><a href="#" onClick={() => handleItemClick('HTML/CSS')}>HTML/CSS</a></li>
        <li><a href="#" onClick={() => handleItemClick('JAVASCRIPT')}>JAVASCRIPT</a></li>
        <li><a href="#" onClick={() => handleItemClick('REACT')}>REACT</a></li>
        <li><a href="#" onClick={() => handleItemClick('REACT NATIVE')}>REACT NATIVE</a></li>
        <li><a href="#" onClick={() => handleItemClick('ANGULAR.JS')}>ANGULAR.JS</a></li>
        <li><a href="#" onClick={() => handleItemClick('VUE.JS')}>VUE.JS</a></li>
        <li><a href="#" onClick={() => handleItemClick('NODE.JS')}>NODE.JS</a></li>
        <li><a href="#" onClick={() => handleItemClick('MONGODB')}>MONGODB</a></li>
        <li><a href="#" onClick={() => handleItemClick('NEXT.JS')}>NEXT.JS</a></li>
        <li><a href="#" onClick={() => handleItemClick('JAVA')}>JAVA</a></li>
        <li><a href="#" onClick={() => handleItemClick('C')}>C</a></li>
        <li><a href="#" onClick={() => handleItemClick('C++')}>C++</a></li>
        <li><a href="#" onClick={() => handleItemClick('C#')}>C#</a></li>
        <li><a href="#" onClick={() => handleItemClick('OBJECTIVE C')}>OBJECTIVE C</a></li>
        <li><a href="#" onClick={() => handleItemClick('TYPESCRIPT')}>TYPESCRIPT</a></li>
        <li><a href="#" onClick={() => handleItemClick('SWIFT')}>SWIFT</a></li>
        <li><a href="#" onClick={() => handleItemClick('RUBY')}>RUBY</a></li>
        <li><a href="#" onClick={() => handleItemClick('FLUTTER/DART')}>FLUTTER/DART</a></li>
        <li><a href="#" onClick={() => handleItemClick('ICONIC')}>ICONIC</a></li>
        <li><a href="#" onClick={() => handleItemClick('PYTHON')}>PYTHON</a></li>
        <li><a href="#" onClick={() => handleItemClick('KOTLIN')}>KOTLIN</a></li>
        <li><a href="#" onClick={() => handleItemClick('R')}>R</a></li>
        <li><a href="#" onClick={() => handleItemClick('EXPRESS')}>EXPRESS</a></li>
        <li><a href="#" onClick={() => handleItemClick('ASSEMBLY')}>ASSEMBLY</a></li>
        <li><a href="#" onClick={() => handleItemClick('LINUX')}>LINUX</a></li>
        <li><a href="#" onClick={() => handleItemClick('ADJANGO')}>ADJANGO</a></li>
        <li><a href="#" onClick={() => handleItemClick('LARAVEL')}>LARAVEL</a></li>
        <li><a href="#" onClick={() => handleItemClick('RUST')}>RUST</a></li>
        <li><a href="#" onClick={() => handleItemClick('HANDLEBARS')}>HANDLEBARS</a></li>
        <li><a href="#" onClick={() => handleItemClick('Jquery')}>Jquery</a></li>
        <li><a href="#" onClick={() => handleItemClick('CAFFESCRIPT')}>CAFFESCRIPT</a></li>
        
      </ul>
      </div>
      
      <div className='add2'> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, provident? Maiores sed illum temporibus mollitia, saepe asperiores quisquam, repellat, enim ullam quam rerum odit exercitationem corporis? Sint qui eius nemo.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, cupiditate veritatis. Sit ipsam quis dolorem qui, odio iste fuga et distinctio. Facere amet delectus voluptate adipisci distinctio maiores explicabo? Reprehenderit?
     
      </div>

      <div className='add3'> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, provident? Maiores sed illum temporibus mollitia, saepe asperiores quisquam, repellat, enim ullam quam rerum odit exercitationem corporis? Sint qui eius nemo.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, cupiditate veritatis. Sit ipsam quis dolorem qui, odio iste fuga et distinctio. Facere amet delectus voluptate adipisci distinctio maiores explicabo? Reprehenderit?
     
      </div>
      </nav>

      </nav>
        
      

       {/* Right Part */}
        <article>
        <div className='div1' id='btn-icon'>
            <div>
              <h4>CODES</h4>
            </div>
            <div className='react'>
            <a href="#"><i className="fa fa-fw fa-plus"></i></a> &nbsp;
            <a href="#"><i className="fa fa-fw fa-minus"></i></a>
            </div>
          </div>


        <div className='main-box'>
          <h2>Main Banner </h2>
        </div>

          <h4 className='info'>INFORMATION BOX</h4>

          <div className='cardg'>
            <div className='react'>
              <h4>REACT JS</h4>
            </div>
            <div className='links'>
              <nav>
                <ul>
                  <li><a href="#">OVERVIEW</a></li>
                  <li><a href="#">EXPLANATION</a></li>
                  <li><a href="#">SYNTAX</a></li>
                  <li><a href="#">HISTORY</a></li>
                  <li><a href="#">SCOPE</a></li>
                </ul>
              </nav>
            </div>
          </div>

        <hr style={{color:"blue"}}></hr>

          <div className='card2'>
            <div className='search2'>
     <div className="search-container2">
        <input
          type="text"
          placeholder="Write the required code statement here"
          value={searchText}
          onChange={handleInputChange} // Update state on input change
        />
        <span className="search-icon2">&#128269;</span>
      </div>
            </div>
          </div>
          

          <div className='main-box'>
          <h2>Main Banner </h2>
        </div>

          <h3 className='info'>CODE EDITOR</h3>
          <div className='card3'>
            <div className='plus'>
              <h3>C++</h3>
            </div>

            <div className='links'>
              <nav>
                <ol>
                  <li>#Include&lt;iostream&gt;</li>
                  <li>using named std;</li>
                  <li>main() &#123;</li>
                  <li>cout&lt;&lt;&quot;Hello World;&quot;</li>
                   <li>&#125;</li>
                </ol>
              </nav>
            </div>

           <div className='inner'>
            <h5>HTML</h5>
            <h5>CSS</h5>
            <h5>JAVASCRIPT</h5>
            <h5>+</h5></div>
          </div>


           
          <div className='main-box'>
          <h2>Main Banner </h2>
        </div>

        <h3 className='info'>INFORMATION BOX</h3>
        <div className='card4'>
            <div className='links'>
              <nav>
                <ul>
                  <li><a href="#">RESULT1</a></li>
                  <li><a href="#">RESULT2</a></li>
                  <li><a href="#">RESULT3</a></li>
                  <li><a href="#">RESULT4</a></li>
                  <li><a href="#">RESULT5</a></li>
                  <li><a href="#">RESULT6</a></li>
                </ul>
                <div className='ads'>
              <h4>Large Rectangle Ad</h4>
               </div>
               <div className='row'>
                <div className='col-sm col-lg-4 loading'><img src={loading} alt="" /></div>
                <div className='col-sm col-lg-8 Result'><h4 style={{color:" rgba(209, 73, 10, 0.5)"}}>RESULT WILL BE LOADED IN 00:00 S</h4></div>
               </div>
              </nav>

            </div>

   

          </div>

  <div className='tools mt-5'>
  <div className='container'>
    <div className='row'>
      <div className='col-sm'>
        <img src={TRANSLATE} alt='' className='img-fluid' />
        <span>TRANSLATE</span>
      </div>
      <div className='col-sm'>
        <img src={LISTEN}  alt='' className='img-fluid' /><br />
        <span>LISTEN</span>
      </div>
      <div className='col-sm'>
        <img src={Plagarism}  alt='' className='img-fluid' /><br />
        <span>REMOVE PLAGARISM</span>
      </div>
      <div className='col-sm'>
        <img src={Copy}  alt='' className='img-fluid' /><br />
        <span>COPY</span>
      </div>
      <div className='col-sm'>
        <img src={Save}  alt='' className='img-fluid' /><br />
        <span>SAVE</span>
      </div>
      <div className='col-sm'>
        <img src={download}  alt='' className='img-fluid' /><br></br>
        <span>RELOAD</span>
      </div>
    </div>
  </div>
  </div>


          <div className='main-box'>
          <h2>Main Banner </h2>
          </div>
        
        </article>
        
      </section>
    
      

    </div>
  );
}

export default Sidebar;
