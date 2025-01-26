import React from 'react'
import Title from '../../../components/Title'
import CopmanyForm from '../../../components/form/CopmanyForm'
 
function AddCompany() {

  return <>
  <div className='mb-8'>
  <Title title={'اضافة شركة'} />
  </div>


  <div>
    <CopmanyForm mode={'add'} />
  </div>
  </>
}

export default AddCompany