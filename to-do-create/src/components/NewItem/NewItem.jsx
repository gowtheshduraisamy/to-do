import './NewItem.css'
import { useState } from 'react'
import { useEffect } from 'react'
import {toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const NewItem=(props)=>{
    const PRIORITY=['high','medium','low']
    const {addItem,editState,editItem}=props
    const [title,setTitle]=useState('')
    const [priority,setPriority]=useState('low')
    const isEdit=Boolean(editState._id);

    useEffect(()=>{
        if(editState._id)
        {
            setTitle(editState.title) 
            setPriority(editState.priority) 

        }
    },[editState])
    const handleInputChange=(e)=>{
        setTitle(e.target.value)
    }

    const handleClick=()=>{
        setTitle('');
        setPriority('')
    }


    const handleSave=()=>{
        if(!title)
        {
            
            return;
        }
        const obj={
            title,
            priority
        }
        if(isEdit)
        {
           obj._id=editState._id;
           editItem(obj);
        }
        else{
            addItem(obj)
            toast('aaaa');
        }
        setTitle('')
        setPriority('low')
    }

    return(
        <div className="new-item-card">
            <div className="checkbox"/>
            <div className="form-container">
                <input placeholder='input here...' value={title} onChange={handleInputChange} />
                {
                    title&&(
                        <>
                        <div className='badge-container'>
                        {PRIORITY.map((p)=>(
                        <div 
                        key={p}
                        className={`p-badge ${p} ${p===priority&&'selected'}`}
                        onClick={()=>setPriority(p)}>
                            {p}
                        </div>))} 
                        </div>
                    <div className='btn-container'>
                    <button className='primary' onClick={handleSave}>save</button>
                    <button onClick={handleClick}>clear</button>
                    </div>
                    </>
                    )
                }
                
            </div>

        </div>
    )
}

export default NewItem