import React, { useEffect, useState } from 'react';
import FitnessCard from '../components/FitnessCard';

const FitnessPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/details/users");
        const result = await response.json();
        setData(result.data); // Ensure result is an array before mapping
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-6">User Details</h1>
      {Array.isArray(data) ? ( // Ensure data is an array before using map
        data.map((user) => (
          <FitnessCard key={user._id} name={user.name} Gender={user.gender} Height={user.height} Weight={user.weight} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FitnessPage;