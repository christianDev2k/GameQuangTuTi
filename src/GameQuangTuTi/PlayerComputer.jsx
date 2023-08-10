import React from 'react';
import { useSelector } from 'react-redux';
import { Bubble, PlayerStyled } from '../StyledComponent/styledComponent';

const PlayerComputer = () => {
    const { optionRandom } = useSelector(state => state.QuangTuTiReducer);
    return (
        <div className='flex flex-col items-center'>
            <Bubble>
                <img src={`./img/${optionRandom}.png`} alt='' />
            </Bubble>
            <PlayerStyled>
                <img src='./img/playerComputer.png' alt='' />
            </PlayerStyled>
        </div>
    );
};

export default PlayerComputer;
