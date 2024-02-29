import React from 'react';
import './App.css';
import FirstPic from "./components/FirstPic";
import GreenBox from './components/GreenBox';
import SecondPic from './components/SecondPic';
import BrownBox from './components/BrownBox';
import ThirdPic from './components/ThirdPic';
import PinkBox from './components/PinkBox';
import ForfthPic from './components/ForfthPic';
import BlueBox from './components/BlueBox';
import FifthPic from './components/FifthPic';
import GrayBox from './components/GrayBox';
import AdditionalTextOne from './components/AdditionalTextOne';
import AdditionalTextTwo from './components/AdditionalTextTwo';
import HorizontalLineOne from './components/HorizontalLineOne';
import HorizontalLineTwo from './components/HorizontalLineTwo';
import Lists from './components/Lists';
import ListOne from './components/ListOne';
import HorizontalLineThree from './components/HorizontalLineThree';
import AdditionalTextThree from './components/AdditionalTextThree';
import PicSix from './components/PicSix';
import Buttons from './components/Buttons';

function App() {
  const firstText : string[] = ["*At participating stores only. Some restrictions apply. Linked Card members",
  "will earn 2% Cash Back on the full purchase price of every Qualifying Purchase.",
  "Bonus Star offer excludes taxes and tips. Stars may not be earned on purchases",
  "of alcohol or on reloads of Starbucks Cards that are not registered. For full",
  "details, visit www.starbucks.com/bofa. Bank of America, N.A. Member FDIC."
  ]

  return (
    <>
    <div className='App'>
      <Buttons/>
      <FirstPic/>
      <GreenBox/>
      <SecondPic/>
      <BrownBox/>
      <ThirdPic/>
      <PinkBox/>
      <ForfthPic/>
      <BlueBox/>
      <FifthPic/>
      <PicSix/>
      <GrayBox/>
      <AdditionalTextOne items= {firstText}/>
      <AdditionalTextTwo/>
      <AdditionalTextThree/>
      <HorizontalLineOne/>
      <HorizontalLineTwo/>
      <HorizontalLineThree/>
      <ListOne/>
      <Lists/>
      </div>
    </>
  )
}

export default App
