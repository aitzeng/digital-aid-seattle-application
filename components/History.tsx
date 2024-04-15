"use client"

import { useEffect, useState } from 'react';
import Editor from './Editor';

//Define types of props
interface HistoryProps {
    data: any[]; // It's better to use a specific type instead of any if possible
    setData: (options: any[]) => void;
    getHistory: () => void;
}

export default function History({ data, setData, getHistory }: HistoryProps) {

    return (
        <div className="my-5 flex justify-center">
            <div className="flex flex-col border-2 border-gray-500 w-2/5">
                <h1 className="flex justify-center">History</h1>
                {data.map((dono) => (
                    <Editor 
                      key={dono._id}
                      editid={dono._id} 
                      editFirst={dono.firstName} 
                      editLast={dono.lastName} 
                      editType={dono.type} 
                      editQuantity={dono.quantity}
                      getHistory={getHistory} 
                    />
                ))}
            </div>
        </div>
    );
}
