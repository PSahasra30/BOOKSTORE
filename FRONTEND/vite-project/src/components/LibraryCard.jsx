import React, { useState } from "react";
import "./LibraryCard.css";

const LibraryCard = ({ user }) => {
  const [libraryId, setLibraryId] = useState(null);

  // Function to generate a unique library ID
  const generateLibraryId = () => {
    if (!user || !user.email) return;

    const uniqueId = `LIB-${user.email.split("@")[0]}-${Math.floor(
      Math.random() * 10000
    )}`;
    setLibraryId(uniqueId);
    alert(`Your Library ID has been generated: ${uniqueId}`);
  };

  if (!user) {
    return <p>Please log in to generate your library card.</p>;
  }

  return (
    <div className="library-card-container">
      <div className="library-card">
        <h2>Library Card</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p>
          <strong>Library ID:</strong> {libraryId || "Not generated yet"}
        </p>
        <button
          onClick={generateLibraryId}
          className="generate-button"
          disabled={!!libraryId}
        >
          {libraryId ? "Library ID Generated" : "Generate Library ID"}
        </button>
      </div>
    </div>
  );
};

export default LibraryCard;
