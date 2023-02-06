import ProjectEdit from "./pages/ProjectEdit";
import ProjectList from "./pages/ProjectList";
import ProjectShow from "./pages/ProjectShow";

const { Router, Routes, Route } = require("react-router-dom");

function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ProjectList />} />
                <Route path="/create" element={<ProjectCreate />} />
                <Route path="/edit/:id" element={<ProjectEdit />} />
                <Route path="/show/:id" element={<ProjectShow />} />
            </Routes>
        </Router>
    );
}
export default Main;
 if(document.getElementById('app')){
    ReactDOM.render(<Main />, document.getElementById('app'));
 }
