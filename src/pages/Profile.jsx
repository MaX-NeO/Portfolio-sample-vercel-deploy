
import Profilex from '../assets/img/profile.png'
import Navbar from '../components/Navbar'


import CPPIcon from '../assets/img/langs/cpp.png'
import PostgreIcon from '../assets/img/langs/postgre.png'
import ReactIcon from '../assets/img/langs/react.png'
import NodeIcon from '../assets/img/langs/node.png'
import GithubIcon from '../assets/img/langs/github.png'
import TSIcon from '../assets/img/langs/typescript.png'
import PythonIcon from '../assets/img/langs/python.png'
import SassIcon from '../assets/img/langs/sass.png'
import RubyIcon from '../assets/img/langs/ruby.png'
import JavaIcon from '../assets/img/langs/java.png'


const Profile = () => {
    return (
        <>
            <div className="h-full w-full flex justify-center items-center flex-col">
                <div className="h-[70vh] w-screen flex justify-center items-center">
                    <div className='h-[80%] w-[80%] flex flex-row justify-center items-center'>
                        <div className='h-2/3 w-7/12 flex flex-col justify-center items-center px-4'>
                            <div className="w-full h-1/4 justify-center">
                                <h1 className='text-4xl font-medium'> Hi, I'm <span className='text-purple-500 font-bold'>Mohanraj M</span> ,</h1>
                            </div>
                            <div className="w-full h-3/4 justify-start">
                                <h4>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem earum obcaecati voluptate quo reprehenderit, esse, dolore delectus accusantium enim, tempore dolores maiores aperiam nesciunt odit beatae saepe. Quae eaque ducimus fuga dolores officia at magni consequuntur ut esse, eos odio. Itaque, odit commodi sapiente fuga quia dicta repellat nostrum reprehenderit!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fugit sequi repellendus maiores reiciendis? Repellat ipsa veritatis aliquam facere quasi ipsum minus velit aperiam libero, similique nisi in cupiditate laudantium.
                                </h4>
                            </div>
                        </div>
                        <div className='h-full w-5/12 flex flex-row justify-center items-center '>
                            <img src={Profilex} alt="profile" className="rounded-full h-60 w-60 object-contain" />
                        </div>
                    </div>
                </div>
                <div className="h-[10vh] w-[80%] flex flex-row gap-12 justify-center items-center">
                    <img src={CPPIcon} alt="1" className='h-14 w-14' />
                    <img src={PostgreIcon} alt="2" className='h-14 w-14' />
                    <img src={ReactIcon} alt="3" className='h-14 w-14' />
                    <img src={NodeIcon} alt="4" className='h-14 w-14' />
                    <img src={GithubIcon} alt="5" className='h-14 w-14' />
                    <img src={TSIcon} alt="6" className='h-14 w-14' />
                    <img src={PythonIcon} alt="7" className='h-14 w-14' />
                    <img src={SassIcon} alt="8" className='h-14 w-14' />
                    <img src={RubyIcon} alt="9" className='h-14 w-14' />
                    <img src={JavaIcon} alt="10" className='h-14 w-14' />
                </div>
            </div>
        </>
    )
}

export default Profile