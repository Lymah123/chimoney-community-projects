import { InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react"

const Footer = () => {
    return (
        <div className='bg-veryDarkBlue'>
            {/* <!-- Flex Container --> */}
            <div className='container flex flex-col-reverse font-epilogue justify-between px-20 py-14 mx-auto space-y-8 
                md:flex-row md:space-y-0'>
                {/* <!-- Logo and social links container --> */}
                <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col 
                md:space-y-0 md:items-start'>

                    <div className='mx-auto my-6 text-center text-white md:hidden'>
                        Copyright &copy; 2022, All Rights Reserved
                    </div>

                    <p className='text-md text-white font-medium tracking-widest'>
                        PAYPADDY
                    </p>
                    {/* <!-- Social Links Container --> */}
                    <div className='flex justify-center space-x-4'>
                        {/* <!-- Link 1 --> */}
                        <a href='#'>
                            <TwitterLogo color="#fff" weight="fill" size={24} />
                        </a>
                        <a href='#'>
                            <LinkedinLogo color="#fff" weight="fill" size={24} />
                        </a>
                        <a href='#'>
                            <InstagramLogo color="#fff" weight="fill" size={24} />
                        </a>

                    </div>
                </div>
                {/* <!-- List Container --> */}
                <div className='flex justify-around space-x-32'>
                    <div className='flex flex-col space-y-3 text-white'>
                        {/* <Link to={'/'} className='hover:text-brightRed'>Home</Link> */}
                        <a href='#' className='hover:text-transparent bg-clip-text bg-gradient-to-r
                         from-purple-600 to-blue-500'>
                            Home
                        </a>
                        <a href='#' className='hover:text-transparent bg-clip-text bg-gradient-to-r
                         from-purple-600 to-blue-500'>
                            Products
                        </a>
                        <a href='#' className='hover:text-transparent bg-clip-text bg-gradient-to-r
                         from-purple-600 to-blue-500'>
                            About
                        </a>
                    </div>

                    <div className='flex flex-col space-y-3 text-white'>
                        <a href='#' className='hover:text-transparent bg-clip-text bg-gradient-to-r 
                        from-purple-600 to-blue-500'>
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className='hidden text-white md:block'>
                    Copyright &copy; 2022, All Rights Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer