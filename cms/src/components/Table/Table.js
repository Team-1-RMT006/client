import TableHead from './TableHead'
import TableBody from './TableBody'
import {useState} from 'react';


function Table () {
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
          id: 1,
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
          id: 1,
          eventName: "Heuy hae hae ",
          eventDate: "29-19-1986"
        },
        {
          id: 2,
          eventName: "Grogokmuepa",
          eventDate: "29-19-1986"
        },
        {
          id: 3,
          eventName: "Sokolokogonapago",
          eventDate: "29-19-1986"
        },
        {
          id: 4,
          eventName: "Dulare pai po puliripa",
          eventDate: "29-19-1986"
        }
      ]
    },

  ])
  return (
    <table class="relative w-full border">
      {
        organizer.map(organize => {
          return (
            <>
            <TableHead organizerName={organize.organizerName}/>
            <tbody class="divide-y bg-red-100">
              {
                organize.organizerEvent.map(event => {
                  return (
                    <TableBody event={event}/>
                  )
                })
              }
            </tbody>
            </>
          )
        })
      }
    </table>
  )
}

export default Table;