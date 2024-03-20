import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from 'src/utils';

function ConfigComponent2(props) {
    const { children } = props;

    const location = useLocation();
    const [paddingTop] = useState(54);

    useEffect(() => {
        scrollToTop();
    }, [location]);

    return <div style={{ paddingTop }}>{children}</div>;
}

ConfigComponent2.propTypes = {
    children: PropTypes.node
}

export default ConfigComponent2