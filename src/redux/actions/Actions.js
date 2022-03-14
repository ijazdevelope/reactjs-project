import { EMPLOYEES_LIST } from "../constants/Index"

export const employeeListAction = (employeeList) => {
    return {
        type: EMPLOYEES_LIST,
        payload: [...employeeList],
    }
}
