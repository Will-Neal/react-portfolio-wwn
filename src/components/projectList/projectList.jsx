import './projectList.css';
import Project from '../projects/project';
import { projects } from '../../data';

const ProjectList = () => {
    return (
        <div className='pl'>
            <div className="pl-bg"></div>
            <div className="pl-texts">
               <h1 className='pl-title'>Projects</h1>
               <p className='pl-description'>A small collection of previous works. Click on header to see the repo and the image to see the deployment.
               </p> 
            </div>
            <div className="pl-list">
                {projects.map((item)=>(
                    <Project key={item.id}img={item.img} deploy={item.deploy} repo={item.repo} name={item.name}/>
                ))}
                </div>
        </div>
        
    )
}

export default ProjectList