
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useRef, useEffect, useState } from 'react'
import Ocean from "../../assets/ocean.png";
import Tv from "../../assets/tv.svg";
import Table from "../../assets/table.png";
import Wifi from "../../assets/wifi.png";
import Charging from "../../assets/charging.png";
import Thermostat from "../../assets/thermostat.png";
import Workspace from "../../assets/workspace.png";
import Grill from "../../assets/grill.svg";
import Essential from "../../assets/essential.png";
import Beach from "../../assets/beach.png";
import BarChart from '@/components/chart/BarChart';
import Map from '@/components/map/Map';
import MarketMap from '@/components/map/MarketMap';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";
import LineChart from '@/components/chart/LineChart';
import Faq from '@/components/faq/Faq';
import PropertyCardTwo from '@/components/propertyCard/PropertyCardTwo';

import AdditionalResources from '@/components/additionalResources/AdditionalResources';
import Link from 'next/link';


export default function Home() {
  // const [open, setOpen] = useState(false);
  // const [totalInvestment, setTotalInvestment] = useState(false);
  // const [financing, setFinancing] = useState(false);
  // const [loan, setLoan] = useState(false);
  // const [amortization, setAmortization] = useState(true);
  // const [revenue, setRevenue] = useState(false);
  // const [expenses, setExpenses] = useState(false);
  const [marketGrade, setMarketGrade] = useState(false);
  const [averageRate, setAverageRate] = useState(false);
  const [averageOccupancy, setAverageOccupancy] = useState(false);
  const [averageRevenue, setAverageRevenue] = useState(false);
  const [zillow, setZillow] = useState(false);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <p className="py-3 mt-4 text-center text-4xl font-semibold text-[#DEBD6D] ">A A S T H I</p>

      <div className="pt-0 lg:pt-20 ">

        <div className='grid grid-cols-12 lg:mx-14 gap-x-8'>
          <div className='order-3 relative flex justify-end lg:order-1 col-span-12 lg:col-span-2 xl:col-span-3'>
            <div className='relative lg:sticky lg:h-screen'>
              <ul className='hidden lg:flex flex-col mt-2 gap-y-2 pr-8 '>
                <li onClick={() => scrollToSection(section1Ref)} className='text-[#8f8f8f]  hover:text-black cursor-pointer'>
                  The property</li>
                <li onClick={() => scrollToSection(section2Ref)} className='text-[#8f8f8f]  hover:text-black cursor-pointer '>Overview</li>
                <li onClick={() => scrollToSection(section3Ref)} className='text-[#8f8f8f] cursor-pointer  hover:text-black'>Financials</li>
                <li onClick={() => scrollToSection(section4Ref)} className='text-[#8f8f8f]  hover:text-black cursor-pointer '>The market</li>
                <li onClick={() => scrollToSection(section5Ref)} className='text-[#8f8f8f]  hover:text-black cursor-pointer '>FAQ</li>
                <li onClick={() => scrollToSection(section6Ref)} className='text-[#8f8f8f]  hover:text-black cursor-pointer '>Resources</li> </ul>
            </div>
          </div>
          <div className=" px-4 relative order-2 mt-0 h-full lg:h-screen overflow-scroll scrollbar-hide lg:order-2 lg:px-0 col-span-12 lg:col-span-6 xl:col-span-5">
            <p id="section1" ref={section1Ref} className='text-[27px] font-bold text-black -leading-[0.75px] pt-4 lg:pt-0 '>The Property</p>
            <div className='grid grid-cols-3 gap-2'>
              <div>
                <p className='text-[#8f8f8f] text-[0.9rem]'>Bedrooms</p>
                <p className='text-[#200955] font-semibold'>5</p>
              </div>
              <div>
                <p className='text-[#8f8f8f] text-[0.9rem]'>Bathrooms</p>
                <p className='text-[#200955] font-semibold'>6</p>
              </div><div>
                <p className='text-[#8f8f8f] text-[0.9rem]'>Beds</p>
                <p className='text-[#200955] font-semibold'>8</p>
              </div>
              <div>
                <p className='text-[#8f8f8f] text-[0.9rem]'>Sleeps</p>
                <p className='text-[#200955] font-semibold'>14</p>
              </div>
              <div>
                <p className='text-[#8f8f8f] text-[0.9rem]'>Property type</p>
                <p className='text-[#200955] font-semibold'>House</p>
              </div><div>
                <p className='text-[#8f8f8f] text-[0.9rem]'>Living space</p>
                <p className='text-[#200955] font-semibold'>3,589 <sub>sq ft</sub></p>
              </div>            <div>
                <p className='text-[#8f8f8f] text-[0.9rem]'>Lot size</p>
                <p className='text-[#200955] font-semibold'>17,859<sub>sq ft</sub></p>
              </div>
              <div>
                <p className='text-[#8f8f8f] text-[0.9rem]'>Year built</p>
                <p className='text-[#200955] font-semibold'>1990</p>
              </div><div>
                <p className='text-[#8f8f8f] text-[0.9rem]'>Location</p>
                <p className='text-[#200955] font-semibold'>Sedona, Arizona</p>
              </div>
            </div>
            <br />
            <Link href="https://www.airbnb.com/rooms/919605381720707833?source_impression_id=p3_1690473841_5aSd0IfgWAZ3kkse" target="_blank">
              <p className='text-[#d74e4e] font-normal text-lg cursor-pointer'>Airbnb Listing</p>
            </Link>    {/* <br /> */}
            <p className='text-[1.2rem] font-medium py-4'>Amenities</p>
            <div className='grid grid-cols-12 gap-2'>
              <div className='col-span-12 lg:col-span-7'>

                <div className='flex items-center py-3 gap-x-6'>
                  <Image src={Ocean} />
                  <p>Near ocean</p>
                </div>

                <div className='flex items-center py-3 gap-x-6'>
                  <Image src={Table} />
                  <p>Pool table</p>
                </div>
                <div className='flex  items-center py-3 gap-x-6'>
                  <Image src={Charging} />
                  <p>EV charging</p>
                </div>
                <div className='flex items-center py-3 gap-x-6'>
                  <Image src={Workspace} />
                  <p>Laptop friendly workspace</p>
                </div>
                <div className='flex items-center py-3 gap-x-6'>
                  <Image src={Essential} />
                  <p>Essentials</p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <div className='flex py-3 items-center gap-x-6'>
                  <Image src={Tv} />
                  <p>Smart tv</p>
                </div>
                <div className='flex py-3 items-center gap-x-6'>
                  <Image src={Wifi} />
                  <p>Wireless internet</p>
                </div>
                <div className='flex items-center py-3 gap-x-6'>
                  <Image src={Thermostat} />
                  <p>Smart thermostat</p>
                </div>

                <div className='flex items-center  py-3 gap-x-6'>
                  <Image src={Grill} />
                  <p>BBQ grill</p>
                </div>

                <div className='flex items-center pt-3 gap-x-6'>
                  <Image src={Beach} />
                  <p>Beach essentials included</p>
                </div>
              </div>

            </div>
            <button className='border-[1px] border-solid border-black w-60 h-14 rounded-full text-[0.95rem] hover:bg-black hover:text-white mt-8 '>Show all 45 emenities</button>
            <hr className='text-[#8d8d8d] h-[1px] my-10' />

            <p id="section2" ref={section2Ref} className='text-[27px] font-bold text-black -leading-[0.75px] '>Overview</p>

            <p className='pt-2'>Surrounded by the world-famous Sedona Red Rocks, Terracotta, is your dream desert vacation home. This property provides great outdoor space to take in the mountainous views, including a covered private balcony for guests to soak up the warm climate and stay cool under the bright Arizona sun. There’s room for everyone here - with a total of five bedrooms, a spacious living room to cozy up next to the indoor fireplace, and an attached garage with plenty of parking availability to accommodate large groups. Terracotta is conveniently located within Sedona and only a few minutes from Red Rock State Park, Slide Rock State park, and Devil’s Bridge photo spot, among others.</p>
            <p className='pt-4'>Sedona, Arizona, a small southwestern city located within the Coconino National Forest has quickly become one of the top travel destinations in the United States. Though many travelers visit Sedona as part of their larger southwestern road trip, which often includes nearby places like Lake Powell, Horseshoe Bend, and the Grand Canyon, Sedona has become its own hub for all types of unique activities. The city is well known for its spiritual welleness and metaphsycial communities that welcome travelers looking for healing and meditation, among others. Sedona is also home to numerous adventure sports, like Jeep tours and mountain biking, among the famous red rock formations. Whether Sedona is part of a larger roadtrip, or a vacation destination in itself, travelers here are in for a treat once they arrive at this majestic desert city.</p>
            <p className='pt-4'>In addition to its beaches and family-friendly attractions, Panama City Beach is also a popular destination for young adults. The area is home to a number of nightclubs and beachside bars, which host events and parties throughout the summer. </p>
            <p className='pt-4'>For a more laid-back vacation, visitors can enjoy a leisurely bike ride along the beach, explore the local nature trails, or simply relax and soak up the sun. The area is also home to several championship golf courses, which are popular with golf enthusiasts looking to hone their skills on the green. With so much to see and do, it's no wonder that Panama City Beach continues to be a popular vacation destination for visitors of all ages and interests.</p>
            <p className='font-bold pt-4'>Expected Payout Date: November 2023  </p>
            <hr className='text-[#8d8d8d] h-[1px] my-10' />
            <p id="section3" ref={section3Ref} className='text-[1.3rem] text-black font-medium'>Financing</p>
            <p className='font-bold text-[2.2rem]'>0%</p>
            <p className='text-[#8f8f8f] font-normal decoration-dotted underline underline-offset-4'>Loan-to-Value (LTV)</p>
            <div className='w-full bg-[#95DEC4] h-6 rounded-md my-4'></div>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <div className='bg-[#95DEC4] w-4 h-4 mt-2'></div>
                <p className='text-[#8f8f8f] font-normal decoration-dotted underline underline-offset-4 pt-2'>Equity</p>
                <br />
                <p className='text-[#8f8f8f] font-normal decoration-dotted underline underline-offset-4 pt-2'>Interest rate</p>
                <p className='font-semibold pt-1 text-[1rem]'>0%</p>
              </div>
              <div>
                <div className='bg-[#00AE70] w-4 h-4 mt-2'></div>
                <p className='text-[#8f8f8f] font-normal decoration-dotted underline underline-offset-4 pt-2'>Debt</p>
                <br />
                <p className='text-[#8f8f8f] font-normal decoration-dotted underline underline-offset-4 pt-2'>Loan term</p>
                <p className='font-semibold pt-1 text-[1rem]'>0 yrs</p>
              </div>
            </div>
            <hr className='text-[#8d8d8d] h-[1px] my-10' />
            <div onClick={() => setAverageRate(!averageRate)} className='flex mt-2 cursor-pointer justify-between'>
              <div>
                <p className=' font-semibold text-[1.1rem]'>Average daily rate<sup cla>(1)</sup></p>
                <p className='text-[1.4rem]'>$1,115.00</p>
              </div>
              <IoMdArrowDropdown fontSize={24} />

            </div>
            <div> <BarChart />
            </div>


            <hr className='text-[#8d8d8d] h-[1px] my-6' />


            <div onClick={() => setAverageOccupancy(!averageOccupancy)} className='flex mt-2 cursor-pointer justify-between'>
              <div>
                <p className=' font-semibold text-[1.1rem]'>Average occupancy<sup cla>(1)</sup></p>
                <p className='text-[1.4rem]'>53$</p>
              </div>
              <IoMdArrowDropdown fontSize={24} />

            </div>
            <div> <BarChart /> </div>
            <hr className='text-[#8d8d8d] h-[1px] my-6' />

            <div onClick={() => setAverageRevenue(!averageRevenue)} className='flex mt-2 cursor-pointer justify-between'>
              <div>
                <p className=' font-semibold text-[1.1rem]'>Average revenue<sup cla>(1)</sup></p>
                <p className='text-[1.4rem]'>$14,490.00</p>
              </div>
              <IoMdArrowDropdown fontSize={24} />
            </div>

            <div> <BarChart />    </div>


            <hr className='text-[#8d8d8d] h-[1px] my-6' />


            <div onClick={() => setZillow(!zillow)} className='flex mt-2 cursor-pointer justify-between'>
              <div>
                <p className=' font-semibold text-[1.1rem]'>Zillow home values<sup >(2)</sup></p>
                <div className='flex gap-x-2 items-center'>
                  <p className='text-[1.4rem]'>15%</p>
                  <p className='text-[0.8rem] mt-2 text-[#8d8d8d]'>5-year historical average</p> </div>
              </div>
              <IoMdArrowDropdown fontSize={24} />

            </div>
            <div> <LineChart /></div>


            <hr className='text-[#8d8d8d] h-[1px] my-6' />

            <p id="section4" ref={section4Ref} className='text-[27px] font-bold text-black -leading-[0.75px] pb-1'>The market</p>
            <MarketMap />
            <p className='text-[#8f8f8f] py-2'>Sedona,Arixona</p>


            <div onClick={() => setMarketGrade(!marketGrade)} className='flex mt-2 cursor-pointer justify-between'>
              <p className=' font-semibold text-[1.1rem]'>Market Grade<sup cla>(1)</sup></p>
              <IoMdArrowDropdown fontSize={24} />
            </div>
            <>
              <div className='flex pt-4 justify-between'>
                <div className='flex items-center gap-x-6'>
                  <FiAlertCircle fontSize={24} />
                  <p>Market grade</p>
                </div>
                <p className=' h-9 w-9 text-white items-center flex justify-center rounded-full bg-black'>B+</p>
              </div>
              <div className='flex pt-4 justify-between items-center'>
                <div className='flex w-72 items-center gap-x-6'>
                  <FiAlertCircle fontSize={24} />
                  <p>Rental Demand</p>
                </div>
                <div class="w-full h-1.5 mx-6 bg-gray-200 rounded">
                  <div class="h-full bg-black rounded" style={{ width: "87%" }}></div>
                </div>
                <div>
                  <p>87</p>
                </div>
              </div>
              <div className='flex pt-5 justify-between items-center'>
                <div className='flex w-72 items-center gap-x-6'>
                  <FiAlertCircle fontSize={24} />
                  <p>Seasonality</p>
                </div>
                <div class="w-full h-1.5 mx-6 bg-gray-200 rounded">
                  <div class="h-full bg-black rounded" style={{ width: "43%" }}></div>
                </div>
                <div>
                  <p>43</p>
                </div>

              </div>
              <div className='flex pt-5 justify-between items-center'>
                <div className='flex w-72 items-center gap-x-6'>
                  <FiAlertCircle fontSize={24} />
                  <p>Regulation</p>
                </div>
                <div class="w-full h-1.5 mx-6 bg-gray-200 rounded">
                  <div class="h-full bg-black rounded" style={{ width: "50%" }}></div>
                </div>
                <div>
                  <p>63</p>
                </div>

              </div>
              <div className='flex pt-5 justify-between items-center'>
                <div className='flex w-72 items-center gap-x-6'>
                  <FiAlertCircle fontSize={24} />
                  <p>Invstability</p>
                </div>
                <div class="w-full h-1.5 mx-6 bg-gray-200 rounded">
                  <div class="h-full bg-black rounded" style={{ width: "22%" }}></div>
                </div>
                <div>
                  <p>22</p>
                </div>

              </div>   <div className='flex pt-5 justify-between items-center'>
                <div className='flex w-72 items-center gap-x-6'>
                  <FiAlertCircle fontSize={24} />
                  <p>Revenue growth</p>
                </div>
                <div class="w-full h-1.5 mx-6 bg-gray-200 rounded">
                  <div class="h-full bg-black rounded" style={{ width: "13%" }}></div>
                </div>
                <div>
                  <p>13</p>
                </div>

              </div>   </>
            <br />
            <hr className='text-[#8d8d8d] h-[1px] my-6' />

            <p className='text-[#8d8d8d] italic text-[0.7rem]'><sup>(1)</sup>Statistics and definitions are based on data for similar sized homes using the 50th percentile in the Panama City Beach, FL market for the 12 months ending February 28th, 2023. Source: AirDNA                </p>
            <p className='text-[#8d8d8d] italic text-[0.7rem] pt-2'><sup>(1)</sup>ZHVI represents the typical home value for 32413. Source: Zillow</p>

          </div>


          <div className='relative order-1 lg:order-3  col-span-12 lg:col-span-3 xl:col-span-4'>
            <div className='relative lg:sticky lg:h-screen'>
              <PropertyCardTwo />
            </div>
          </div>
        </div>
        <div>

          <div className='grid grid-cols-12 gap-2 mt-4 mx-4 lg:mx-0 '>
            <div className='lg:col-span-3'>
            </div>
            <div className='col-span-12 mx-0 lg:mx-9 lg:col-span-8'>
              <div id='section5' ref={section5Ref}>
                <Faq />
              </div>
              <br />
              <div id="section6" ref={section6Ref}>
                <AdditionalResources />
              </div>       <br />
              <br />
            </div>
            <div className='lg:col-span-1'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
