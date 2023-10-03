import { Button, Input, Select, Option, Radio, Typography } from "@material-tailwind/react"
import { Alert } from "@material-tailwind/react"
import { useState } from "react"
import { GiWallet as Expense } from 'react-icons/gi'
/* For form input validation */
import * as yup from 'yup'
import { useForm } from "react-hook-form"
/* Integrating schema with useForm hook */
import { yupResolver } from "@hookform/resolvers/yup"

export function AddExpense() {
    const [ showAlert, setShowAlert ] = useState(false)
    
    const schema = yup.object().shape({
        amount: yup.number("Please enter a number").positive("Amount should be positive")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <form className="flex flex-col gap-8 mt-8 w-full font-main font-normal">
            <div className="flex justify-center items-center gap-8">
                <div className="basis-1/6">
                    <Select 
                        label="Select Type" 
                        className="w-full font-main font-normal text-emerald"
                        color="green"
                        menuProps={{
                            className: 'bg-navy-blue text-emerald'
                        }}
                        labelProps={{
                            className: 'font-main font-bold'
                        }}
                    >
                        <Option>Income</Option>
                        <Option>Expense</Option>
                    </Select>
                </div>
                <div className="basis-1/6">
                    <Select 
                        label="Select Category" 
                        className="w-full font-main font-normal text-emerald"
                        color="green"
                        menuProps={{
                            className: 'bg-navy-blue text-emerald max-h-[100px]'
                        }}
                        labelProps={{
                            className: 'font-main font-bold'
                        }}
                    >
                        <Option>Food</Option>
                        <Option>Transport</Option>
                        <Option>Entertainment</Option>
                    </Select>
                </div>
                <div className="basis-1/6 flex flex-col justify-center">
                    <Input
                        label="Amount"
                        onBlur={(event) => event.target.placeholder = ""}
                        onFocus={(event) => event.target.placeholder="Enter in ₹"}
                        className="w-full font-main font-normal text-emerald" 
                        color="green"
                        labelProps={{
                            className: 'text-lg font-main font-bold'
                        }}
                    />
                </div>
            </div>
            <div className="grow-1 flex items-center justify-center">
                <Button 
                    className="p-4 border border-dark-green hover:bg-dark-green hover:text-off-white
                    font-main font-bold text-emerald"
                >
                    Add Expense
                </Button>
            </div>
        </form> 
    )
}