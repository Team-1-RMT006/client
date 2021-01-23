import {useState} from 'react';
import EditEvent from '../Forms/EditEvent'
import DeleteConfirmation from '../Modals/DeleteConfirmation';
import TableBody from '../Table/TableBody'

function TableEvent ({myEvent}) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [toEdit, setToEdit] = useState(null);
  function handleEditForm(value = null){
    setShowEditForm(!showEditForm);
    setToEdit(value);
  }
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  function handleDelete(value = null){
    setShowDeleteModal(!showDeleteModal);
    setToDelete(value);
  }

  return (
    <>
    <table className="relative w-full">
      {
        myEvent.map(status => {
          return (
            <>
              <thead>
                <tr>
                  <th className="w-1/3 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700"></th>
                  <th className="w-1/3 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700">{status.status}</th>
                  <th className="w-1/3 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700"></th>
                </tr>
              </thead>
              <tbody className="divide-y bg-gray-100">
                {
                  status.event.map(listEvent => {
                    return (
                      <TableBody
                        key={listEvent.id}
                        event={listEvent}
                        handleEditForm={handleEditForm}
                        handleDelete={handleDelete}
                      />
                    )
                  })
                }
              </tbody>
            </>
          )
        })
      }
    </table>
    {
      showEditForm ? 
      <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items center">
        <EditEvent handleEditForm={handleEditForm} populateData={toEdit}/>
      </div> : ''
    }
    {
      showDeleteModal ?
      <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items center">
        <DeleteConfirmation handleDelete={handleDelete} id={toDelete} />
      </div> : ''
    }
    </>
  )
}

export default TableEvent