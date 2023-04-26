
import InputText from "../../Input/inputText";
import InputGroups from "../../Input/inputGroup";
import {useState} from "react";
import {formatter} from "../../../Utils/formmatterBudget";
import NextButton from "../../Button/NexButton/nextButton";
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {pagePreservative} from "../../../Reducer/pageSlice";
import {setForm} from "../../../Reducer/formSlice";

const  FormData = () => {
    const state = useAppSelector(state => state.form)
    const [data , setData]=useState({
    nameEvent:state.nameEvent ? state.nameEvent  :"",
    Date:state.Date ? state.Date  :"",
    time:state.time ? state.time  :"",
    })
    const [budget , setBudget]= useState(state.budget? state.budget : 0)
    const onchangeHandler = (e:any) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value.replaceAll("," , '') });
    }
    const dispatch = useAppDispatch()
    const clickHandler = () => {
    dispatch(setForm({...data, budget}))
        dispatch(pagePreservative(5))
    }

    return(
        <div>
            <InputText name="nameEvent" nameInput="Event Name" type="text" placeholder="" value={data.nameEvent} onChange={(e:any) => onchangeHandler(e) }/>
            <InputText name="Date" nameInput="Date" type="date" placeholder="DD-MM-YYYY" value={data.Date} onChange={(e:any) =>onchangeHandler(e)}/>
            <InputText name="time" nameInput="Time" type="time" placeholder="HH-MM" value={data.time} onChange={(e:any) =>onchangeHandler(e)}/>
            <InputGroups nameLabel="Budget" name="budget" nameInput={<svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M7.17111 5.65149C7.0539 6.73993 6.63108 7.61905 5.90267 8.28885C5.17425 8.95866 4.08163 9.40241 2.6248 9.62009L8.06279 16H5.42543L0 9.65777L0.251177 7.82418H1.40659C1.81685 7.82418 2.17687 7.80743 2.48666 7.77394C2.79644 7.74045 3.06436 7.6944 3.29042 7.63579C3.52486 7.56881 3.7258 7.48927 3.89325 7.39717C4.0607 7.2967 4.21559 7.18367 4.35793 7.05808C4.72632 6.70644 4.96494 6.23757 5.07378 5.65149H0V3.8179H5.04867C4.98169 3.49137 4.87284 3.21507 4.72214 2.98901C4.5798 2.75458 4.39142 2.54526 4.15699 2.36107C3.92255 2.17687 3.61277 2.04291 3.22763 1.95918C2.85086 1.87546 2.34432 1.8336 1.70801 1.8336H0V0H10.8509V1.8336H6.02826C6.3213 2.04291 6.5641 2.3192 6.75667 2.66248C6.94924 3.00576 7.0832 3.39089 7.15856 3.8179H10.8509V5.65149H7.17111Z" fill="#787878"/>
            </svg>} type={"text"} placeholder={""} value={formatter.format(Number(budget))} onChange={(e:any) =>setBudget(e.target.value.replaceAll(",", ""))}/>
            <NextButton handlerClick={()=>clickHandler()} statusDisabled={ budget && data.time && data.Date && data.nameEvent ? false :true} />
        </div>
    )
}
export default FormData