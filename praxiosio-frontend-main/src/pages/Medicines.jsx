import React, { useState } from 'react';
// import './Sidebar.css'; // Import CSS file
 import TRANSLATE from '../assets/images/TRANSLATE.png'
 import LISTEN from '../assets/images/LISTEN.png'
 import Plagarism from '../assets/images/Plagarism.png'
 import Copy from '../assets/images/COPY.jpg'
 import Save from '../assets/images/save.png'
 import download from '../assets/images/download.png'
 import loading from '../assets/images/loading.png'
 import Header from '../Components/Header'
 import Footer from '../Components/Footer'
 import './Medicines.css';
function Medicines() {

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
      <ul style={{ marginLeft :'20px'}}>
            <li><a href="#" onClick={() => handleItemClick('RHINOCEROS')}>HUMAN SPECIE</a></li>
            <li><a href="#" onClick={() => handleItemClick('ELEPHANT')}>ANIMALS SPECIE</a></li>
            <li><a href="#" onClick={() => handleItemClick('MONKEY')}>PLANTS SPECIE</a></li>
            <li><a href="#" onClick={() => handleItemClick('GIRAFFE')}>REPTILES SPECIE</a></li>
            <li><a href="#" onClick={() => handleItemClick('TIGER')}>INSECTS SPECIE</a></li>  
            <li><a href="#" onClick={() => handleItemClick('GOAT')}>BIRDS SPECIE</a></li>
            <li><a href="#" onClick={() => handleItemClick('LION')}>FISHES SPECIE</a></li>
            <li><a href="#" onClick={() => handleItemClick('CAT')}>BACTERIA SPECIE</a></li>
           
       
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
      <ul style={{height:'300px', marginLeft:'20px'}}>
     
            <li><a href="#" onClick={() => handleItemClick('ELEPHANT')}>ELEPHANT ANIMAL</a></li>
            <li><a href="#" onClick={() => handleItemClick('MONKEY')}>MONKEY ANIMAL</a></li>
            <li><a href="#" onClick={() => handleItemClick('GIRAFFE')}>GIRAFFE ANIMAL </a></li>
            <li><a href="#" onClick={() => handleItemClick('TIGER')}>TIGER ANIMAL </a></li>  
            <li><a href="#" onClick={() => handleItemClick('GOAT')}>GOAT ANIMAL</a></li>
            <li><a href="#" onClick={() => handleItemClick('LION')}>LION ANIMAL</a></li>
            <li><a href="#" onClick={() => handleItemClick('CAT')}>CAT ANIMAL</a></li>
            <li><a href="#" onClick={() => handleItemClick('DOG')}>DOG ANIMAL</a></li>
            <li><a href="#" onClick={() => handleItemClick('COW')}>COW ANIMAL</a></li>
            <li><a href="#" >.</a></li>
            <li><a href="#" >.</a></li>
            <li><a href="#" >.</a></li>
            <li><a href="#" >READ MORE</a></li>
        
      </ul>
      </div>
      
      <div className='Madd'> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, provident? Maiores sed illum temporibus mollitia, saepe asperiores quisquam, repellat, enim ullam quam rerum odit exercitationem corporis? Sint qui eius nemo.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, cupiditate veritatis. Sit ipsam quis dolorem qui, odio iste fuga et distinctio. Facere amet delectus voluptate adipisci distinctio maiores explicabo? Reprehenderit?
     
      </div>

      <div className='add3'> 
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
              <h4>MEDICINES</h4>
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
              <h4>MONKEY</h4>
            </div>
            <div className='links'>
              <nav>
                <ul>
                  <li><a href="#">ABOUT</a></li>
                  <li><a href="#">IMAGE</a></li>
                  <li><a href="#">PARTS</a></li>
                  <li><a href="#">DISEASE</a></li>
                  <li><a href="#">TREAMENT</a></li>
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

          <h4 className='info'>MEDICAL DESK</h4>
          <div className='Mcard3'>
            <div className='plus'>
            <button class="btn  btn-success">DISEASE</button> &nbsp;
            <button class="btn  btn-success">MEDICINES</button>
            </div>

            <div className='lineAndInsideMediclasDesk '>
              <p>Write the name or symtoms/Physical changes or detail of the disease :</p>
              <div className='InsideMediclasDesk'>

              </div>
              <button class="btn  btn-success ">GET RESULTS</button>
            </div>

         
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
       
       <Footer/>
    </div>

  );
}

export default  Medicines;
