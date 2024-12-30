const ProjectLinks = (props) => {
    const styles = {
      backgroundImage: `url(${props.bgImg})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="card-title" style={styles}>
            <span>{props.title}</span>
        </div>
    )
}

export default ProjectLinks;