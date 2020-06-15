import React from 'react';
import { connect } from "react-redux";

function Header(props) {
    const { title } = props;

    return(
        <div>{title}</div>
    )
}

const mapStateToProps = (state) => ({
    title: state.getIn(['header', 'app'])
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
