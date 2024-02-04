import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowRight, } from 'react-bootstrap-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ApppleLogo from "../assets/apple.svg"
import ReactLogo from "../assets/react.svg"
import GitHubLogo from "../assets/github.svg"
import PlayStoreLogo from "../assets/playStore.svg"

const icons = [
    {
        name:ReactLogo,
        colors:"pink"
    },  
    {
        name:ApppleLogo,
        colors:"green"
    },
   {
        name:GitHubLogo,
        colors:"rose"
    },
    {
        name:PlayStoreLogo,
        colors:"blue"
    },
]

const Icon = ({onClick}) => {
  return (
    <div className='w-screen '>
      <div className='w-5/6 grid grid-cols-2 gap-4 justify-center content-center mx-auto '>
        {icons.map((names)=>{
            return <div
            key={names.colors}
             className= {`hover:bg-gray-200 cursor-pointer flex justify-center content-start mt-4 border-2 border-${names.colors}-700 text-8xl rounded-2xl py-1 TextWrapper `}>
                 <img src={names.name} alt="Apple Logo"  className='h-20 w-18' />
            </div>
        })}    
      </div>
    </div>
  )
}

export default Icon
