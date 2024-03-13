import { MdTextFields } from "react-icons/md";
import { RiRadioButtonFill } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { RiCheckboxFill } from "react-icons/ri";
import { HiOutlineSelector } from "react-icons/hi";
import { MdFileUpload } from "react-icons/md";
import { BsTextareaResize } from "react-icons/bs";
import { MdOutlinePassword } from "react-icons/md";
export let textField = [
    { type: 'text', fieldName: 'Text', name: 'text', id: 'text', class: 'text', value: 'text', placeholder: 'text', maxlength: "1", minlength: "255", icon: <MdTextFields size={25} /> },
    { type: 'number', fieldName: 'Number', name: 'number', id: 'number', class: 'number', value: 'number', placeholder: 'number', min: '0', max: '100', maxlength: "10", minlength: "10", icon: <MdTextFields /> },
    { type: 'password', fieldName: 'Password', name: 'password', id: 'password', class: 'password', value: 'password', placeholder: 'password', maxlength: "1", minlength: "255", icon: <MdOutlinePassword size={25} /> },
    { type: 'date', fieldName: 'Date', name: 'date', id: 'date', class: 'date', value: 'date', placeholder: 'date', icon: <MdOutlineDateRange size={25} /> },
    { type: 'file', fieldName: 'File', name: 'file', id: 'file', class: 'file', value: 'file', placeholder: 'file', icon: <MdFileUpload size={25} /> },
    { type: 'radio', fieldName: 'Radio', name: 'radio', id: 'radio', class: 'radio', value: 'radio', placeholder: 'radio', option: [{ label: 'option1', value: 'option1' }, { label: 'option2', value: 'optio2' }, { label: 'option3', value: 'option3' }], icon: <RiRadioButtonFill size={25} /> },
    { type: 'checkbox', fieldName: 'CheckBox', name: 'checkbox', id: 'checkbox', class: 'checkbox', value: 'checkbox', placeholder: 'checkbox', option: [{ label: 'option1', value: 'option1' }, { label: 'option2', value: 'optio2' }, { label: 'option3', value: 'option3' }], icon: <RiCheckboxFill size={25} /> },
    { type: 'select', fieldName: 'Select', name: 'select', id: 'select', class: 'select', value: 'select', placeholder: 'select', option: [{ label: 'option1', value: 'option1' }, { label: 'option2', value: 'optio2' }, { label: 'option3', value: 'option3' }], icon: <HiOutlineSelector size={25} /> },
    { type: 'textArea', fieldName: 'TextArea', name: 'textarea', id: 'textarea', class: 'textarea', value: 'textarea', placeholder: 'textarea', icon: <BsTextareaResize size={25} /> },
    { type: 'button', fieldName: 'Button', name: '', id: '', class: '', value: '', placeholder: 'button', icon: <HiOutlineSelector size={25} /> }
  ]
