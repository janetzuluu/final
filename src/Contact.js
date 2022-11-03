import React from 'react'
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";


const Contact = () => {
  return (
    <div className="bg-[#e9f9f9] w-screen md:h-screen h-auto">
      <div className="flex justify-around items-center mx-20 md:flex-row flex-col">
        <div className="md:w-1/2 w-full md:p-10 my-10 md:my-0  flex-col">
          <h1 className="text-4xl font-semibold">How can we help you?</h1>
          <p className="text-black font-semibold text-sm my-5">
            For any inquiries, please fill out the contact form, or contact us through our support email.
          </p>
          <div className="flex-col my-20 gap-5 flex  ">
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-[#8cb1b9] md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-[#8cb1b9]" />
              <p className="text-gray-500 text-base font-semibold group-hover:text-[#8cb1b9]">
                (210)555-6358
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-[#8cb1b9] md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <GrMail className="text-xl text-gray-500  group-hover:text-[#8cb1b9]" />
              <p className="text-gray-500 text-base font-semibold group-hover:text-[#8cb1b9]">
                support@recipes.com
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-[#8cb1b9] md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <GrMail className="text-xl text-gray-500  group-hover:text-[#8cb1b9]" />
              <p className="text-gray-500 text-base font-semibold group-hover:text-[#8cb1b9]">
                San Antonio, Tx
              </p>
            </div>
          </div>
        </div>
        {/* Contact form */}
        <div className="bg-[#e9f9f9] p-12 rounded-lg shadow-md">
          <form>
            <div className="grid xl:grid-cols-2 xl:gap-10">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#8cb1b9] focus:outline-none"
                placeholder="First Name "
                required={true}
              />

              <input
                type="text"
                name="last_name"
                id="last_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#8cb1b9] focus:outline-none"
                placeholder="Last Name "
                required=""
              />
            </div>
            <input
              type="email"
              name="email"
              className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#8cb1b9] focus:outline-none"
              placeholder="Email "
              required={true}
            />
            <input
              type="text"
              name="subject"
              className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#8cb1b9] focus:outline-none"
              placeholder="Subject "
              required={true}
            />

            <div className="flex justify-center">
              <textarea
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#8cb1b9] focus:outline-none"
                id="comment"
                rows="3"
                placeholder="Your message"
                required={true}
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-[#8cb1b9] hover:bg-[#8cb1b9] focus:ring-4 focus:outline-none focus:ring-[#8cb1b9] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#8cb1b9] dark:hover:bg-[#8cb1b9] dark:focus:ring-[#8cb1b9]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact