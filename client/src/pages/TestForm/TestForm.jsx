import React, { useState } from "react";
import { createTest } from "../utils/api";

const TestForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTest({ name });
      setName("");
    } catch (error) {
      console.error("Error creating test:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Test</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Test Name"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestForm;
