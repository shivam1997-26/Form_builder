import React, { useState } from 'react';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

export default function MaterialDrawer({ openDrawer, toggleDrawer, dataArray }) {

    return (
        <div>
            <>
                <SwipeableDrawer
                    anchor='bottom'
                    open={openDrawer}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}

                >
                    <div className='row'>
                        <div className='mb-4 mt-4 d-flex justify-content-around'>
                            <span></span>
                            <span className='fw-bold'>Form Preview</span>
                            <button className='btn btn-danger' onClick={toggleDrawer(false)}>Close</button>
                        </div>

                        {
                            dataArray.map((formData) => {
                                return (<>

                                    <div className='col-3'></div>
                                    <div className='col-6 mb-3'>
                                        {formData.type == 'text' && (<><label className='fs-6 mb-2'>{formData.fieldName}</label><input type='text' className='form-control' placeholder={formData.placeholder} minLength={formData.minlength} maxLength={formData.maxlength} /></>)}
                                        {formData.type == 'number' && (<><label>{formData.fieldName}</label><input className='form-control' min={formData.min} max={formData.max} type='number' placeholder={formData.placeholder} minLength={formData.minlength} maxLength={formData.maxlength} /></>)}
                                        {formData.type == 'date' && (<><label>{formData.fieldName}</label><input className='form-control' type='date' placeholder={formData.placeholder} /></>)}
                                        {formData.type == 'file' && (<><label>{formData.fieldName}</label><input className='form-control' type='file' placeholder={formData.placeholder} /></>)}
                                        {
                                            formData.type == 'radio' &&
                                            (<>

                                                <div>{formData.fieldName}</div>
                                                {
                                                    formData.option.map((item) => (
                                                        <>
                                                            <label for={formData.id} className='me-2'>{item.label}</label>
                                                            <input className="form-check-input me-2" id={formData.id} name={formData.name} type='radio' value={item.value} />
                                                        </>
                                                    ))
                                                }

                                            </>)
                                        }


                                        {
                                            formData.type == 'select' &&
                                            (<>
                                                <label>{formData.fieldName}</label>
                                                <select className="form-select" id={formData.id} name={formData.name} type='select'>

                                                    {
                                                        formData.option.map((item) => (
                                                            <>
                                                                <option value={item.value}>{item.label}</option>

                                                            </>
                                                        ))
                                                    }
                                                </select>

                                            </>)
                                        }


                                        {formData.type == 'checkbox' && (<><label>{formData.fieldName}</label><input className="form-check-input" type='checkbox' placeholder={formData.placeholder} /></>)}
                                        {formData.type == 'button' && (<><Button variant='contained'>{formData.fieldName}</Button></>)}
                                        {formData.type == 'textArea' && (<><label>{formData.fieldName}</label><textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></>)}
                                        {formData.type == 'password' && (<><label>{formData.fieldName}</label><input type='password' className="form-control" placeholder={formData.placeholder} minLength={formData.minlength} maxLength={formData.maxlength} /></>)}
                                    </div>
                                    <div className='col-3'></div>
                                </>)

                            })
                        }
                    </div>
                </SwipeableDrawer>
            </>

        </div>
    );
}