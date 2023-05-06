import React from "react";
// import Image from "next/image";

const Staff = () => {
  const staffMembers = [
    {
      name: "John Doe",
      title: "Senior Pastor",
      image: "https://images.unsplash.com/photo-1556302132-40bb13638500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJvYXJkJTIwbWVtYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id justo et urna accumsan efficitur. Sed nec sollicitudin tellus, ac suscipit lectus. Sed dictum maximus elit, vel suscipit risus efficitur eu. Fusce eleifend tincidunt leo vitae sagittis. Sed dictum id odio in consequat. Nunc fermentum dolor sit amet felis tincidunt ullamcorper. Ut et dui risus. Ut at enim est.",
    },
    {
      name: "Jane Smith",
      title: "Youth Pastor",
      image: "https://images.unsplash.com/photo-1556302132-40bb13638500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJvYXJkJTIwbWVtYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60g",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id justo et urna accumsan efficitur. Sed nec sollicitudin tellus, ac suscipit lectus. Sed dictum maximus elit, vel suscipit risus efficitur eu. Fusce eleifend tincidunt leo vitae sagittis. Sed dictum id odio in consequat. Nunc fermentum dolor sit amet felis tincidunt ullamcorper. Ut et dui risus. Ut at enim est.",
    },
    {
      name: "Robert Johnson",
      title: "Music Director",
      image: "https://images.unsplash.com/photo-1556302132-40bb13638500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJvYXJkJTIwbWVtYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id justo et urna accumsan efficitur. Sed nec sollicitudin tellus, ac suscipit lectus. Sed dictum maximus elit, vel suscipit risus efficitur eu. Fusce eleifend tincidunt leo vitae sagittis. Sed dictum id odio in consequat. Nunc fermentum dolor sit amet felis tincidunt ullamcorper. Ut et dui risus. Ut at enim est.",
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-8">Meet Our Staff</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staffMembers.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-md p-8">
            <img className="w-full mb-4" src={member.image} alt={member.name} />
            <h2 className="text-lg font-bold mb-2">{member.name}</h2>
            <p className="text-gray-600">{member.title}</p>
            <p className="mt-4">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
