"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

interface EditorProps {
    editid: string;
    editFirst: string;
    editLast: string;
    editType: string;
    editQuantity: number;
    getHistory: () => void;
}

export default function Editor({ editid, editFirst, editLast, editType, editQuantity, getHistory }: EditorProps) {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [first, setFirst] = useState<string>('');
    const [last, setLast] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [amount, setAmount] = useState<number>();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.put('/api/history', {
            _id: editid,
            firstName: first,
            lastName: last,
            quantity: amount,
            type: type,
        })
            .then((response) => {
                setEditMode(false);
                getHistory();
            })
            .catch((error) => {
                console.log('Error', error)
            })

    }

    const editHanlder = () => {
        setFirst(editFirst);
        setLast(editLast);
        setType(editType);
        setAmount(editQuantity);
        setEditMode(true);
    }

    const firstHandler = () => {
        setFirst(event.target.value);
    }

    const lastHandler = () => {
        setLast(event.target.value);
    }

    const typeHandler = () => {
        setType(event.target.value);
    }

    const amountHandler = () => {
        setAmount(event.target.value);
    }

    return (

        (
            editMode ? (
                // If editMode is true, show the edit form
                <form className="flex flex-col border-t-2" onSubmit={handleFormSubmit}>
                    <div className="flex items-center" >
                        <div className="mx-3">First Name:</div>
                        <input onChange={firstHandler} className="border-2 my-1" type="text" defaultValue={editFirst} />
                    </div>
                    <div className="flex items-center" >
                        <div className="mx-3">Last Name:</div>
                        <input onChange={lastHandler} className="border-2" type="text" defaultValue={editLast} />
                    </div>
                    <div className="flex items-center" >
                        <div className="mx-3">Donation Type:</div>
                        <input onChange={typeHandler} className="border-2" type="text" defaultValue={editType} />
                    </div>
                    <div className="flex items-center" >
                        <div className="mx-3">Quantity:</div>
                        <input onChange={amountHandler} className="border-2" type="number" defaultValue={editQuantity} />
                    </div>
                    <button type="submit">Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </form>
            ) : (
                    // If editMode is false, display the information
                    <div className="flex border-t-2 justify-between items-center">
                        <div className="">
                            <div className="mx-2">Name: {editFirst} {editLast}</div>
                            <div className="mx-2">{editType}: {editQuantity}</div>
                        </div>
                        <button className="h-1/2 mx-5" onClick={editHanlder}>Edit</button>
                    </div>
                )
        )

    )
}