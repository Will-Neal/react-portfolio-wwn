import './projectList.css';
import Project from '../projects/project';

const ProjectList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
               <h1 className='pl-title'> Projects and Applications</h1>
               <p className='pl-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, enim accusantium magnam accusamus molestias quo inventore, error aliquam asperiores unde consequuntur, est qui recusandae! Praesentium, delectus amet. Error, odio. Incidunt?
               </p> 
            </div>
            <div className="pl-list">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
        </div>
        
    )
}

export default ProjectList