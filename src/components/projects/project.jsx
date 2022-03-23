import './project.css';

const Project = ({ img, deploy, repo, name }) => {
    return (
        <div className='proj'>
            <div className="proj-browser">
                <div className="proj-circle"></div>
                <div className="proj-circle"></div>
                <div className="proj-circle"></div>
                <a href={repo}><h6 className='proj-title'>{name}</h6></a>
            </div>
            <a href={deploy} target="_blank" rel='noreferrer'>
                <img src={img} alt={name} className='proj-image'></img>
            </a>
        </div>
    )
}

export default Project