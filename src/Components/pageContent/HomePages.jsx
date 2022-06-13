import React from 'react'
import About from "../home/about/About";
import Branding from '../pages/Branding'
import Home from '../home/home/Homes'
import Service from '../home/servicess/services/Service'
import Wrapper from '../home/servicess/services/Wrapper'
import Skill from '../home/servicess/services/Skill'
import WrapperOne from '../home/servicess/services/WrapperOne'

const HomePages = () => {
  return (
    <>
    <Home />
    <Branding />
    <About />
    <Service />
    <Wrapper />
    <Skill />
    <WrapperOne />
    
    
    </>
  )
}

export default HomePages