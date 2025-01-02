// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


export default function App() {
  return (
    <>
      <nav class="flex justify-between text-black w-screen">
      <div>
      {/* Refio-logo */}
        <span class="pl-9 inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="150" zoomAndPan="magnify" viewBox="0 0 522.75 276.749989" height="80" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="6e30ffe6ef"><path d="M 0.109375 0 L 522.390625 0 L 522.390625 276.5 L 0.109375 276.5 Z M 0.109375 0 " clip-rule="nonzero"/></clipPath><clipPath id="a8e16f903a"><path d="M 404.082031 74 L 516 74 L 516 186 L 404.082031 186 Z M 404.082031 74 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#6e30ffe6ef)"><path fill="#ffffff" d="M 0.109375 0 L 522.390625 0 L 522.390625 276.5 L 0.109375 276.5 Z M 0.109375 0 " fill-opacity="1" fill-rule="nonzero"/></g><path stroke-linecap="butt" transform="matrix(0.919833, 0, 0, 0.919833, 58.152721, 38.360485)" fill="none" stroke-linejoin="miter" d="M 38.444917 79.794186 L 51.970639 79.794186 C 53.945352 79.794186 55.971026 79.428971 58.051906 78.694292 C 60.12854 77.959614 61.963112 76.643139 63.559869 74.74062 C 65.17786 72.816867 66.141859 69.980075 66.447621 66.230244 L 66.596256 64.523072 C 67.003938 60.6968 66.685436 57.821788 65.649243 55.898035 C 64.634283 53.974283 63.241367 52.708768 61.470495 52.097244 C 59.695377 51.464486 57.822584 51.150231 55.847871 51.150231 L 42.322149 51.150231 Z M 35.179209 105.287094 L 29.709466 146.998129 L 0.152471 146.998129 L 16.030862 25.619102 L 57.899025 25.619102 C 63.088486 25.619102 68.193013 26.039525 73.208359 26.871877 C 78.249186 27.708476 82.729449 29.419894 86.657641 32.001885 C 90.607067 34.583875 93.54578 38.397407 95.469533 43.438233 C 97.397532 48.47906 97.788228 55.201578 96.650114 63.610033 L 96.153251 67.028622 C 94.811295 76.880954 92.012723 84.45281 87.757535 89.748439 C 83.502347 95.03982 78.525221 98.878832 72.826157 101.261228 L 85.744602 146.998129 L 53.834938 146.998129 L 43.422043 105.287094 Z M 126.512871 25.619102 L 202.762273 25.619102 L 199.496565 51.150231 L 152.804157 51.150231 L 149.992846 72.31151 L 188.896815 72.31151 L 185.478226 97.838392 L 146.574256 97.838392 L 143.457182 121.471248 L 190.14959 121.471248 L 186.883882 146.998129 L 110.634479 146.998129 Z M 228.437789 25.619102 L 304.687192 25.619102 L 301.417237 51.150231 L 254.729076 51.150231 L 251.917764 72.31151 L 290.821734 72.31151 L 287.398898 97.838392 L 248.499175 97.838392 L 242.116393 146.998129 L 212.559398 146.998129 Z M 357.605254 25.619102 L 341.726863 146.998129 L 312.169868 146.998129 L 328.010039 25.619102 Z M 357.605254 25.619102 " stroke="#5197f5" stroke-width="5.835412" stroke-opacity="1" stroke-miterlimit="4"/><path fill="#bdffc0" d="M 505.601562 63.765625 C 507.390625 63.984375 508.398438 61.761719 507.011719 60.613281 C 480.578125 38.695312 441.257812 40.117188 416.496094 64.878906 C 391.730469 89.640625 390.308594 128.964844 412.230469 155.398438 C 413.378906 156.785156 415.601562 155.773438 415.382812 153.988281 C 412.886719 133.625 421.191406 107.785156 440.296875 88.679688 C 459.398438 69.574219 485.242188 61.269531 505.601562 63.765625 Z M 505.601562 63.765625 " fill-opacity="1" fill-rule="evenodd"/><g clip-path="url(#a8e16f903a)"><path fill="#5271ff" d="M 406.882812 166.773438 C 405.09375 166.554688 404.085938 168.777344 405.472656 169.929688 C 431.90625 191.847656 471.226562 190.425781 495.988281 165.664062 C 520.753906 140.898438 522.175781 101.578125 500.253906 75.144531 C 499.105469 73.757812 496.882812 74.769531 497.101562 76.554688 C 499.597656 96.917969 491.292969 122.757812 472.1875 141.863281 C 453.085938 160.96875 427.242188 169.269531 406.882812 166.773438 Z M 406.882812 166.773438 " fill-opacity="1" fill-rule="evenodd"/></g></svg>
          {/* <svg class="w-10 h-auto" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="10" fill="black"/>
            <path d="M37.656 68V31.6364H51.5764C54.2043 31.6364 56.3882 32.0507 58.1283 32.8793C59.8802 33.696 61.1882 34.8146 62.0523 36.2351C62.9282 37.6555 63.3662 39.2654 63.3662 41.0646C63.3662 42.5443 63.0821 43.8108 62.5139 44.8643C61.9458 45.906 61.1823 46.7524 60.2235 47.4034C59.2646 48.0544 58.1934 48.522 57.0097 48.8061V49.1612C58.2999 49.2322 59.5369 49.6288 60.7206 50.3509C61.9162 51.0611 62.8927 52.0672 63.6503 53.3693C64.4079 54.6714 64.7867 56.2457 64.7867 58.0923C64.7867 59.9744 64.3309 61.6671 63.4195 63.1705C62.508 64.6619 61.1349 65.8397 59.3002 66.7038C57.4654 67.5679 55.1572 68 52.3754 68H37.656ZM44.2433 62.4957H51.3279C53.719 62.4957 55.4413 62.04 56.4948 61.1286C57.5601 60.2053 58.0928 59.0215 58.0928 57.5774C58.0928 56.5002 57.8264 55.5296 57.2938 54.6655C56.7611 53.7895 56.0035 53.103 55.021 52.6058C54.0386 52.0968 52.8667 51.8423 51.5054 51.8423H44.2433V62.4957ZM44.2433 47.1016H50.7597C51.896 47.1016 52.92 46.8944 53.8314 46.4801C54.7429 46.054 55.459 45.4562 55.9798 44.6868C56.5125 43.9055 56.7789 42.9822 56.7789 41.9169C56.7789 40.5083 56.2817 39.3482 55.2874 38.4368C54.3049 37.5253 52.843 37.0696 50.9017 37.0696H44.2433V47.1016Z" fill="white"/>
          </svg>
         */}
        </span>
        {/* <p className="text-white text-xl font-bold font-heading">Your guide for sustainable living.</p> */}
      </div>
        <nav class="py-3">
          < ul class="pl-20 hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a class="hover:text-DodgerBlue" href="#">Local map</a></li>
            <li><a class="hover:text-DodgerBlue" href="#">Market place</a></li>
            <li><a class="hover:text-DodgerBlue" href="#">Blogs</a></li>
          </ul>
        </nav>
        <div className="py-2">
          <button type="button" class="py-2 px-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">List the business</button>
          <button type="button" class="py-2 px-4 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-DodgerBlue rounded-lg  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Log in / sign up</button>
        </div>


        {/* <Image src='/Refill.svg' alt='logo' width='{74}' height='{74}'></Image>  */}
      </nav>
      {/* Header Discover */}
      <div class="flex justify-center items-center py-3 text-9xl font-helvatica">
        <span class="bg-clip-text text-transparent bg-gray-900">
          DISCOVER
        </span>
      </div>
      {/* img bg rows*/}
      <div class="flex justify-center pt-3 space-x-4">
        <img class="h-auto max-w-xs" src="/src/assets/reuse_bag.jpg" ></img>
        <img class="h-auto max-w-xs" src="/src/assets/leaves_photo.jpg" ></img>
        <img class="h-auto max-w-xs" src="/src/assets/refill_signs.jpg" ></img>
      </div>
      {/* bullet points */}
      <div id="highlights">
        <section class="py-28 flex justify-evenly">
          <ul>
            <li class="flex justify-center text-3xl font-bold">"Empowering Communities, saving the planet."</li>
            <ul class="py-2">
              <li class="text-2xl font-bold">✨ Discover Local Eco-Gems</li>
              <li class="text-lg">Explore hidden sustainability-focused businesses and shop local to support your community.</li>
            </ul>
            <ul class="py-2">
              <li class="text-2xl font-bold">🌱 Growing Small Businesses</li>
              <li class="text-lg">A platform dedicated to helping SMEs promote their eco-conscious products and services.</li>
            </ul>
            <ul class="py-2">
              <li class="text-2xl font-bold">♻️ Learn Sustainable Living</li>
              <li class="text-lg">Gain insights and tips for embracing a more sustainable lifestyle through our resources and guides.</li>
            </ul>
              <ul class="py-2">
              <li class="text-2xl font-bold">💖 Marketplace for Sharing Economy</li>
              <li class="text-lg">Engage in a thriving online shop and marketplace that fosters sharing and eco-friendly commerce.</li>
            </ul>
          </ul>
          <div class="flex items-center">
            <img src="/src/assets/tomatoes.jpg" class="h-min max-w-md"></img>
          </div>
        </section>
      </div>
      {/* search-box */}
      <div class="min-h-min flex justify-center items-center">
        <div class="container mx-auto bg-blue-300 rounded-lg p-14">
          <form>
            <h1 class="text-center font-bold text-white text-4xl font-helvatica">Your Local Guide to Sustainability</h1>
            <p class="mx-auto font-normal text-sm my-6 max-w-lg text-white">Search Your local gems by select business options and enter city, postcode, or address</p>
            <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
              <div class="ms:flex justify-start px-2 rounded-lg space-x-4 mx-auto ">
              <select id="All" class="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
                <option value="all" selected>All catgories</option>
                <option value="zerot">Zero-Waste Shop</option>
                <option value="refill">Refill Station</option>
                <option value="recycle">Recycle spot</option>
                <option value="fashion">Fashion</option>
                </select>
            </div>
            <input class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Enter postcode, city, or address" />
              <button class="bg-blue-400 hover:bg-blue-600 .. text-white text-base rounded-lg px-4 py-2">Search</button>         
            </div>
          </form>
        </div>
      </div>
      <div class="pt-10 flex justify-center">
        <button type="button" class="py-2 px-4 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-rose-500 rounded-lg  hover:bg-gray-100 hover:text-rose-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          View on map</button>
      </div>
      {/* shops components */}
      <div class="flex justify-center items-center py-24">
          <div class="max-w-[720px] mx-auto">
              {/*  Centering wrapper */}
              <div class="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                      <img class="object-cover h-64 w-96 ..."
                          src="/src/assets/grocery.jpg"
                          alt="ui/ux review check" />
                  </div>
                  <div class="p-6">
                      <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          UnPacked shop
                      </h4>
                      <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                        Grocery, Zero-waste shop
                      </p>
                  </div>
                  <div class="flex items-center justify-between p-6">
                      <div class="flex items-center -space-x-3">
                          
                      </div>
                      <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit text-green-600">
                        📍 Ealing, London
                      </p>
                  </div>
              </div>
          </div>
          <div class="max-w-[720px] mx-min">
              {/*  Centering wrapper */}
              <div class="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                      <img class="object-cover h-64 w-96 ..."
                          src="/src/assets/kinn-living.jpg"
                          alt="store_photo" />
                  </div>
                  <div class="p-6">
                      <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          Kinn Living
                      </h4>
                      <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                        Organic, Refill, Homecare
                      </p>
                  </div>
                  <div class="flex items-center justify-between p-6">
                      <div class="flex items-center -space-x-3">
                          
                      </div>
                      <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit text-green-600">
                        📍 Earl&apos; Court, London
                      </p>
                  </div>
              </div>
          </div>
          <div class="max-w-[720px] mx-auto">
              {/*  Centering wrapper */}
              <div class="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                      <img class="object-cover h-64 w-96 ..."
                          src="/src/assets/refill_blue_water.jpg"
                          alt="photo_refill" />
                  </div>
                  <div class="p-6">
                      <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          Blue Water
                      </h4>
                      <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                        Refill station
                      </p>
                  </div>
                  <div class="flex items-center justify-between p-6">
                      <div class="flex items-center -space-x-3">
                          
                      </div>
                      <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit text-green-600">
                        📍 Acton, London
                      </p>
                  </div>
              </div>
          </div>
      </div>

  
  
    
    </>

    
  )
}
