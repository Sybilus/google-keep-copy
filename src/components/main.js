import {AiOutlineBulb, AiOutlinePicture} from 'react-icons/ai'
import {BiBell, BiPencil, BiArchiveIn, BiTrash, BiCheckboxChecked} from 'react-icons/bi'
import {MdLabelOutline, MdOutlineBrush} from 'react-icons/md'
import './navbar.css'
import './main.css'
import NoteEntry from './noteEntry'


function Main () {

    return (
        <div className='flex h-screen mt-16 fixed w-full overflow-auto'>
            <div id='flexior' className="flex flex-col mt-2 cursor-pointer sticky top-2" >
                <div className='flex rounded-r-full hoverer buttonDfl pr-20 lg:pr-36'>
                    <button className='buttonL hoverer buttonDfl'><AiOutlineBulb/></button>
                    <span className='grid self-center '>Notatki</span>
                </div>
                <div className='flex rounded-r-full hoverer cursor-pointer'>
                    <button className='buttonL hoverer'><BiBell/></button>
                    <span className='grid self-center'>Przypomnienia</span>
                </div>
            <div className='flex rounded-r-full hoverer cursor-pointer hidden'>
                <button className='buttonL hoverer'><MdLabelOutline/></button>
                <span className='grid self-center'>nazwaetykiety</span>
            </div>
                <div className='flex rounded-r-full hoverer cursor-pointer'>
                    <button className='buttonL hoverer'><BiPencil/></button>
                    <span className='grid self-center'>Edytuj etykiety</span>
                </div>
                <div className='flex rounded-r-full hoverer cursor-pointer'>
                    <button className='buttonL hoverer'><BiArchiveIn/></button>
                    <span className='grid self-center'>Archiwum</span>
                </div>
                <div className='flex rounded-r-full hoverer cursor-pointer'>
                    <button className='buttonL hoverer'><BiTrash/></button>
                    <span className='grid self-center'>Kosz</span>
                </div>
            </div>
            <div className='flex flex-col midW mx-auto' >
                <NoteEntry/>
                <div className='bg-purple-300'>
                    <div className=' my-4 py-4  border-black border-solid border-2'>hello</div>
                </div>
            </div>
        </div>
    );
}
export default Main;