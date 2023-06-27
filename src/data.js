import { BsInstagram } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import {  AiOutlineHeart } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import profile from "./assets/img2.jpg";

const menuItems = [{
    path:'/',
    name:'home',
    icon:'<AiOutlineHome/>',
    title:'home'
},
{
    path:'/',
    name:'home',
    icon:'<AiOutlineHome/>',
    title:'home'
},
{
    path:'/search',
    name:'search',
    icon:'<GoSearch/>',
    title:'search'
},
{
    path:'/explore',
    name:'explore',
    icon:'<MdOutlineExplore/>',
    title:'explore'
},
{
    path:'/reels',
    name:'reels',
    icon:'<MdOutlineAddBox/>',
    title:'reels'
},
{
    path:'/messages',
    name:'messages',
    icon:'<RiMessengerLine/>',
    title:'messages'
},
{
    path:'/notifications',
    name:'notifications',
    icon:'<AiOutlineHeart/>',
    title:'notifications'
},
{
    path:'/create',
    name:'create',
    icon:'<MdOutlineAddBox/>',
    title:'create'
},
{
    path:'/profile',
    name:'profile',
    icon:profile,
    title:'profile'
}
]

export default menuItems;