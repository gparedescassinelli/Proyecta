

function Projects(pro) {
  return (
    <div className="bg-image-project"
  >
    <img
      src={pro.pro.img}
      className="img-fluid"
      alt="Sample"
      loading="lazy"
      style={{height:'',margin:'0 0px'}}
    />
    <div className="mask" >
      <div className="d-flex justify-content-center align-items-end h-100">
        <p className="text-white mb-4 ">{pro.pro.name}</p>
      </div>
    </div>
  </div>
  )
}

export default Projects