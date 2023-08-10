import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openResultModal: false,
    option: 'keo',
    optionRandom: 'keo',
    totalPlay: 0,
    totalWin: 0,
    result: {
        winner: '',
        playerOption: '',
        computerOption: '',
    },
};

const QuangTuTiSlice = createSlice({
    name: 'QuangTuTiSlice',
    initialState,
    reducers: {
        handleModal: (state, { payload }) => {
            state.openResultModal = payload;
        },
        playerOptions: (state, { payload }) => {
            state.option = payload;
        },
        playGameReducer: (state, action) => {
            const options = ['keo', 'bua', 'bao'];
            let index;
            do {
                index = Math.floor(Math.random() * options.length);
            } while (state.optionRandom === options[index]);

            state.optionRandom = options[index];
            state.totalPlay++;
        },
        handleResult: (state, action) => {
            const { option: ironman, optionRandom: thanos } = state;

            if (ironman === thanos) {
                state.result = {
                    ...state.result,
                    winner: 'Hòa',
                    playerOption: ironman,
                    computerOption: thanos,
                };
            } else if (
                (ironman === 'keo' && thanos === 'bua') ||
                (ironman === 'bua' && thanos === 'bao') ||
                (ironman === 'bao' && thanos === 'keo')
            ) {
                state.result = {
                    ...state.result,
                    winner: 'Bạn thua',
                    playerOption: ironman,
                    computerOption: thanos,
                };
            } else {
                state.result = {
                    ...state.result,
                    winner: 'Bạn thắng',
                    playerOption: ironman,
                    computerOption: thanos,
                };
                state.totalWin++;
            }
        },
    },
});

export const { reducer: QuangTuTiReducer, actions: QuangTuTiActions } = QuangTuTiSlice;
