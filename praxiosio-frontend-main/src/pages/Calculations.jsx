 import React, { useState } from 'react';
 import './Sidebar.css'; // Import CSS file
 import TRANSLATE from '../assets/images/TRANSLATE.png'
 import LISTEN from '../assets/images/LISTEN.png'
 import Plagarism from '../assets/images/Plagarism.png'
 import Copy from '../assets/images/COPY.jpg'
 import Save from '../assets/images/save.png'
 import download from '../assets/images/download.png'
 import loading from '../assets/images/loading.png'

 import Header from '../Components/Header'
 import Footer from '../Components/Footer'

export default function Calculations() {

    const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleItemClick = (item) => {
    setSearchText(item);
  
  };

  return (
    <div>
        <Header/>
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
      <ul style={{ marginLeft :'70px'}}>
      <li><a href="#" onClick={() => handleItemClick('CHEMISTRY CALCULATIONS')}>CHEMISTRY CALCULATIONS</a></li>
      <li><a href="#" onClick={() => handleItemClick('PHYSICS CALCULATIONS')}>PHYSICS CALCULATIONS</a></li>
      <li><a href="#" onClick={() => handleItemClick('LINEAR ALGEBRA')}>LINEAR ALGEBRA</a></li> 
      <li><a href="#" onClick={() => handleItemClick('TRIGONOMETRY')}>TRIGONOMETRY</a></li>
        <li><a href="#" onClick={() => handleItemClick('PRE-CALCULUS')}>PRE-CALCULUS</a></li>
      <li><a href="#" onClick={() => handleItemClick('BASIC MATH')}>BASIC MATH </a></li>
      <li><a href="#" onClick={() => handleItemClick('PRE-ALGEBRA')}>PRE-ALGEBRA</a></li>
        <li><a href="#" onClick={() => handleItemClick('ALGEBRA')}>ALGEBRA</a></li> 
        <li><a href="#" onClick={() => handleItemClick('CALCULUS')}>CALCULUS</a></li> 
        <li><a href="#" onClick={() => handleItemClick('STATISTICS')}>STATISTICS</a></li>
        <li><a href="#" onClick={() => handleItemClick('FINITE MATH')}>FINITE MATH</a></li>
       
        <li><a href="#" onClick={() => handleItemClick('GRAPHS')}>GRAPHS</a></li>
       
      </ul>
      </div>
      
       {/* this  is Add1 part */}
      <div className='add1'> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, provident? Maiores sed illum temporibus mollitia, saepe asperiores quisquam, repellat, enim ullam quam rerum odit exercitationem corporis? Sint qui eius nemo.
      </div>
       
       {/* second search */}
      <nav className='searchbar mt-5' >
       <h6>SELECT FORMULA</h6>
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
        <li><a href="#" onClick={() => handleItemClick('HTML/CSS')}>1st equation</a></li>
        <li><a href="#" onClick={() => handleItemClick('JAVASCRIPT')}>2nd equation</a></li>
        <li><a href="#" onClick={() => handleItemClick('REACT')}>3rd equatin</a></li>
        <li><a href="#" onClick={() => handleItemClick('REACT NATIVE')}>speed</a></li>
        <li><a href="#" onClick={() => handleItemClick('ANGULAR.JS')}>velocity</a></li>
        <li><a href="#" onClick={() => handleItemClick('VUE.JS')}>accellaration</a></li>
        <li><a href="#" onClick={() => handleItemClick('NODE.JS')}>n formula</a></li>
        
      </ul>
      </div>
      
      <div className='add2'> 
      VERTICAL AD
     
      </div>

     
      </nav>

      </nav>
        
      

       {/* Right Part */}
        <article>
    <div className='div1' >
  <div>
    <h4>CALCULATIONS</h4>
  </div>
  <div className='react'>
    <a href="#"><i className="fa fa-fw fa-plus" style={{ color: 'white' }}></i></a> &nbsp;
    <a href="#"><i className="fa fa-fw fa-minus" style={{ color: 'white' }}></i></a>
  </div>
 
</div>

 <span className='row2'></span>
 <span className='row3'></span>
 <span className='row4'></span>
 <span className='row5'></span>
 <span className='row6'></span>
 <span className='row7'></span>

        <div className='main-box'>
          <h2>Main Banner </h2>
        </div>

          <h4 className='info1'>INFORMATION BOX</h4>

          <div className='card1'>
            <div className='speed'>
              <h4>SPEED:</h4>
            </div>
            <div className='links'>
              <nav>
                <ul>
                  <li><a href="#">DIFINITION</a></li>
                  <li><a href="#">EXPLANATION</a></li>
                  <li><a href="#">FORMULA</a></li>
                  <li><a href="#">HISTORY</a></li>
                  <li><a href="#">ALTERNATIVE FORMULA</a></li>
                </ul>
              </nav>
            </div>
          </div>

        <hr style={{color:"blue"}}></hr>
          

          <div className='main-box'>
          <h2>Main Banner </h2>
        </div>

          <h3 className='info2'>QUESTION DESK</h3>
          <div className='card3'>
           <div className='inner'>
            <h5>SPEED</h5>
            <h5 >EQ.OF MOTION</h5>
            <h5>+</h5>

            </div>
          </div>
   <button type='button' className='get'>GET RESULTS</button>

          <div className='main-box'>
          <h2>Main Banner </h2>
        </div>

        <h3 className='info3'>RESULTS</h3>
        <div className='card4'>
            <div className='links1'>
              <nav>
                <ul>
                  <li><a href="#">SOLUTION</a></li>
                  <li><a href="#">STEP BY STEP</a></li>
                  <li><a href="#">FORMULA USED</a></li>
                  <li><a href="#">GRAPHICAL ANSWER</a></li>
                  <li><a href="#">MORE SOLUTIONS</a></li>
                  <li><a href="#">RECOMMENDATION</a></li>
                </ul>
                <div className="large">
              <h4>Large Rectangle Ad</h4>
               </div>
               <div className='row'>
                <div className='col-sm col-lg-4 loading'><img src={loading } alt="" /></div>
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
      <Footer/>
    </div>
  )
}
