"use client"

import { useEffect, useState } from 'react';

//Define types of props
interface HistoryProps {
    data: any[]; // It's better to use a specific type instead of any if possible
    setData: (options: any[]) => void;
}

export default function History({ data, setData }: HistoryProps) {
    return (
        <div className="my-5 flex justify-center">
            <div className="flex flex-col border-2 w-2/5">
                <h1 className="flex justify-center">History</h1>
                {data.map((dono) => (
                    <div className="border-t-2" key={dono._id}>
                        <div className="mx-2">Name: {dono.firstName} {dono.lastName}</div>
                        <div className="mx-2">{dono.type}: {dono.quantity}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
