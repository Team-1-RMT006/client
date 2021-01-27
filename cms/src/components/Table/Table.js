import TableHead from './TableHead'
import TableBody from './TableBody'
import {useState} from 'react';
import EditEvent from '../Forms/EditEvent'
import DeleteConfirmation from '../Modals/DeleteConfirmation';

function Table () {
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
  const [organizer, setOrganizer] = useState([
    {
      id: 1,
      organizerName: "Balakutak",
      organizerEvent: [
        {
          id: 1,
          eventName: "Balakutakutako",
          eventDate: "29-19-1986"
        },
        {
          id: 2,
          eventName: "Dung tak tak dung",
          eventDate: "29-19-1986"
        },
        {
          id: 3,
          eventName: "dot dot jeng",
          eventDate: "29-19-1986"
        },
      ]
    },
    {
      id: 2,
      organizerName: "Dorongdot Congcot",
      organizerEvent: [
        {
          id: 4,
          eventName: "maklupalapelo",
          eventDate: "31-2-1986"
        }
      ]
    },
    {
      id: 3,
      organizerName: "tulak tulik",
      organizerEvent: [
        {
          id: 5,
          eventName: "Heuy hae hae ",
          eventDate: "29-19-1986"
        },
        {
          id: 6,
          eventName: "Grogokmuepa",
          eventDate: "29-19-1986"
        },
        {
          id: 7,
          eventName: "Sokolokogonapago",
          eventDate: "29-19-1986"
        },
        {
          id: 8,
          eventName: "Dulare pai po puliripa",
          eventDate: "29-19-1986"
        }
      ]
    }
  ])
  return (
    <>
    <table className="relative w-full">
      {
        organizer.map(organize => {
          return (
            <>
            <TableHead key={organize.id} organizerName={organize.organizerName}/>
            <tbody className="divide-y bg-gray-100">
              {
                organize.organizerEvent.map(event => {
                  return (
                    <TableBody 
                      key={event.id} 
                      event={event} 
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

export default Table;