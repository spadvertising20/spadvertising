import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const StoreContext = createContext();

// Create a provider component
export const StoreProvider = ({ children }) => {
  // Retrieve initial state from localStorage, if available
  const storedBlogData = localStorage.getItem('blogData');
  const storedTestData = localStorage.getItem('testData');

  const [blogData, setBlogData] = useState(storedBlogData ? JSON.parse(storedBlogData) : null);
  const [testData, SetTestData] = useState(storedTestData ? JSON.parse(storedTestData) : ['']);

  // Update the state and store it in localStorage
  const updateState = (data) => {
    setBlogData(data);
    localStorage.setItem('blogData', JSON.stringify(data)); // Save to localStorage
  };

  const updateTest = (data) => {
    SetTestData(data);
    localStorage.setItem('testData', JSON.stringify(data)); // Save to localStorage
  };

  // Optionally, useEffect to sync state changes to localStorage
  useEffect(() => {
    if (blogData !== null) {
      localStorage.setItem('blogData', JSON.stringify(blogData));
    }
  }, [blogData]);

  useEffect(() => {
    if (testData !== null) {
      localStorage.setItem('testData', JSON.stringify(testData));
    }
  }, [testData]);

  return (
    <StoreContext.Provider value={{ blogData, updateState, testData, updateTest }}>
      {children}
    </StoreContext.Provider>
  );
};
