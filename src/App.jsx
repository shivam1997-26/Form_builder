import React from "react"
import { Route, Routes } from "react-router-dom"
import FormBuilderIndex from "./FormBuilderIndex"
import PreviewForm from "./PreviewForm"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<FormBuilderIndex />} />
        <Route path="/formPreview" element={<PreviewForm />} />
      </Routes>
    </>
  )
}

export default App
