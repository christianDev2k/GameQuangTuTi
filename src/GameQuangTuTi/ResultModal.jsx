import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { QuangTuTiActions } from '../store/QuangTuTiReducer/QuangTuTiReducer';

const ResultModal = () => {
    const { result, openResultModal } = useSelector(state => state.QuangTuTiReducer);
    const dispatch = useDispatch();
    
    const handleCancel = () => {
        dispatch(QuangTuTiActions.handleModal(false));
    };

    return (
        <Modal
            style={{ fontFamily: 'Pony Regular', top: '250px', borderRadius: 10, overflow: 'hidden' }}
            open={openResultModal}
            onCancel={handleCancel}
            footer={null}
            bodyStyle={{ borderRadius: 10, overflow: 'hidden' }}
        >
            <div className='bg-green-200 p-10 text-center text-4xl'>
                <div>
                    <p className='mb-4'>{result.winner}!!</p>
                    <p className='mb-4'>
                        Bạn chọn {result.playerOption === 'keo' ? 'Kéo' : result.playerOption === 'bua' ? 'Búa' : 'Bao'}
                    </p>
                    <p>
                        Thanos chọn{' '}
                        {result.computerOption === 'keo' ? 'Kéo' : result.computerOption === 'bua' ? 'Búa' : 'Bao'}
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default ResultModal;
