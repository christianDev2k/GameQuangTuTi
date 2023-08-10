import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuangTuTiActions } from '../store/QuangTuTiReducer/QuangTuTiReducer';

const InforGame = () => {
    const dispatch = useDispatch();
    const { totalPlay, totalWin } = useSelector(state => state.QuangTuTiReducer);

    const handlePlayGame = () => {
        dispatch(QuangTuTiActions.playGameReducer());

        setTimeout(() => {
            dispatch(QuangTuTiActions.handleModal(true));
            dispatch(QuangTuTiActions.handleResult());

        }, 500);
    };

    return (
        <div className='text-center text-white text-4xl pt-5'>
            <p className='text-yellow-500 mb-10'>
                I'm iron man, <br /> I love you 3000!!
            </p>
            <p className='mb-10 text-green-600'>
                Số bàn thắng: <span className='text-yellow-400'>{totalWin}</span>
            </p>
            <p className='text-green-600 mb-8'>
                Số bàn chơi: <span className='text-yellow-400'>{totalPlay}</span>
            </p>
            <div>
                <button
                    onClick={handlePlayGame}
                    className='text-white text-lg py-2 px-5 rounded-lg bg-green-700 border border-transparent hover:bg-green-800 transition'
                >
                    Play game
                </button>
            </div>
        </div>
    );
};

export default InforGame;
