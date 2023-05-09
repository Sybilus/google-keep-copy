import './navbar.css'
import '../index.css'
import {FiMenu, FiGrid} from 'react-icons/fi';
import {GrDocument} from 'react-icons/gr'
import {TbGridDots} from 'react-icons/tb'
import {BsGear} from 'react-icons/bs'
import {RxMagnifyingGlass} from "react-icons/rx"
import {MdOutlineRefresh} from 'react-icons/md'

function Navbar () {
    return (
    <div className="flex navbarB fixed w-full ">
        <div className='flex h-12 pr-8 mr-6 relative'>
            <div className='grid p-3 aspect-square justify-center items-center hover:rounded-full hoverer has-tooltip'>
                <FiMenu  className='scale-x-150 scale-y-125 '/>
                <span className='tooltip bottom-0 left-8'>Menu główne</span>
            </div>
            <div className='flex self-center'>
                <div className='cursor-pointer grid aspect-square justify-center items-center mx-4'>
                    <GrDocument className='scalu'/>
                </div>
            <span className='cursor-pointer grid center text-2xl graju' >
                Geep
            </span>
            </div>
        </div>
        <div className='flex grow marginos'>
            <div className='flex pr-8 pl-1 rounded-lg w-full '>
                <button className='grid m-1 translate-x-14 aspect-square justify-center items-center hover:rounded-full loopka has-tooltip'>
                    <RxMagnifyingGlass className='scale-125'/>
                    <span className='grid tooltip top-20 left-7'>Szukaj</span>
                </button>
                <input className='self-center grajuB rounded-lg pl-14 w-full h-full max-w-2xl focus:outline-none ' placeholder="Szukaj"></input>
            </div>
            <div className='flex ml-3 relative'>
                <button className='grid aspect-square justify-center items-center hover:rounded-full hoverer has-tooltip'>
                    <MdOutlineRefresh className='scale-150'/>
                    <span className='grid tooltip bottom-0 left-7 justify-center'>Odśwież</span>
    
                </button>
                <button className='grid aspect-square justify-center items-center hover:rounded-full hoverer has-tooltip'>
                    <FiGrid className='scale-x-150 scale-y-125'/>
                    <span className='grid tooltip bottom-0 left-16 w-fit justify-center'>Widok&nbsp;siatki</span>
                </button>
                <button className='grid aspect-square justify-center items-center hover:rounded-full hoverer has-tooltip'>
                    <BsGear className='scale-125'/>
                    <span className='grid tooltip bottom-0 left-28 justify-center'>Ustawienia</span>
                </button>
            </div>
        </div>
        <div className='flex float-right h-12 ml-2  has-toolitp'>
            <button className='grid m-1 aspect-square justify-center items-center hover:rounded-full hoverer has-tooltip'>
                <TbGridDots className='scale-125'/>
                <span className='grid tooltip top-24 right-20'>Ustawienia</span>
                
            </button>
            <button className='grid m-2 aspect-square justify-center items-center bg-red-600 rounded-full hover:shadow-black grajuh'>L</button>
        </div>
    </div>
    );
}
export default Navbar;