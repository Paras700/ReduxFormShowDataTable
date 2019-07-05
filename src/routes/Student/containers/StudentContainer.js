import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../modules/student';
//import { bindActionCreators } from 'redux';
import Student from '../components/Student';



const mapDispatchToProps = (dispatch) => {
  return {
    addItem : (formData)  => dispatch(addItem(formData))
  }
}

const mapStateToProps = (state) => {
  return  {
    items : state.student.items
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Student);
