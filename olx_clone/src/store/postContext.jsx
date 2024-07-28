import { createContext, useState } from "react";

export const PostContext = createContext();

function PostView({ children }) {
  const [postDetails, setPostDetails] = useState({
    // Initialize with the necessary properties
    id: '',
    url: '',
    brand:'',
    title:'',
    location:'',
    price:'',
    description:''
    // Add other properties as needed
  });

  return (
    <PostContext.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostView;
