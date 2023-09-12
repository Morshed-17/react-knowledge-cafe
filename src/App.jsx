import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks,  setBookMarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  const handleMarkAsRead = (id,time) => {
    setReadingTime(readingTime+ time)
    const remainingBooks = bookMarks.filter(bookMark => bookMark.id !== id)
    setBookMarks(remainingBooks)
  }

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
        <Blogs handleBookMarks={handleBookMarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
