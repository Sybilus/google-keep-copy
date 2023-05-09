import { useEffect, useRef } from "react";
import {AiOutlinePicture} from 'react-icons/ai'
import {BiCheckboxChecked} from 'react-icons/bi'
import {MdOutlineBrush} from 'react-icons/md'

//aseofiubasef

let NoteEntry = () =>{

    const opener = useRef(null);
    const hidder = useRef(null);
    const shower = useRef(null);
     const shower1 = useRef(null);
    const focusInput = () => {
        opener.current.classList.add('flex-col');
        hidder.current.classList.add('hidden');
        shower.current.classList.remove('hidden');
         shower1.current.classList.remove('hidden');
    }
        
    return (
        <>
                <div id='beforeNote' className='flex shadov' onClick={focusInput} ref={opener}>
                    <input className='flex w-full relative outline-none' placeholder='Utwórz notatkę... '></input>
                    <div className='grid grid-flow-col gap-4' ref={hidder}>
                        <button className='buttonOnUtw hoverer'><BiCheckboxChecked/></button>
                        <button className='buttonOnUtw hoverer'><MdOutlineBrush/></button>
                        <button className='buttonOnUtw hoverer'><AiOutlinePicture/></button>
                    </div> 
                    <input className='flex w-full relative outline-none hidden' placeholder='Utwórz notatkę... ' ref={shower}></input>
                    <div className=''>
                    </div>
                    <div className='flex w-full relative outline-none cursor-pointer hidden' ref={shower1}>buttons here</div>                   
                </div>
        </>
    );
}
export default NoteEntry;
