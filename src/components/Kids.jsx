
const Kids = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold mb-5">Welcome to the Children's Ministry Page!</h1>
      <img
        src="https://via.placeholder.com/300x300"
        alt="Fun illustration for kids"
        className="w-64 mb-5"
      />
      <p className="text-lg font-medium">
        Join us as we learn about God's love and have fun together!
      </p>
      <button className="bg-indigo-500 text-white py-2 px-4 rounded mt-5">
        Learn More
      </button>
    </div>
  )
}

export default Kids