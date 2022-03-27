import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import RestoreWindowScroll from "./ShareComponent/RestoreWindowScroll/RestoreWindowScroll";
import Mondstadt from "./components/Characters/Mondstadt/Mondstadt";
import Liyue from "./components/Characters/Liyue/Liyue";
import Inazuma from "./components/Characters/Inazuma/Inazuma";

import { useState, useEffect, lazy, Suspense } from "react";
import { MusicContext } from "./Context";
import useAudio from "./CustomHook/Audio"

const WAVE_SOUND = 'https://genshin.mihoyo.com/_nuxt/medias/video-play.06ec9738.mp3';
const MUSIC = 'https://genshin.mihoyo.com/_nuxt/medias/video-bgm.d8637316.mp3';

const NewsPage = lazy(() => import("./components/NewsPage/NewsPage"));
const Characters = lazy(() => import("./components/Characters/Characters"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
    const setPlayingWaveSound = useAudio(WAVE_SOUND);
    const setPlayingMusic = useAudio(MUSIC);
    const [playMusic, setPlayMusic] = useState(false);

    const toggleMusic = () => {
        setPlayMusic(state => !state);
    }

    useEffect(() => {
        if (playMusic) {
            setPlayingMusic(true);
            setPlayingWaveSound(true);
        } else {
            setPlayingMusic(false);
            setPlayingWaveSound(false);
        }
    }, [playMusic])

    return (
        <MusicContext.Provider value={[playMusic, toggleMusic]}>
            <RestoreWindowScroll>
                <Routes>
                    <Route path="/" element={<Navigate to="home" replace={true} />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="news" 
                        element={
                        <Suspense fallback={<>...</>}>
                            <NewsPage />
                        </Suspense>
                    } />
                    <Route path="characters" 
                        element={
                            <Suspense fallback={<>...</>}>
                                <Characters />
                            </Suspense>
                        }>
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
        </MusicContext.Provider>
    );
}

export default App;
