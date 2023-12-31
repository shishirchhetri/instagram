import React from "react";
import Message from "../components/utils/Message";
import { RiMessengerLine } from "react-icons/ri";
import {MdKeyboardArrowDown} from 'react-icons/md'
import {SlNote} from 'react-icons/sl'
import mesage from '../assets/icons/messenger.png'

const Messages = () => {
  return (
    <div className="flex-[4]">
      <div className=" flex border-r border-gray-100 ">
      <div className="gap-3 px-3 border-r bg-green-100">
        <div className=" py-3 w-60">
          <div className="flex justify-between items-center py-2">
            <div className="flex gap-1">
                <span className="text-lg font-bold">Lisa </span>
              <span><MdKeyboardArrowDown className="icon-comp"/></span>
            </div>
            <div><SlNote className="icon-comp"/></div>
          </div>
          <div className="flex justify-between font-bold text-lg">
            Messages <span className="opacity-60 font-light text-sm">Requests</span>
          </div>
        </div>
        <ul className="flex flex-col flex-2 list-none gap-4 bg-green-50">
          <li>
            <Message />
          </li>
          <li>
            <Message />
          </li>

          <li>
            <Message />
          </li>

          <li>
            <Message />
          </li>

          <li>
            <Message />
          </li>
        </ul>
      </div>
      <div className="flex flex-col h-screen w-full items-center align-middle translate-y-80">
        <div className="border flex justify-center items-center rounded-full  h-32 w-32 border-black mx-auto"><RiMessengerLine className="h-20 w-20 opacity-80 "/></div>
        <div className="flex flex-col items-center  p-2 mx-auto">
          <p>Your messages</p>
          <p className="text-center">send private photos and messages to a friend or group.</p>
        </div>
        <button className=" flex border border-black-200 p-1 rounded-md bg-green-300 text-white font-bold mx-auto">Send message</button>
      </div>
    </div>
    </div>
  );
};

export default Messages;
