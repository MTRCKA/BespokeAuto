/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { API } from '@aws-amplify/api'
import config from '../aws-exports'
import { getInterested } from '../graphql/queries'
import { createInterested } from '../graphql/mutations'

API.configure(config)

async function get() {
  const response = await API.graphql({
     query: getInterested,
     variables: {
      id:"19a0478b-f81b-4b04-9849-82ab9a2ad05d"
     },
  })
console.log(response)
}


async function intCreate(name,email,country,product,notes) {
  const response = await API.graphql({
  query:createInterested,
  variables: {
    input: {
      name: name,
      email: email,
      product: product,
      country: country,
      notes: notes

    }
  }
})
console.log(response)
}


const product = {
  name: '70-73 RS Camaro Grille',
  price: '$350',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: '/IMG_9309.jpg',
      alt: 'Grilles',
    },
    {
      src: '/IMG_7706.PNG',
      alt: 'Grille',
    },
    {
      src: '/IMG_9500.jpg',
      alt: 'Grille',
    },
    {
      src: '/IMG_9499.jpg',
      alt: 'Grille',
    },
    {
      src: '/IMG_9666 2.GIF',
      alt: 'Grille',
    },
    {
      src: '/IMG_9499.jpg',
      alt: 'Grille',
    },
    {
      src: '/Teeth.jpg',
      alt: 'Grille',
    },
    {
      src: '/IMG_9297.jpg',
      alt: 'Grille',
    },
    {
      src:'/teeth2.jpg',
      alt:'Teeth'
    }
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    { name: 'Red', class: 'bg-red-700', selectedClass: 'ring-gray-900'}
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    "Welcome to Bespoke Auto - Where Your Ride Meets Innovation!",
  highlights: [
    "Transform your car into a unique work of art. Our 3D printed parts allow you to create the custom look you've always dreamed of.",
    'There is a great number of colour possibilities all the way from the classic black to a transparent red',
    "Willing to work with you to get you exactly the part you want"
  ],
  details:
    "At Bespoke Auto, we're passionate about pushing the boundaries of automotive customization. Our mission is to provide car enthusiasts like you with the finest, one-of-a-kind 3D printed car parts to elevate your vehicle's style. If you're Interested in a grille please fill out the form bellow and I will get back to you",
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="bg-white">
      <div className="pt-6">

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[6].src}
              alt={product.images[6].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[7].src}
                alt={product.images[7].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[4].src}
              alt={product.images[4].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            <h3 className="text-gray-500">(70-73 Firebird coming soon)</h3>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2>Pre-Made Designs:</h2>
            <hr></hr>
            <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="p-5"
              />
            <img
                src={product.images[8].src}
                alt={product.images[8].alt}
                className="p-5"
              />
            {/* <p className="text-3xl tracking-tight text-gray-900">{product.price}</p> */}
            <h2 className="pt-5">Custom Grille</h2>
            <hr></hr>
            <p className="mb-2 pt-5 text-3xl tracking-tight text-gray-900">Ask about pricing on complete bespoke options to fit your needs!</p>

            {/* Reviews */}
            {/* <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div> */}

          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Custom order Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <h1 className='mx-auto max-w-2xl mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black'>Interest Form</h1>
        <div className='mx-auto max-w-2xl px-4 pb-16 pt-10'>
          {showForm ?(
            <form onSubmit={async (event) => {
              event.preventDefault(); 
              console.log(event.target[0].value);
              // intCreate(event.target[0].value + ' ' + event.target[1].value,event.target[2].value,event.target[3].value,event.target[4].value,event.target[5].value);
              var templateParams = {
                name: event.target[0].value + ' ' + event.target[1].value,
                email: event.target[2].value,
                country: event.target[3].value,
                note:event.target[4].value
              }
              emailjs.send("service_ejuwjrh", "template_fs004kn", templateParams)
              setShowForm(false);
              }} id='form' className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    First Name
                  </label>
                  <input required={true} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Last Name
                  </label>
                  <input required={true} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input required={true} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Country
                  </label>
                  <input required={true} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="country" type="text" placeholder="USA" />
                </div>
                {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Product
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="product">
                      <option>Camaro RS Grille</option>
                      <option>Firebird Grille</option>
                      <option>Custom</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">  
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Notes
                  </label>
                  <textarea required={true} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="notes" type='text' placeholder="Please tell me what you want"/>
                </div>
              </div>
              <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
            </form>
          ) : (
            <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" id='formAlert' role="alert">
            <p className="font-bold">Thank you</p>
            <p className="text-sm">Your interest has been noted and I will be in touch</p>
          </div>
          )}

        </div>
      </div>
    </div>
  )
}
