import { useEffect, useState } from "react"
import { getProjects } from "../services/api"
import AddComponent from "../components/AddComponent"
import { toast, Toaster } from "sonner"
import ProjectCard from "../components/ProjectCard"
import { MessageCircleWarning } from "lucide-react"

const Projects = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    // const {}
    try {
      const { data } = await getProjects()
      console.log(data)
      setProjectdata(data)
    } catch (error) {
      console.warn(error);
      toast('Error', {
        className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
        icon: <MessageCircleWarning />,
      });
    }
  }

  const localdata = localStorage.getItem("userEmail")
  console.log(localdata)

  useEffect(() => {
    fetchprojects()
  }, [])
  if (!projectdata || projectdata.length === 0) {
    return (
      <div className="w-full h-[10%] flex justify-center items-center">
        <AddComponent />
      </div>
    )
  }
  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
        <div className="w-[90%] h-[10%] flex justify-between items-center px-10">
          <h1 className="font-bold text-3xl text-purple-500">Projects</h1>
          <AddComponent fetchprojects={fetchprojects} />
        </div>

        {
          projectdata?.map((data, index) => (
            <ProjectCard title={data.title} desc={data.desc} key={index} pid={index} kid={index + 1} cover={data.coverimg} git={data.git} id={data._id} link={data.link} fetchprojects={fetchprojects} />
          ))
        }
      </div >

      <Toaster richColors />
    </>
  )
}

export default Projects