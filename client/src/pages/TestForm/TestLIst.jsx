import React, { useEffect, useState } from "react";
import { fetchTests, deleteTest } from "../utils/api";

const TestList = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTests = async () => {
      try {
        const data = await fetchTests();
        setTests(data);
      } catch (error) {
        console.error("Error fetching tests:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTests();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this test?")) {
      try {
        await deleteTest(id);
        setTests(tests.filter((test) => test.id !== id));
      } catch (error) {
        console.error("Error deleting test:", error);
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Test List</h2>
      <ul>
        {tests.map((test) => (
          <li key={test.id}>
            {test.name} <button onClick={() => handleDelete(test.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestList;
