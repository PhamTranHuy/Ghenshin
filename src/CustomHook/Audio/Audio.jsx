import { useEffect, useState } from 'react'

const useAudio = url => {
    const [audio, ] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const startAudio = () => {
        audio.currentTime = 0;
        audio.play();
    }
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
        audio.addEventListener('ended', startAudio);
        return () => {
          audio.removeEventListener('ended', startAudio);
        };
      }, []);
    
      return [setPlaying];
}

export default useAudio
