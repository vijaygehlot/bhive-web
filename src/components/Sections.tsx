import React, { useState,useEffect } from 'react';
import '../styles/Sections.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChooseData } from '../redux/chooseDataSlice';
import { fetchSpaceData } from '../redux/spaceDataSlice';
import { AppDispatch, RootState } from '../redux/store';



const Sections: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();
  const chooseDatas = useSelector((state: RootState) => state.chooseData.items);
  const spaceDatas = useSelector((state: RootState) => state.spaceData.items);

  useEffect(() => {
    dispatch(fetchChooseData());
    dispatch(fetchSpaceData());
  }, [dispatch]);


  console.log('chooseDatas',chooseDatas);
  console.log('spaceDatas',spaceDatas);



  return (
    <div className="sections">
      {/* Section 1 */}
      <div className="section section-1">
    <div className="section-1-70">
        <div className="background-image">
            <h1 className='section-70-h1'>Host your meeting with world-class amenities. Starting at <span className="highlight">₹199/-!</span></h1>
        </div>
    </div>
    <div className="section-1-30">
        <div className="background-image-30-1"></div>
        <div className="background-image-30-2"></div>
    </div>
    <h1 className='section-30-h1'>Host your meeting with world-class amenities. Starting at <span className="highlight">₹199/-!</span></h1>

</div>



      {/* Section 2 */}
      <div className="section section-2">
        <h2 className="section-heading">Why Choose us?</h2>
        <div className="grid-2x4">
          {chooseDatas.map((item, index) => (
            <div className="grid-item" key={index}>
              <img src={item.image_path} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className="section section-3">
        <h2 className="section-heading">Our Space Overview</h2>
        <div className="grid-2x3">
          {spaceDatas.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <h2>{item.title}</h2>
                <div className="image-text-wrapper">
                  <img
                    src={require('../images/assistant_direction.png')}
                    alt={item.category}
                    className="image"
                  />
                  <p className="text-below-image">6 Kms</p>
                </div>
              </div>
              <div className="card-body">
                <div className="rounded-image-container">
                  <div className="label-tag">
                    <img src={item.category_icon} alt="Label Icon" />
                    <span>{item.category}</span>
                  </div>
                  <img
                    src={item.image_path}
                    alt={`Rounded Image ${index + 1}`}
                    className="rounded-image"
                  />
                </div>
                <div className="card-buttons">
                  <button className="left-button">
                    <div className="button-text">
                      <span className="day-pass">Day Pass</span>
                      <br />
                      <p>
                        <span className="price">₹ 249</span>/ Day{' '}
                      </p>
                    </div>
                    <img
                      className="button-image"
                      src={require('../images/arrow.png')}
                      alt="Small Icon"
                    />
                  </button>
                  <button className="right-button">
                    <div className="button-text">
                      <span className="day-pass">Bulk Pass</span>
                      <br />
                      <p>
                        <span className="price">₹ {item.price}</span>/ 10 Day{' '}
                      </p>
                    </div>
                    <img
                      className="button-image"
                      src={require('../images/arrow.png')}
                      alt="Small Icon"
                    />
                    <div className="label-tag">20% Discount</div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 */}
      <h2 className='section-heading'>Download our app now</h2>
      <div className="section-4">

        <div className="section-4-card">
          <div className="section-4-label-img">
            <img src={require('../images/mobile.png')} alt="Label image" />
          </div>
          <div className="section-4-content">
            <h2 className='section-4-text'>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</h2>
            <div className="section-4-images">
              <div className="image">
                <img src={require('../images/google.png')} alt="Label image" />
              </div>
              <div className="image">
                <img src={require('../images/apple.png')} alt="Label image" />
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sections;
