import React from 'react';
import Player from './Player';
import InforGame from './InforGame';
import PlayerComputer from './PlayerComputer';
import { BackgroundApp } from '../StyledComponent/styledComponent';
import '../Font/font.css';
import ResultModal from './ResultModal';

const GameQuangTuTi = () => {
    return (
        <BackgroundApp>
            <div className='container-md mx-auto px-2'>
                <div className='grid grid-cols-3 max-w-screen-lg mx-auto'>
                    <Player />
                    <InforGame />
                    <PlayerComputer />
                </div>
            </div>
            <ResultModal />
        </BackgroundApp>
    );
};

export default GameQuangTuTi;
