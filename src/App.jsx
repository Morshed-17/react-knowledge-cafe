import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks,  setBookMarks] = useState([])

  const handleBookMarks = (blog) => {
    const isExists = bookMarks.find(item => item.id === blog.id)
    if(isExists){
      return alert('Already book marked')
    }else{
      const newBookMarks = [...bookMarks, blog]
      setBookMarks(newBookMarks)
    }
    
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header></Header>
      <div className="md:flex gap-4">
        <Blogs handleBookMarks={handleBookMarks}></Blogs>
        <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
