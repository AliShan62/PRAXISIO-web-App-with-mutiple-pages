import React, { useState } from 'react';
import './Sidebar.css'; // Import CSS file
import './Chemicals.css'
import TRANSLATE from '../assets/images/TRANSLATE.png'
import LISTEN from '../assets/images/LISTEN.png'
import Plagarism from '../assets/images/Plagarism.png'
import Copy from '../assets/images/COPY.jpg'
import Save from '../assets/images/save.png'
import download from '../assets/images/download.png'
import loading from '../assets/images/loading.png'
import tube from '../assets/images/tube.png';
import Header from '../Components/Header'
import Footer from '../Components/Footer'


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
            <ul style={{ marginLeft: '50px' }}>
              <li><a href="#" onClick={() => handleItemClick('CHEMICAL')}>CHEMICAL</a></li>
              <li><a href="#" onClick={() => handleItemClick('METALS')}>METALS </a></li>
              <li><a href="#" onClick={() => handleItemClick('PERIODIC TABLE')}>PERIODIC TABLE</a></li>
              <li><a href="#" onClick={() => handleItemClick('SEPARATION TECHNIQUES')}>SEPARATION TECHNIQUES</a></li>
              <li><a href="#" onClick={() => handleItemClick('MOLECULES')}>MOLECULES</a></li>
              <li><a href="#" onClick={() => handleItemClick('ATOMS')}>ATOMS</a></li>
              <li><a href="#" onClick={() => handleItemClick('ELEMENTS')}>ELEMENTS</a></li>
              <li><a href="#" onClick={() => handleItemClick('GASES')}>GASES</a></li>
              <li><a href="#" onClick={() => handleItemClick('BASIC THEORY')}>BASIC THEORY</a></li>
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
              <ul style={{ height: '300px' }}>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL1')}>CHEMICAL1</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL2')}>CHEMICAL2</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL3')}>CHEMICAL3</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL4 ')}>CHEMICAL4 </a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL5')}>CHEMICAL5</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL6')}>CHEMICAL5</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL7')}>CHEMICAL7</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL8')}>CHEMICAL8</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL9')}>CHEMICAL9</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL10')}>CHEMICAL10</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL11')}>CHEMICAL11</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL12')}>CHEMICAL12</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL13')}>CHEMICAL13</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL14 C')}>CHEMICAL14</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL15')}>CHEMICAL15</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL16')}>CHEMICAL16</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL17')}>CHEMICAL17</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL18')}>CHEMICAL18</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL19')}>CHEMICAL19</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL20')}>CHEMICAL20</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL21')}>CHEMICAL21</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL22')}>CHEMICAL22</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL23')}>CHEMICAL23</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL24')}>CHEMICAL24</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL25')}>CHEMICAL25</a></li>
                <li><a href="#" onClick={() => handleItemClick('CHEMICAL N')}>CHEMICAL N</a></li>

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
              <h4>CHEMICALS</h4>
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
              <h4>CHEMICAL 4 :</h4>
            </div>
            <div className='links'>
              <nav>
                <ul>
                  <li><a href="#">DETAILS</a></li>
                  <li><a href="#">NATURE</a></li>
                  <li><a href="#">STRUCTURE</a></li>
                  <li><a href="#">FORMULA/EXPRESS</a></li>
                  <li><a href="#">HISTORY</a></li>
                  <li><a href="#">REACTION WITH OTHERS</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <hr style={{ color: "blue" }}></hr>

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

          <h3 className='reaction-lab'>REACTION LAB</h3>
          <div className='chemicals'>
            <div className='plus'>
                <button >Chemical </button>
                <p>To</p>
                <button>Chemcial</button>
            </div>

            <div className='plus'>
                 <img src={tube} alt="tube" />
                <img src={tube} alt="tube" />
            </div>
 
            <div className='plus'>
                <button className='qunatity'>Qunatity 1<input type="text" /> ML </button>
                <button className='qunatity'>Qunatity 2 <input type="text" /> ML</button>
            </div>
               <p>---------------------------------</p>
               <button id='heat'>Heat <input type="text" />`C</button> range icons
               {/* <img src={range} alt ="alt"/> */}
            <div className='inner'>
              <h5>CHEMICAL 1</h5>
              <h5>CHEMCIAL 2</h5>
              <h5>+</h5></div>
              {/* <div className='resultt'><h4>Result</h4></div> */}
          </div>
     


          <div className='main-box'>
            <h2>Main Banner </h2>
          </div>

          <h3 className='info'>RESULTS</h3>
          <div className='card4'>
            <div className='links'>
              <nav>
                <ul >
                  <li><a href="#" className='anchor'>DETAILS</a></li>
                  <li><a href="#">RECOMMENDATION</a></li>
                  <li><a href="#">CAUTIONS</a></li>
                  <li><a href="#">EXPRESSION</a></li>
                  <li><a href="#">STEP BY STEP</a></li>
                </ul>
                <div className='large'>
                  <h4>Large Rectangle 360 * 240 </h4>
                </div>
                <div className='row'>
                  <div className='col-sm col-lg-4 loading'><img src={loading} alt="" /></div>
                  <div className='col-sm col-lg-8 Result'><h4 style={{ color: " rgba(209, 73, 10, 0.5)" }}>RESULT WILL BE LOADED IN 00:00 s</h4></div>
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
                  <img src={LISTEN} alt='' className='img-fluid' /><br />
                  <span>LISTEN</span>
                </div>
                <div className='col-sm'>
                  <img src={Plagarism} alt='' className='img-fluid' /><br />
                  <span>REMOVE PLAGARISM</span>
                </div>
                <div className='col-sm'>
                  <img src={Copy} alt='' className='img-fluid' /><br />
                  <span>COPY</span>
                </div>
                <div className='col-sm'>
                  <img src={Save} alt='' className='img-fluid' /><br />
                  <span>SAVE</span>
                </div>
                <div className='col-sm'>
                  <img src={download} alt='' className='img-fluid' /><br></br>
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

export default Sidebar;
