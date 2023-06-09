import {Fragment} from "react";
import SelectButton from "../../Button/SelecteButton/selectButton";
import {InviteTypeEnum} from "../../../Enums/inviteTypeEnum";
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {inviteSelect} from "../../../Reducer/inviteSlice";

const InviteItems = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.invite)
    const selectHandler = (id: number, value: number) => {
        dispatch(inviteSelect({id, value}))
    }
    return (
        <Fragment>
            {InviteTypeEnum.map((item: any) =>
                <SelectButton key={item.id} handlerClick={() => selectHandler(item.id, item.value)} child={item.name}
                              selected={state.id === item.id ? true : false}/>
            )}
        </Fragment>
    )
}
export default InviteItems
