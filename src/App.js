import LayoutAbout from "components/layout/LayoutAbout";
import LayoutFeatures from "components/layout/LayoutFeatures";
import LayoutHeader from "components/layout/LayoutHeader";
import LayoutSearchBar from "components/layout/LayoutSearchBar";
import CourseList from "components/course/CourseList";
import BlogList from "components/blog/BlogList";
import LayoutNote from "components/layout/LayoutNote";
import LayoutDeal from "components/layout/LayoutDeal";
import LayoutFooter from "components/layout/LayoutFooter";

function App() {
  return (
    <div className="app">
        <LayoutHeader/>
        <main>
            <LayoutSearchBar/>
            <CourseList/>
            <LayoutAbout/>
            <LayoutFeatures/>
            <BlogList/>
            <LayoutNote/>
            <LayoutDeal/>
        </main>
        <LayoutFooter/>
        
    </div>
  );
}

export default App;
