import { useState } from 'react';
import "./Add.style.css"
import { IAgenda } from './Agendatype';
type props = {
    onBackbtn: () => void
    onSubmitClick: (data: IAgenda) => void
}



const Add = (props: props) => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [status,setStatus] = useState("");
    const [datetime,setDateTime] = useState("");

    const { onBackbtn , onSubmitClick} = props;

    const onTitlechange = (e: any) =>{
        setTitle(e.target.value);
    };
    const onDescriptionchange = (e: any) =>{
        setDescription(e.target.value);
    };
    const onStatushange = (e: any) =>{
        setStatus(e.target.value);
    };
    const onDateTimechange = (e: any) =>{
        setDateTime(e.target.value);
    };
    const onSubmitBtnClick=(e: any) =>{
        e.preventDefault();
        const data: IAgenda = {
            id: new Date().toJSON().toString(),
            title: title,
            description: description,
            status: status,
            datetime: datetime,
        }
        onSubmitClick(data);
        onBackbtn();

    }
    return (
        <div className="form-container">
            <form onSubmit={onSubmitBtnClick}>
                <div >
                    <div>
                        <h3>Add Agenda Form</h3>
                    </div>

                    <input type="text" placeholder="Enter Title" value={title} onChange={onTitlechange}/>

                </div>
                <div>

                    <input type="text" placeholder="Enter Description" value={description} onChange={onDescriptionchange} /><br />

                </div>
                <div>

                    <input type="text" placeholder="Enter Status" value={status} onChange={onStatushange}/><br />

                </div>
                <div>

                    <input type="text" placeholder="Enter DateTime" value={datetime} onChange={onDateTimechange}/><br />

                </div>
                <div>
                    <input type="button" value="back" onClick={onBackbtn} />
                    <input type="submit" value="add" />
                </div>
            </form>
        </div>
    );

};

export default Add;