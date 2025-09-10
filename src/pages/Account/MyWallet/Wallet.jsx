import React from 'react';
import DesktopDeposit from './Diposit/DesktopDeposit';
import MobileDeposit from './Diposit/MobileDeposit';

const Wallet = () => {
    return (
        <div>
            <div className='hidden md:block mt-28'>
                <DesktopDeposit></DesktopDeposit>
            </div>
            <div className='md:hidden mt-12'>
                <MobileDeposit></MobileDeposit>
            </div>
        </div>
    );
};

export default Wallet;