import React, { useState } from 'react';

const PersonalityPage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="flex flex-col justify-center bg-gradient-to-l from-[#BB90DB] via-white to-[#FCE8FF]">
      <div className="flex  justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="pl-3.5 mt-7 mb-1 max-w-full border-l border-t border-black border-solid drop-shadow-2xl bg-blue-50 rounded-[39px] w-[1058px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6be0ac2070f651587afcac33479ec45f46713fa55b75d5c33e97027444740a24?"
                className="self-stretch my-auto w-full aspect-[0.7] fill-purple-500 max-md:mt-8"
              />
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center px-16 pt-8 pb-16 w-full text-xl font-medium text-center text-black bg-white rounded-[39px] max-md:px-5 max-md:mt-4 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[395px]">
                  <div className="text-2xl font-bold font-Montserrat">
                    Which is your personality type?
                  </div>
                  <div className="flex flex-col mt-10 my-5 max-md:mt-5">
                    {['Party lover', 'Nature Enthusiast', 'Culture Explorer', 'Adventurer', 'Foodie', 'Sports Fan'].map((option, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between my-1 px-9 py-5 w-full bg-blue-50 rounded-3xl max-md:px-5 max-md:mt-5 ${selectedOptions.includes(option) ? 'bg-blue-200' : ''}`}
                        onClick={() => toggleOption(option)}
                      >
                        <div className="font-Montserrat">{option}</div>
                      </div>
                    ))}
                  </div>
                  <button type="submit" onClick={() => { window.location.href = `/evently/profile`;}} className="bg-[#B765D3] justify-center self-center px-11 py-3 mt-5 max-w-full font-bold text-center text-white rounded-2xl  max-md:px-5">Continue to Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalityPage;
