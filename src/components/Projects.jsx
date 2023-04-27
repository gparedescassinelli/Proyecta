

function Projects(pro) {
   // console.log('ver pro',pro)
  return (
    <div className="bg-image">
    <img
      src={pro.pro.img}
      className="img-fluid"
      alt="Sample"
      loading="lazy"
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