"use client"

import { useEffect, useState } from 'react';
import DropDown from '../components/DropDown';
import axios from 'axios';

export default function Home() {

  // Create states for input
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>();
  const [selectedOption, setSelectedOption] = useState<string>('Options');
  const [data, setData] = useState<any[]>([]);

  // Functions to update input
  const firstNameHandler = () => {
    setFirstName(event.target.value);
  }

  const lastNameHandler = () => {
    setLastName(event.target.value);
  }

  const quantityHandler = () => {
    setQuantity(event.target.value)
  }

  const getHistory = async () => {
    try {
      const response = await axios.get('/api/history');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error', error)
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log('FirstName:', firstName)
    // console.log('lastName:', lastName)
    // console.log('selectedOption:', selectedOption)
    // console.log('quantity:', quantity)
    getHistory();
  }


  return (
    <main>
      <h1 className="flex justify-center">Donation Form</h1>
      <form onSubmit={submitHandler} className="flex justify-center items-center">
        <div className="flex flex-col border-2">
          <div className="flex my-5">
            <div className="flex flex-col mx-5">
              <label>First Name: </label>
              <input className="border-2" type="text" value={firstName} onChange={firstNameHandler} />
            </div>
            <div className="flex flex-col mx-5">
              <label>Last Name: </label>
              <input className="border-2" type="text" value={lastName} onChange={lastNameHandler} />
            </div>
          </div>
          <div className="flex">
            <label className="mx-5">Type of Donation: </label>
            <DropDown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          </div>
          <div className="flex mx-5 my-5">
            <label>Quantity to Donate: </label>
            {/*Set to only accept numbers*/}
            <input className="border-2 mx-3" type="number" value={quantity} onChange={quantityHandler} />
          </div>
          <div className="flex justify-center my-5">
            <input className="border-2 bg-gray-200 w-20" type="submit" />
          </div>
        </div>
      </form>
      <div className="my-10 flex justify-center">
        History
      </div>
    </main>
  );
}
