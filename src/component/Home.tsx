import { useState ,useEffect} from 'react';
import Add from './Add';
import { IAgenda,  pageEnum } from './Agendatype';
import AgendaList from './AgendaList';
import "./Home.style.css";
import UpdateAgenda from '../UpdateAgenda';


const Home = () => {
    const [agendaList, setAgendaList] = useState([] as IAgenda[]);

    const [showpage, setshowpage] = useState(pageEnum.list) 
    const [dataToUpadate, setdataToUpadate] = useState({} as IAgenda);

    useEffect(() => {
    // const [agendaList, setAgendaList] = useState([] as IAgenda[]);
        const listInString = window.localStorage.getItem("agendaList");
        if(listInString){
            _setAgendaList(JSON.parse(listInString));
        }

    },  []);
    const onAddAgenda = () =>{
        setshowpage(pageEnum.add);
    }

    const showListpage = () => {
        setshowpage(pageEnum.list);
       
    };
    const _setAgendaList = (list: IAgenda[]) => {
         setAgendaList(list);
         window.localStorage.setItem("agendaList",JSON.stringify(list));
    };
    const addAgenda = (data: IAgenda) =>{
        _setAgendaList([...agendaList, data]);
    };
    const deleteAgenda =( data: IAgenda) =>{
    const indexTODelete = agendaList.indexOf(data);
    const tempList = [...agendaList]

    tempList.splice(indexTODelete, 1);
    _setAgendaList(tempList);
    }
    const updateAgendaData = (data: IAgenda) => {
        setshowpage(pageEnum.update);
        setdataToUpadate(data);
    };

        const updateData = (data: IAgenda) => {
            const filteredData = agendaList.filter(x => x.id === data.id)[0];
            const indexOfRecords = agendaList.indexOf(filteredData);
            const tempData = [...agendaList]
            tempData[indexOfRecords] = data;
            _setAgendaList(tempData);
        }
    
    return (
        <>
        <article className="article-header">
            <header>
                <h1>CRUD Application for Agendar List</h1>
            </header>
        </article>

        <section className="section-content">
            {showpage === pageEnum.list &&(
                <>
                <input type="button" value="Add" onClick={onAddAgenda} className="addagendabutton"/>
                <AgendaList list={agendaList} onDeleteclick={deleteAgenda} onUpdate={updateAgendaData}/>
                </>
                
            )}
            {showpage === pageEnum.add && <Add onBackbtn={showListpage} onSubmitClick={addAgenda}/>}
           {showpage === pageEnum.update && <UpdateAgenda data={dataToUpadate} onBackbtn={showListpage} onUpdateClick={updateData}/>}
        </section>
         
        </>

    );
};

export default Home;