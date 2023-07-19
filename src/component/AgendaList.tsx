import { IAgenda } from "./Agendatype";
import "./AgendaList.style.css";
import AgendaModel from "./AgendaModel";
import { useState } from "react";
import pagination from "./pagination";


type props = {
    list: IAgenda[];
    onDeleteclick :(data: IAgenda) => void;
    onUpdate: (data: IAgenda) => void;
}

const AgendaList = (props: props) => {
    const { list , onDeleteclick,onUpdate} = props;
    const [showModel, setShowModel] = useState(false);
    const [dataToShow,setDataToShow] = useState( null as IAgenda| null);


    const viewAgenda = (data: IAgenda) => {
        setDataToShow(data);
        setShowModel(true);
    };
    const onCloseModal = () => setShowModel(false);
    

    return (
        <div>
            <article>
                <h3 className="list-header"> Agenda List</h3>
            </article>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Date/Time</th>
                    <th>Actions</th>
                </tr>
                {list.map(agenda =>{
                    console.log(agenda);
                    return (
                    <tr key={agenda.id}>

                    <td>{agenda.title}</td>
                    <td>{agenda.description}</td>
                    <td>{agenda.status}</td>
                    <td>{agenda.datetime}</td>
                    <td>
                       <div>
                        <input className="viewagendabutton" type="button" value="view" onClick={() => viewAgenda(agenda)}/>
                        <input className="editagendabutton" type="button" value="Edit" onClick={() => onUpdate(agenda)}/>
                        <input className="deleteagendabutton" type="button" value="Delete" onClick={() => onDeleteclick(agenda)} />
                       </div>
                    </td>
                </tr>
                );
                })}
                
                
                
            </table>
            {showModel && dataToShow  !== null &&<AgendaModel onclose={onCloseModal} data={dataToShow}/> }
            {/* <pagination />
             */}
        </div>
    );
};

export default AgendaList;