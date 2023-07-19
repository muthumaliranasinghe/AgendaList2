import "./AgendaModel.style.css"
import { IAgenda } from "./Agendatype";

type  props ={
    onclose: () => void;
    data: IAgenda

};
const AgendaModel = (props: props) => {
    const { onclose,data } = props
    return(
        <div id="mymodal" className="modal">
            <div className="modal-content">
                 <span className="close" onClick={onclose}>&times;</span>
                <h3>Agenda Details</h3>
                <div>
                    <label>Topic : {data.title}</label><br/>
                    <label>Description : {data.description}</label><br/>
                    <label>Status : {data.status}</label><br/>
                    <label>Date/Time : {data.datetime}</label>
                </div>
            </div>
        </div>

    ); 
};
export default AgendaModel;