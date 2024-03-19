import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ConfigComponent2(props) {
    const { children } = props;

    const location = useLocation();
    const [paddingTop] = useState(54);

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location]);

    return <div style={{ paddingTop }}>{children}</div>;
}

ConfigComponent2.propTypes = {
    children: PropTypes.node
}

export default ConfigComponent2