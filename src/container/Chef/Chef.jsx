// eslint-disable-next-line no-unused-vars
import React from 'react';

import { images } from "../../constants";
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding' >
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="chef" />
      </div>
      <div className='app__wrapper_info' >
        <SubHeading title="Chef's Word " />
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_qoute'>
            <img src={images.quote} alt="chef qoute" />
            <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit eum.</p>
          </div>
          <p className='p__opensans'>repellat cumque optio dignissimos dolor sint esse, delectus itaque aut fugiat? Commodi ab,
            doloribus temporibus consequatur ex impedit aliquam.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="chef sing" />
        </div>

      </div>
    </div>
  )
}

export default Chef;
