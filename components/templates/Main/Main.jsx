import Content from '@/components/organizms/Content/Content';
import SideBare from '@/components/organizms/SideBare/SideBare';
import React from 'react';
import s from './Main.module.scss'

const Main = () => {
    return (
        <div>
            <SideBare/>
            <Content/>
        </div>
    );
};

export default Main;