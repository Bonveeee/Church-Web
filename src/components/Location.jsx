import NavBar from "./NavBar";

const Location = () => {
  return (
    <>
     
      <div className="flex justify-center items-center h-60 bg-light-purple ">
        
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3063737193023!2d36.7880878!3d-1.3305668999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11c780e87f87%3A0xa7ddad98b3dd657e!2sMQFV%2B6GH%20Langata%20Barracks%2C%20Langata%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1650334272716!5m2!1sen!2ske"
              className="w-full h-full rounded-lg"
              allowFullScreen="20"
              loading="lazy"
            ></iframe>
    
      </div>
    </>
  );
};

export default Location;
