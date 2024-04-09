import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-8 mx-12">
      {/* navbar */}
      <div className="grid grid-flow-col place-content-between">
        <div className="font-black">Island*</div>

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
      {/*  */}
      <div>
        <div className="relative">
          <div className="grid grid-flow-row gap-10 absolute ml-16 mt-20 ">
            <div className="font-black text-8xl text-white ">
              Explore the sights of the Azores
            </div>
            <div className="text-white">
              A place where nature and adventure unites
            </div>
            {/* Book now button */}
            <div className="text-lg font-medium text-gray-500 bg-white border-2 text-nowrap rounded-full w-min px-5 py-4 hover:text-blue-">
              Book now
            </div>
            {/* Forward and backward button */}
            <div className="grid grid-flow-col justify-start gap-4">
              <div>
                <Image
                  className=""
                  src={"/images/whitearrow.png"}
                  alt={""}
                  height={30}
                  width={30}
                />
              </div>
              <div>
                <Image
                  className=""
                  src={"/images/blackarrow.png"}
                  alt={""}
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </div>

          <Image
            className="my-10 rounded-lg overflow-hidden h-[700px]"
            src={"/images/Land1.png"}
            alt={""}
            height={900}
            width={2000}
          />
        </div>
      </div>

      {/* part 2 */}
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
          <div className="grid grid-flow-row place-items-center text-center">
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
              <p>We provide escortf rom the airport to the hotel</p>
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
              <p>Quick and easy booking of tours for upcoming dates</p>
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
              <p>Our best tour guides is ready to guide your trip</p>
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
              <p>Various promotions and drawing of tours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3 */}
      <div className="container mx-auto ">
        <div className="font-bold text-4xl">
          <h1>Choose your tour</h1>
        </div>
        <div className="grid grid-flow-col gap-10 m-10">
          {/* card 1 */}
          <div className=" rounded-lg shadow-lg">
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
          </div>

          {/* card 2 */}
          <div className=" rounded-lg shadow-lg">
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
          </div>

          {/* card 3 */}
          <div className=" rounded-lg shadow-lg">
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
          </div>
          {/* card 4 */}
          <div className=" rounded-lg shadow-lg">
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
          </div>
          {/* card 5 */}
          <div className=" rounded-lg shadow-lg">
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
          </div>
        </div>
      </div>

    </div>
  );
}
