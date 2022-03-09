import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NewsPage from "./components/NewsPage/NewsPage";
import Characters from "./components/Characters/Characters";
import NotFound from "./components/NotFound/NotFound";
import RestoreWindowScroll from "./ShareComponent/RestoreWindowScroll/RestoreWindowScroll";
import Mondstadt from "./components/Characters/Mondstadt/Mondstadt";
import Liyue from "./components/Characters/Liyue/Liyue";
import Inazuma from "./components/Characters/Inazuma/Inazuma";

function App() {
    return (
        <div className="App">
            <RestoreWindowScroll>
                <Routes>
                    <Route path="/" index element={<HomePage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/characters" element={<Characters />}>
                        <Route
                            path="mondstadt"
                            element={<Mondstadt />}
                        />
                        <Route
                            path="liyue"
                            element={<Liyue />}
                        />
                        <Route
                            path="inazuma"
                            element={<Inazuma />}
                        />
                        <Route
                            path=""
                            element={<Navigate to="mondstadt" />}
                        />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </RestoreWindowScroll>
        </div>
    );
}

export default App;
