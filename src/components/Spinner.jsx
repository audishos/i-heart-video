import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './_components.spinner.scss';

const Spinner = () => (
    <div className="spinner">
        <CircularProgress className="spinner__circular-progress" />
    </div>
);

export default Spinner;
