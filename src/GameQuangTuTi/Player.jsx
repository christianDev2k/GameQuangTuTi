import React from 'react';
import { Bubble, Options, PlayerStyled } from '../StyledComponent/styledComponent';
import { useDispatch, useSelector } from 'react-redux';
import { QuangTuTiActions } from '../store/QuangTuTiReducer/QuangTuTiReducer';

const options = [
    {
        id: 'keo',
        imgScr: './img/keo.png',
    },
    {
        id: 'bua',
        imgScr: './img/bua.png',
    },
    {
        id: 'bao',
        imgScr: './img/bao.png',
    },
];

const Player = () => {
    const { option } = useSelector(state => state.QuangTuTiReducer);
    const dispatch = useDispatch();

    const handleOption = id => {
        dispatch(QuangTuTiActions.playerOptions(id));
    };

    return (
        <div className='flex flex-col items-center'>
            <Bubble>
                <img src={`./img/${option}.png`} alt='' />
            </Bubble>
            <PlayerStyled>
                <img src='./img/player.png' alt='' />
            </PlayerStyled>

            <div className='flex justify-between'>
                {options.map(op => (
                    <div key={op.id}>
                        <Options $option={option === op.id} onClick={() => handleOption(op.id)}>
                            <img src={op.imgScr} alt='' />
                        </Options>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Player;
