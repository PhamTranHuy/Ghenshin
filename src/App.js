import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NewsPage from "./components/NewsPage/NewsPage";
import Characters from "./components/Characters/Characters";
import NotFound from "./components/NotFound/NotFound";
import RestoreWindowScroll from "./ShareComponent/RestoreWindowScroll/RestoreWindowScroll";

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
                            index
                            element={<Characters />}
                        />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </RestoreWindowScroll>
        </div>
    );
}

export default App;
