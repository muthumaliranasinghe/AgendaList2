import { useState } from 'react';
import { IAgenda } from "./component/Agendatype";
// import "./AgendaForm.style.css"

type props = {
    data: IAgenda;
    onBackbtn: () => void;
    onUpdateClick: (data: IAgenda) => void;
}

const UpdateAgenda = (props: props) =>{
    const {data, onBackbtn,onUpdateClick} = props;

    const [title,setTitle] = useState(data.title);
    const [description,setDescription] = useState(data.description);
    const [status,setStatus] = useState(data.status);
    const [datetime,setDateTime] = useState(data.datetime);

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
        const updateData: IAgenda = {
            id: data.id,
            title: title,
            description: description,
            status: status,
            datetime: datetime,
        }
        onUpdateClick(updateData);
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
                <input type="submit" value="update" />
            </div>
        </form>
    </div>

    );

};

export default UpdateAgenda;