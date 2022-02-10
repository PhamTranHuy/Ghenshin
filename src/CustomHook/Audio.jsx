import { useEffect, useState } from 'react'

const useAudio = url => {
    const [audio, setAudio] = useState('');
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setAudio(new Audio(url));
    }, [url])

    useEffect(() => {
        audio && (playing ? audio.play() : audio.pause());
    }, [playing, audio]);

    useEffect(() => {
        if (audio !== '') {
            const startAudio = () => {
                audio.currentTime = 0;
                audio.play();
            }
            audio.addEventListener('ended', startAudio);
            return () => {
                audio.removeEventListener('ended', startAudio);
            };
        }
    }, [audio]);
    
    return setPlaying;
}

export default useAudio
