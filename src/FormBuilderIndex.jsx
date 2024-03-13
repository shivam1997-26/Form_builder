import React from 'react'
import { forwardRef, useState } from 'react'
import './App.css'
import FormBuilder from './FormBuilder'
import { Box, Button } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { IoTrash } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { BsFillSaveFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { textField } from './data/FormField';
import { Link, useNavigate } from 'react-router-dom'
import MaterialDrawer from './MaterialDrawer'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const FormBuilderIndex = () => {

    const [formData, setFormData] = useState([])
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState()
    const [editData, setEditData] = useState()
    const [openDrawer, setOpenDrawer] = useState(false);

    // const navigate = useNavigate()

    const toggleDrawer = (open) => (event) => {
        setOpenDrawer(open);
    };

    const addField = (item) => {
        delete item.icon
        setFormData([...formData, item])
    }


    const deleteClick = (id) => {
        formData.splice(id, 1)
        setFormData([...formData])
    }

    const editClick = (item, index) => {
        setOpen(true)
        setIndex(index)
        setEditData(item)

    }

    const handleClose = () => {
        setOpen(false);
    };

    const handelEditChange = () => {
        const updatedFormData = [...formData];
        updatedFormData[index] = editData;
        setFormData(updatedFormData);
        setOpen(false);
    }


    const nameChange = (e) => {
        setEditData({ ...editData, name: e.target.value })
    }

    const placeholderChange = (e) => {
        setEditData({ ...editData, placeholder: e.target.value })
    }

    const fieldNameChange = (e) => {
        setEditData({ ...editData, fieldName: e.target.value })
    }

    const idChange = (e) => {
        setEditData({ ...editData, id: e.target.value })
    }

    const classTypeChange = (e) => {
        setEditData({ ...editData, class: e.target.value })
    }

    const maxChange = (e) => {
        setEditData({ ...editData, max: e.target.value })
    }

    const minChange = (e) => {
        setEditData({ ...editData, min: e.target.value })
    }

    const maxlengthChange = (e) => {
        setEditData({ ...editData, maxlength: e.target.value })
    }

    const minlengthChange = (e) => {
        setEditData({ ...editData, minlength: e.target.value })
    }

    const clearClick = () => {
        setFormData([])
    }

    const deleteSelectOption = (idx) => {
        editData.option.splice(idx, 1)
        setEditData({ ...editData })

    }

    const updateSelectOption = (newValue, index) => {

        const updatedOptions = [...editData.option];
        updatedOptions[index] = newValue;
        setEditData({ ...editData, option: updatedOptions });
    }

    const addOption = () => {
        const newOption = { label: '', value: '' };
        setEditData(prevData => ({
            ...prevData,
            option: [...prevData.option, newOption],
        }));
    }

    // const previewClick = () => {

    //     const dataArray = formData

    //     console.log(dataArray)


    //     if (formData.length > 0) {
    //         navigate('/formPreview', { state: { dataArray } })
    //     }
    // }

    return (
        <>
            <div className='row'>
                <div className='col-2 menuDiv'>

                    {
                        textField.map((item) => {
                            return (
                                <div className='field-item' onClick={() => addField(item)}><span className='me-4'>{item.icon}</span>{item.fieldName}</div>
                            )
                        })
                    }
                </div>
                <div className='col-8'>
                    <Box component="section" sx={{ p: 2, border: '2px dashed grey', mt: 3, minHeight: '100vh', backgroundColor: '#f5f1f1', borderRadius: '15px' }} >

                        {formData.length <= 0 && <span>Register Form</span>}
                        {
                            formData.length > 0 && formData.map((item, index) => {
                                return (
                                    <>
                                        <div className='p-2 mb-4  inputField_container'>
                                            <div className='d-flex justify-content-end'>
                                                <MdEdit onClick={() => editClick(item, index)} size={20} color='gray' className='react_icon' />
                                                <IoTrash onClick={() => deleteClick(index)} size={20} color='red' className='react_icon' />
                                            </div>
                                            <FormBuilder formData={item} />
                                        </div>
                                    </>
                                )
                            }
                            )
                        }
                    </Box>
                </div>

                <div className='col-1'>

                    <Button variant='contained' sx={{ marginLeft: '10px', marginTop: '20px' }} onClick={clearClick}>Clear</Button>
                    <Button variant='contained' sx={{ marginLeft: '10px', marginTop: '10px' }} onClick={toggleDrawer(true)}><BiShow size={20} /> Preview</Button>
                    <Button variant='contained' sx={{ marginLeft: '10px', marginTop: '10px' }}> <BsFillSaveFill />Save</Button>

                    {/* <Button variant='contained' onClick={toggleDrawer(true)}>Bottom</Button> */}
                </div>

            </div>

            <Dialog
                open={open}
                fullWidth='true'
                maxWidth='lg'
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Edit Form Feild Details"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">

                        <div className='row'>

                            {
                                (editData?.fieldName || editData?.fieldName == '') && (<div className='col-12'><span>Label:</span> <input className='form-control' type='text' value={editData.fieldName} onChange={fieldNameChange} /></div>)
                            }

                            {
                                (editData?.name || editData?.name == '') && (<div className='col-12'><span>Name:</span> <input className='form-control' type='text' value={editData.name} onChange={nameChange} /></div>)
                            }

                            {
                                (editData?.placeholder || editData?.placeholder == '') && (<div className='col-12'><span>Placeholder:</span> <input className='form-control' type='text' value={editData.placeholder} onChange={placeholderChange} /></div>)
                            }

                            {
                                (editData?.id || editData?.id == '') && (<div className='col-12'><span>Id:</span> <input className='form-control' type='text' value={editData.id} onChange={idChange} /></div>)
                            }

                            {
                                (editData?.class || editData?.class == '') && (<div className='col-12'><span>Class:</span> <input className='form-control' type='text' value={editData.class} onChange={classTypeChange} /></div>)
                            }

                            {
                                (editData?.min || editData?.min == '') && (<div className='col-12'><span>Min:</span> <input className='form-control' type='text' value={editData.min} onChange={minChange} /></div>)
                            }

                            {
                                (editData?.max || editData?.max == '') && (<div className='col-12'><span>Max:</span> <input className='form-control' type='text' value={editData.max} onChange={maxChange} /></div>)
                            }

                            {
                                (editData?.maxlength || editData?.maxlength == '') && (<div className='col-12'><span>Max Length:</span> <input className='form-control' type='text' value={editData.maxlength} onChange={maxlengthChange} /></div>)
                            }

                            {
                                (editData?.minlength || editData?.minlength == '') && (<div className='col-12'><span>Min Length:</span> <input className='form-control' type='text' value={editData.minlength} onChange={minlengthChange} /></div>)
                            }


                            {
                                (editData?.option) && (<>
                                    <div><h6>Option</h6></div>
                                    {
                                        editData.option.map((item, index) => {
                                            return (
                                                <>
                                                    <div className='row mt-3'>
                                                        <div className='col-4'>
                                                            <input type='text' onChange={(e) => updateSelectOption({ ...item, label: e.target.value }, index)} className='form-control' />
                                                        </div>
                                                        <div className='col-4'>
                                                            <input type='text' onChange={(e) => updateSelectOption({ ...item, value: e.target.value }, index)} className='form-control' />
                                                        </div>

                                                        <div className='col-2'><MdDelete size={25} color='red' onClick={() => deleteSelectOption(index)} /></div>
                                                    </div>


                                                </>
                                            )
                                        })
                                    }
                                    <span className='addoptionButton' onClick={addOption}>+</span>
                                </>)
                            }


                        </div>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handelEditChange}>Save</Button>
                </DialogActions>
            </Dialog >

            <MaterialDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} dataArray={formData} />
        </>
    )
}

export default FormBuilderIndex