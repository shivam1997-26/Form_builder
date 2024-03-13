import { Button } from '@mui/material'
import React from 'react'

const FormBuilder = (props) => {
    const formData = props.formData

    return (
        <div>

            {formData.type == 'text' && (<><label>{formData.fieldName}</label><input type='text' className='form-control' placeholder={formData.placeholder} minLength={formData.minlength} maxLength={formData.maxlength} /></>)}
            {formData.type == 'number' && (<><label>{formData.fieldName}</label><input className='form-control' min={formData.min} max={formData.max} type='number' placeholder={formData.placeholder} minLength={formData.minlength} maxLength={formData.maxlength} /></>)}
            {formData.type == 'date' && (<><label>{formData.fieldName}</label><input className='form-control' type='date' placeholder={formData.placeholder} /></>)}
            {formData.type == 'file' && (<><label>{formData.fieldName}</label><input className='form-control' type='file' placeholder={formData.placeholder} /></>)}
            {formData.type == 'radio' &&
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

                </>)}


            {formData.type == 'select' &&
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

                </>)}


            {formData.type == 'checkbox' && (<><label>{formData.fieldName}</label><input className="form-check-input" type='checkbox' placeholder={formData.placeholder} /></>)}
            {formData.type == 'button' && (<><Button variant='contained'>{formData.fieldName}</Button></>)}
            {formData.type == 'textArea' && (<><label>{formData.fieldName}</label><textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></>)}
            {formData.type == 'password' && (<><label>{formData.fieldName}</label><input type='password' className="form-control" placeholder={formData.placeholder} minLength={formData.minlength} maxLength={formData.maxlength} /></>)}

        </div>
    )
}

export default FormBuilder