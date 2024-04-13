"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-8 mx-12">
      {/* navbar */}

      <div className="grid grid-flow-col place-content-between items-center">
        <div><Image
                  className=""
                  src={"/images/travelpro.png"}
                  alt={""}
                  height={200}
                  width={200}
                /></div>
        <div className="grid grid-flow-col place-content-start gap-10">
          <div className="hover:underline">Our Tours</div>
          <div className="hover:underline">About Us</div>
          <div className="hover:underline">Booking</div>
          <div className="hover:underline">FAQ</div>
        </div>
        <div>
          <Image src={"/icons/menu.svg"} alt={""} height={25} width={25} />
        </div>
      </div>

      {/* part 1  */}

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="grid grid-flow-row gap-10 absolute ml-16 mt-20 "
        >
          <div className=" font-semibold text-8xl text-white ">
            Explore the sights of the Azores
          </div>
          <div className="text-white">
            A place where nature and adventure unites
          </div>
          {/* Book now button */}
          <motion.div
            whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.3 }}
            className="text-lg font-medium text-gray-500 bg-white border-2 text-nowrap rounded-full w-min px-5 py-4 hover:text-blue-"
          >
            Book now
          </motion.div>
          {/* Forward and backward button */}
          <div className="grid grid-flow-col justify-start gap-4">
            <motion.div
              whileHover={{ scale: [null, 1, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className=""
                src={"/images/whitearrow.png"}
                alt={""}
                height={30}
                width={30}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: [null, 1, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className=""
                src={"/images/blackarrow.png"}
                alt={""}
                height={30}
                width={30}
              />
            </motion.div>
          </div>
        </motion.div>
        <Image
          className="my-10 rounded-lg overflow-hidden h-[700px]"
          src={"/images/Land1.png"}
          alt={""}
          height={900}
          width={2000}
        />
      </div>

      {/* part 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="px-10 py-10">
          <div className="flex flex-col items-center ">
            <div className="font-bold text-5xl py-5">Top Values for you</div>
            <div>Try variety of benefits when using our service</div>
          </div>
        </div>
        {/* 4 cards */}
        <div className="container mx-auto px-20 py-20">
          <div className="grid grid-flow-col gap-10 ">
            {/* card 1 */}
            <div className="grid grid-flow-row place-items-center text-center gap-6">
              <div>
                <Image
                  className=""
                  src={"/images/pickup.png"}
                  alt={""}
                  height={50}
                  width={50}
                />
              </div>
              <div className="py-5">
                <h1 className="font-semibold">Airport booking</h1>
                <p className="text-sm">
                  We provide escortf rom the airport to the hotel
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="grid grid-flow-row place-items-center text-center">
              <div>
                <Image
                  className=""
                  src={"/images/booking.png"}
                  alt={""}
                  height={50}
                  width={50}
                />
              </div>
              <div className="py-5">
                <h1 className="font-semibold">Easy booking</h1>
                <p className="text-sm">
                  Quick and easy booking of tours for upcoming dates
                </p>
              </div>
            </div>
            {/* card 3 */}
            <div className="grid grid-flow-row place-items-center text-center">
              <div>
                <Image
                  className=" align-center"
                  src={"/images/giude.png"}
                  alt={""}
                  height={50}
                  width={50}
                />
              </div>
              <div className="py-5">
                <h1 className="font-semibold">Best tour giude</h1>
                <p className="text-sm">
                  Our best tour guides is ready to guide your trip
                </p>
              </div>
            </div>
            {/* card 4 */}
            <div className="grid grid-flow-row place-items-center text-center">
              <div>
                <Image
                  className=" align-center"
                  src={"/images/promo.png"}
                  alt={""}
                  height={50}
                  width={50}
                />
              </div>
              <div className="py-5">
                <h1 className="font-semibold">Lots of promos</h1>
                <p className="text-sm">
                  Various promotions and drawing of tours
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Part 3 */}
      <div className="container mx-auto ">
        <div className="font-bold text-4xl">
          <h1>Choose your tour</h1>
        </div>
        <div className="grid grid-flow-col gap-10 m-10">
          {/* card 1 */}
          <motion.div
            whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.3 }}
            className=" rounded-lg shadow-lg"
          >
            <div>
              <Image
                className=" rounded-lg"
                src={"/images/alone.png"}
                alt={""}
                height={300}
                width={300}
              />
            </div>

            <div className="grid grid-flow-col items-center">
              <div className="py-5 px-4">
                <h1 className="font-semibold">Alone with nature</h1>
                <div className="grid grid-flow-col justify-start">
                  <p className="font-semibold">$100</p>
                  <p>/person</p>
                </div>
              </div>
              {/* card forward icon */}
              <div>
                <Image
                  className=" rounded-lg"
                  src={"/images/arrow-3.png"}
                  alt={""}
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </motion.div>

          {/* card 2 */}
          <motion.div
            whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.3 }}
            className=" rounded-lg shadow-lg"
          >
            <div>
              <Image
                className=" rounded-lg"
                src={"/images/egpt.png"}
                alt={""}
                height={300}
                width={300}
              />
            </div>

            <div className="grid grid-flow-col items-center">
              <div className="py-5 px-4">
                <h1 className="font-semibold">Egypt</h1>
                <div className="grid grid-flow-col justify-start">
                  <p className="font-semibold">$500</p>
                  <p>/person</p>
                </div>
              </div>
              {/* card forward icon */}
              <div>
                <Image
                  className=" rounded-lg"
                  src={"/images/arrow-3.png"}
                  alt={""}
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </motion.div>

          {/* card 3 */}
          <motion.div
            whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.3 }}
            className=" rounded-lg shadow-lg"
          >
            <div>
              <Image
                className=" rounded-lg"
                src={"/images/jride.png"}
                alt={""}
                height={300}
                width={300}
              />
            </div>

            <div className="grid grid-flow-col items-center">
              <div className="py-5 px-4">
                <h1 className="font-semibold">Jeep ride</h1>
                <div className="grid grid-flow-col justify-start">
                  <p className="font-semibold">$200</p>
                  <p>/person</p>
                </div>
              </div>
              {/* card forward icon */}
              <div>
                <Image
                  className=" rounded-lg"
                  src={"/images/arrow-3.png"}
                  alt={""}
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </motion.div>

          {/* card 4 */}
          <motion.div
            whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.3 }}
            className=" rounded-lg shadow-lg"
          >
            <div>
              <Image
                className=" rounded-lg"
                src={"/images/hiking.png"}
                alt={""}
                height={300}
                width={300}
              />
            </div>

            <div className="grid grid-flow-col items-center">
              <div className="py-5 px-4">
                <h1 className="font-semibold">Hiking</h1>
                <div className="grid grid-flow-col justify-start">
                  <p className="font-semibold">$150</p>
                  <p>/person</p>
                </div>
              </div>
              {/* card forward icon */}
              <div>
                <Image
                  className=" rounded-lg"
                  src={"/images/arrow-3.png"}
                  alt={""}
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </motion.div>

          {/* card 5 */}
          <motion.div
            whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.3 }}
            className=" rounded-lg shadow-lg"
          >
            <div>
              <Image
                className=" rounded-lg"
                src={"/images/island.png"}
                alt={""}
                height={300}
                width={300}
              />
            </div>

            <div className="grid grid-flow-col items-center">
              <div className="py-5 px-4">
                <h1 className="font-semibold">Corners of the island</h1>
                <div className="grid grid-flow-col justify-start">
                  <p className="font-semibold">$220</p>
                  <p>/person</p>
                </div>
              </div>
              {/* card forward icon */}
              <div>
                <Image
                  className=" rounded-lg"
                  src={"/images/arrow-3.png"}
                  alt={""}
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </motion.div>
        </div>
        {/* See all button */}
        <motion.div
          whileHover={{ scale: [null, 1, 1.1] }}
          transition={{ duration: 0.3 }}
          className="grid grid-flow-col justify-center"
        >
          <div className="bg-white rounded-full w-40 border border-black">
            <div className="text-black px-3 py-2 text-center font-normal">
              See all
            </div>
          </div>
        </motion.div>
      </div>

      {/* part 4 */}

      <div className="container mx-auto">
        <div className="relative">
          <div className="absolute grid grid-flow-col m-16 gap-36">
            <div className="grid grid-flow-row h-min">
              <div className="font-semibold text-8xl text-white">
                Enjoy your travel
              </div>
              <div className=" text-white my-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>

            <div className="box-content h-72 w-80 mt-24 p-4 border-2 bg-transparent rounded-3xl border-white">
              <div className=" backdrop-blur-lg bg-sky-100/20 px-5 py-5 rounded-md shadow-xs">
                <div className="text-white justify-center font-medium">
                  Lighthouse Farol Ponta do Arnel
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            <Image
              className="my-10 rounded-lg overflow-hidden h-[700px]"
              src={"/images/Land2.png"}
              alt={""}
              height={900}
              width={2000}
            />
          </div>
        </div>
      </div>

      {/* part 5 */}

      <div className="container mx-auto">
        <div className="grid grid-flow-col gap-8 justify-center items-center">
          <div className="grid grid-flow-row justify-center">
            <div className="rounded-lg bg-transparent shadow-md h-min">
              <div className="">
                <Image
                  className="rounded-xl"
                  src={"/images/nor.png"}
                  alt={""}
                  height={400}
                  width={800}
                />
              </div>
              <div className="mx-10 my-10">
                <div className="text-xl font-bold">Hiking</div>
                <div className="grid grid-flow-col justify-start mt-4 gap-5">
                  <div className="bg-gray-200 rounded-full text-xs">
                    <div className="text-center mx-6 my-2">Text</div>
                  </div>
                  <div className="bg-gray-200 rounded-full text-xs">
                    <div className="text-center mx-6 my-2">Text</div>
                  </div>
                  <div className="bg-gray-200 rounded-full text-xs">
                    <div className="text-center mx-6 my-2">Text</div>
                  </div>
                  <div className="bg-gray-200 rounded-full text-xs">
                    <div className="text-center mx-6 my-2">Text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* grid 2 row */}
          <div className="grid grid-flow-row gap-8">
            <div className="grid grid-flow-row justify-center">
              <div className="rounded-lg bg-transparent shadow-md h-min">
                <div className="">
                  <Image
                    className="rounded-xl w-full"
                    src={"/images/pic_1.png"}
                    alt={""}
                    height={100}
                    width={300}
                  />
                </div>
                <div className="mx-10 my-10">
                  <div className="text-xl font-bold">Hiking</div>
                  <div className="grid grid-flow-col justify-start mt-4 gap-5">
                    <div className="bg-gray-200 rounded-full text-xs">
                      <div className="text-center mx-6 my-2">Text</div>
                    </div>
                    <div className="bg-gray-200 rounded-full text-xs">
                      <div className="text-center mx-6 my-2">Text</div>
                    </div>
                    <div className="bg-gray-200 rounded-full text-xs">
                      <div className="text-center mx-6 my-2">Text</div>
                    </div>
                    <div className="bg-gray-200 rounded-full text-xs">
                      <div className="text-center mx-6 my-2">Text</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-row justify-center">
              <div className="rounded-lg bg-transparent shadow-md h-min">
                <div className="">
                  <Image
                    className="rounded-xl w-full"
                    src={"/images/walk.png"}
                    alt={""}
                    height={100}
                    width={300}
                  />
                </div>
                <div className="mx-10 my-10">
                  <div className="text-xl font-bold">Hiking</div>
                  <div className="grid grid-flow-col justify-start mt-4 gap-5">
                    <div className="bg-gray-200 rounded-full text-xs">
                      <div className="text-center mx-6 my-2">Text</div>
                    </div>
                    <div className="bg-gray-200 rounded-full text-xs">
                      <div className="text-center mx-6 my-2">Text</div>
                    </div>
                    <div className="bg-gray-200 rounded-full text-xs">
                      <div className="text-center mx-6 my-2">Text</div>
                    </div>
                    <div className="bg-gray-200 rounded-full text-xs">
                      <div className="text-center mx-6 my-2">Text</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 6div */}
      <div className="container mx-auto grid grid-flow-col">
        <div className="relative">
          <div className="absolute">
            <div className="grid grid-flow-row mt-32 ml-64 place-items-center">
              <div className="text-white font-semibold text-6xl text-center">
                Let's get to know the azores
              </div>
              {/* Book now button */}
              <motion.div 
              whileHover={{ scale: [null, 1, 1.1] }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-full w-40 border border-black mt-12 ">
                <div className="text-black px-3 py-2 text-center font-medium">
                  Book Now
                </div>
              </motion.div>
            </div>
          </div>
          <div>
            <Image
              className="my-10 rounded-3xl overflow-hidden h-96 w-screen"
              src={"/images/light.png"}
              alt={""}
              height={500}
              width={1000}
            />
          </div>
        </div>
      </div>

      {/* part 7 footer */}

      <div className=" bg-gray-100 rounded-xl mb-20">
        <div className="grid grid-flow-col pt-10 px-10 ">
          <div className="grid grid-flow-row">
            <div><Image
                  className=""
                  src={"/images/travelpro.png"}
                  alt={""}
                  height={150}
                  width={150}
                /></div>
            <div>Travel all across the world with luxury and comfort.</div>
          </div>
          <div className="grid grid-flow-row">
            <div className=" font-semibold">About US</div>
            <div className="text-sm font-light">Our guides</div>
            <div className="text-sm font-light">Blog</div>
            <div className="text-sm font-light">Contact Us</div>
          </div>
          <div className="grid grid-flow-row">
            <div className=" font-semibold">FAQ</div>
            <div className="text-sm font-light">Personal trip</div>
            <div className="text-sm font-light">group trip</div>
            <div className="text-sm font-light">Contact Us</div>
          </div>
          <div className="grid grid-flow-row">
            <div className=" font-semibold">Further information</div>
            <div className="text-sm font-light">Terms and use</div>
            <div className="text-sm font-light">Health ans safety</div>
            <div className="text-sm font-light">Privacy policy</div>
          </div>
        </div>
        <div className="mx-10 py-8">
          <div className="h-[1px] bg-gray-600 "></div>
          <div className="grid grid-flow-col justify-between items-center ">
            <div className="text-xs my-4">
              Copyright 2024 islandLLC-1101 12th, New york USA
            </div>
            <div className="grid grid-flow-col gap-6">
              <motion.div
                whileHover={{ scale: [null, 1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className=""
                  src={"/icons/fb.png"}
                  alt={""}
                  height={20}
                  width={20}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className=""
                  src={"/icons/insta.png"}
                  alt={""}
                  height={20}
                  width={20}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className=""
                  src={"/icons/tw.png"}
                  alt={""}
                  height={20}
                  width={20}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
