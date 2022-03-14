import { EMPLOYEES_LIST } from "../constants/Index";

const initialState = {
    employeeData: JSON.parse(localStorage.getItem('employeeDataList')) || [],
};

const Reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case EMPLOYEES_LIST: return { ...state, employeeData: [...payload] };
        default: return state;
    }
}

export default Reducer;