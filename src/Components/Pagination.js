import React, {useEffect} from "react";
import {connect} from "react-redux";
import {pagination} from "../store/actions/actions";

const Pagination = function(props) {
    useEffect(() => {
        const clickHandler = function(e) {
            switch (e.target.name) {
                case "next" :
                    props.pagination(1)
                    break
                case "prev" :
                    props.pagination(-1)
                    break
                default: return
            }
        }
        const btns = document.getElementsByClassName("page-link");

        function propaginations() {
            Array.from(btns).forEach(btn => btn.addEventListener('click', clickHandler))
        }

        propaginations()

        return function() {
            Array.from(btns).forEach(btn => btn.removeEventListener('click', clickHandler))
        }

    })

    return (
        <ul className="pagination pagination-lg justify-content-center">
            <li className="page-item">
                <a className="page-link m-3" name="prev">
                    &laquo;
                </a>
            </li>
            <li className="page-item">
                <a className="page-link m-3" name="next">
                    &raquo;
                </a>
            </li>
        </ul>
    );
};

  
const mapDispatchToProps = (dispatch) => {
    return{
        pagination: (dirrection) => dispatch(pagination(dirrection)),
    };
};
  
export default connect(null, mapDispatchToProps)(Pagination)