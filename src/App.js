import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NewsPage from "./components/NewsPage/NewsPage";
import Characters from "./components/Characters/Characters";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <div className="App">
                <Routes>
                    <Route path="/" index element={<HomePage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
        </div>
    );
}

export default App;
