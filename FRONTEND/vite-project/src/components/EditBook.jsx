import React, { useState } from 'react';
import './EditBook.css';

const EditBook = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState(initialData || {
    bookName: '',
    authorName: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.bookName || !formData.authorName || !formData.imageUrl) {
      alert('All fields are required!');
      return;
    }
    onSave(formData);
    alert('Book details updated successfully!');
  };

  return (
    <div className="edit-book-container">
      <h1 className="form-heading">Edit Book</h1>
      <form className="edit-book-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Book Name:
          <input
            type="text"
            name="bookName"
            value={formData.bookName}
            onChange={handleChange}
            placeholder="Enter book name"
            className="form-input"
          />
        </label>
        <label className="form-label">
          Author Name:
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            placeholder="Enter author name"
            className="form-input"
          />
        </label>
        <label className="form-label">
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="form-input"
          />
        </label>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Save Changes
          </button>
          <button type="button" className="cancel-button" onClick={() => window.history.back()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
