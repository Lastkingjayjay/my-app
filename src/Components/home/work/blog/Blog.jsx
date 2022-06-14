import React from 'react'
import Blogdata from './Blogdata'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Blog = () => {
  return (
    <>
        <section className="blog services">
            <div className="container topMargin">
                <h3>LATEST BLOG</h3>
                <h1>Read Inspirational Story Every Week</h1>
            </div>
            <div className="container contain grid topMargin">
                {
                    Blogdata.map((val) => {
                        return (
                        <div className="box">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                                <span>{val.date}</span>
                                <h2>{val.title}</h2>
                                <a href="/">Read More</a>
                                <KeyboardDoubleArrowRightIcon className='icon'/>
                            </div>
                        </div>
                    )

                    })
                }
            </div>
        </section>
    </>
  )
}

export default Blog