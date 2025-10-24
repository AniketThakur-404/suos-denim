import React, { useState } from 'react';

const Newsletter = () => {
  const [region, setRegion] = useState('NORTH AMERICA');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitting email:', email, 'for region:', region);
    alert(`Signed up with ${email} for ${region}!`);
    setEmail('');
  };

  // This is the dark charcoal background color from your image
  const darkBackgroundColor = 'rgb(29, 29, 29)'; 
  // This is the color for the dark submit button
  const submitButtonColor = 'rgb(34, 34, 34)';

  return (
    // Set the overall background to the dark charcoal color
    // Added 'text-white' so the SVG component inherits the color
    <div 
      className="min-h-screen flex items-center justify-center p-8 text-white"
      style={{ backgroundColor: darkBackgroundColor }}
    >
      <div className="flex flex-col lg:flex-row w-full max-w-6xl items-center lg:items-start">
        
        {/* Left Side: Embedded SVG for "SIGN UP" logo */}
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-16">
          <svg xmlns="http://www.w3.org/2000/svg" width="788" height="470" fill="none" viewBox="0 0 788 470" className="h-auto w-full">
            <path fill="currentColor" d="M125.158 300.297h4.586v65.296h-4.586v26.187h-4.707v25.847h-4.586v13.263h-9.294v12.923h-4.586v13.264h-14V470h-41.64v-12.923H32.467v-13.264h-9.293V430.89h-4.586v-13.263H13.88v-12.924H9.293v-26.186H4.586V352.33H0v-25.847h23.173v25.847h4.586v26.187h4.707v13.263h9.173v12.923h9.293v12.924h32.466v-12.924h9.294V391.78h4.586v-13.263h4.707V352.33h4.586v-25.847h-4.586v-26.186h-4.707v-12.924h-4.586V274.11h-9.294v-12.923H64.812v-13.264H41.639V235h-9.173v-12.923h-9.293v-13.264h-4.586V195.89H13.88v-13.263H9.293V156.78H4.586V91.483h4.707V65.297h4.587V52.373h4.707V39.11h4.586V26.187h4.586V12.923h13.88V0h46.346v12.923h9.293v13.264h9.293V39.11h4.587v12.923h4.707v13.264h4.586v26.186h4.586v25.847h-23.052v-12.923h-4.707V78.22h-9.293V65.297h-9.173V52.033H46.346v13.264h-9.293V78.22h-4.587v13.263H27.76v52.034h4.707v13.263h4.587v12.923h4.586v12.924h14v13.263h23.173v12.923h13.88v13.264h13.879V235h4.587v12.923h4.707v13.264h4.586v12.923h4.707v26.187ZM141.693 0h23.776v470h-23.776V0Zm175.004 117.33h4.586v26.187H298.11V117.33h-4.586v-12.923h-4.707V78.22h-9.173V65.297h-9.293V52.373h-37.053v12.924h-9.293V78.22h-4.586v13.263h-4.707v12.924h-4.587v26.186h-4.707v39.11h-4.586v117.67h4.586v52.034h4.707v12.923h4.587v26.187h4.707v13.263h9.172v12.923h9.294v12.924h27.759v-12.924h14V391.78h9.173v-13.263h4.707V352.33h4.586v-64.957h-41.639V235h64.812v222.077h-18.466v-39.45h-4.707v13.263h-4.586v12.923h-9.294v13.264h-13.879V470h-37.053v-12.923h-13.879v-13.264h-9.294V430.89h-4.707v-13.263h-4.586v-12.924h-4.586V391.78h-4.707v-13.263h-4.587v-39.11h-4.707v-39.11h-4.586V169.703h4.586V117.33h4.707V91.483h4.587V78.22h4.707V65.297h4.586V52.373h4.586V39.11h4.707V26.187h9.173V12.923h9.293V0h46.346v12.923h13.88v13.264h4.707V39.11h9.293v13.263h4.586v12.924h4.587v26.186h4.707v25.847ZM466.838 0v470h-33.432v-13.603h-4.707V429.87h-4.828v-26.867h-4.707v-13.604h-4.827v-26.866h-4.707v-26.867h-4.828v-26.867h-4.707v-26.867h-4.828v-26.867h-4.707v-26.867h-4.827v-13.263h-4.707v-26.867h-4.828v-26.867h-4.707v-26.867h-4.828v-26.867h-4.707V80.601h-4.827V470h-23.777V0h33.311v13.263h4.828v13.604h4.707v26.867h4.828V80.6h4.707v26.866h4.827v26.867h4.707V161.2h4.828v26.867h4.707v13.263h4.828v26.867h4.707v26.867h4.827v26.867h4.707v26.867h4.828v26.867h4.707v26.867h4.828v13.603h4.707V0h23.897Zm190.09 0v339.407h-4.586v52.373h-4.707v12.923h-4.586v26.187h-9.294v12.923h-4.586v13.264h-14V470h-46.226v-12.923h-14v-13.264h-9.172V430.89h-4.707v-13.263h-4.587V391.78h-4.707v-39.45h-4.586V0h23.173v339.407h4.586v39.11h4.707v13.263h4.587v12.923h13.879v12.924h27.88v-12.924h9.173V391.78h9.293v-26.187h4.707v-26.186h4.586V0h23.173Zm126.365 66.997H788v147.938h-4.707v13.263h-4.828v13.604h-4.707v13.263h-4.827v13.604h-14.242v13.263h-62.036V470h-23.776V0h80.984v13.263h14.363v13.604h9.534V40.13h4.707v13.604h4.828v13.263Zm-38.139 161.201v-13.263h9.535v-13.604h4.707v-13.263h4.828V93.864h-4.828V80.601h-4.707V66.997h-9.535V53.734h-52.501v174.464h52.501Z" />
          </svg>
        </div>

        {/* Right Side: Form (matches image perfectly) */}
        <div className="w-full max-w-sm lg:max-w-md p-6">
          
          {/* Text Description */}
          <div className="text-white mb-6">
            <h2 className="text-xl font-bold mb-2">Stay Telepathic</h2>
            <p className="text-sm text-gray-200">
              Input your electronic mail address here to receive the latest dispatches from our Corporate Headquarters.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Region Radio Buttons */}
            <div className="flex space-x-6 text-sm">
              
              {/* North America */}
              <label className="flex items-center space-x-2 text-gray-300 cursor-pointer">
                <input
                  type="radio"
                  name="region"
                  value="NORTH AMERICA"
                  checked={region === 'NORTH AMERICA'}
                  onChange={() => setRegion('NORTH AMERICA')}
                  className="form-radio h-4 w-4 bg-transparent border-gray-400 text-white checked:bg-white checked:border-white focus:ring-offset-2 focus:ring-1 focus:ring-white"
                  style={{ accentColor: 'white', backgroundColor: darkBackgroundColor, borderColor: 'gray' }}
                />
                <span className="uppercase tracking-wider">North America</span>
              </label>

              {/* International */}
              <label className="flex items-center space-x-2 text-gray-300 cursor-pointer">
                <input
                  type="radio"
                  name="region"
                  value="INTERNATIONAL"
                  checked={region === 'INTERNATIONAL'}
                  onChange={() => setRegion('INTERNATIONAL')}
                  className="form-radio h-4 w-4 bg-transparent border-gray-400 text-white checked:bg-white checked:border-white focus:ring-offset-2 focus:ring-1 focus:ring-white"
                  style={{ accentColor: 'white', backgroundColor: darkBackgroundColor, borderColor: 'gray' }}
                />
                <span className="uppercase tracking-wider">International</span>
              </label>
            </div>

            {/* Email Input and Submit Button Row */}
            <div className="flex w-full">
              {/* Email Input */}
              <input
                type="email"
                placeholder="ENTER EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow h-10 px-3 text-sm tracking-widest text-white border border-gray-400 focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-500 uppercase"
                style={{ backgroundColor: 'transparent' }} // Transparent background
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="h-10 px-5 ml-2 text-sm uppercase tracking-widest text-white border-none hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-150"
                style={{ 
                    // This creates the solid dark submit button
                    backgroundColor: submitButtonColor,
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;