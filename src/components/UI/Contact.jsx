import React from 'react'

function Contact() {
    return (
        <section id="contact" className='pb-16'>
            <div className="container">
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14477.273791494143!2d67.17857026979097!3d24.88711710985443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339e2c516a007%3A0xc41b941a59b9ffaa!2sKala%20Board%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1680720216084!5m2!1sen!2s" className='border-0 w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                        <form className="w-full">
                            <div className="mb-5">
                                <input type="text" placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>

                            <div className="mb-5">
                                <input type="text" placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>

                            <div className="mb-5">
                                <input type="text" placeholder='Subject' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>

                            <div className="mb-5">
                                <textarea type="text" rows={3} placeholder='Write Your Message' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>

                            <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hove:bg-headingColor text-center ease-linear duration-150'>Send Message</button>


                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact