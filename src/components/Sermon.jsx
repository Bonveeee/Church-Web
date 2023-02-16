
const Sermon = () => {
  return (
    <div className="container mx-auto my-8">
    <h2 className="text-2xl font-bold mb-4">Latest Sermon</h2>
    <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          
        title="Latest Sermon"
        allowFullScreen
      />
       <button className="bg-indigo-500 text-white py-2 px-4 rounded mt-5">
        More
      </button>
    </div>
  </div>
  )
}

export default Sermon