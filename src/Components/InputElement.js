import React, { useState } from "react";
import "../App.css"

const operator={
    "and": "&",
    "or": "|",
    "xor": "^",
    "ls": "<<",
    "rs": ">>",
}
const InputElement = ({ operation, handleAns }) => {
    const [values, setValues] = useState({});

    const handleClick = (e) => {
        e.preventDefault();
        let value1 = Number(values.input1);
        let value2 = Number(values.input2);
        let ans;
        switch (operation) {
            case "and":
                ans = value1 & value2;
                return handleAns(ans);
            case "or":
                ans = value1 | value2;
                console.log(ans)
                return handleAns(ans);

            case "xor":
                ans = value1 ^ value2;
                return handleAns(ans);
            case "ls":
                ans = value1 << value2;
                return handleAns(ans);
            case "rs":
                ans = value1 >> value2;
                return handleAns(ans);
            default:
                return "return Error";
        }
    };

    return (
        <form>
            <div className="operation-status"><span className="span1">{operation.toUpperCase()}</span> <span className="span2">operation</span></div>
            <input
                type="text"
                name="input1"
                required
                pattern="\d*"
                onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                }
            ></input>
            <div className="operator"><span>{operator[operation]}</span></div>
            <input
                type="text"
                name="input2"
                required
                pattern="\d*"
                onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                }
            ></input>
            <br></br>
            <input
                type="submit"
                onClick={(e) => {
                    handleClick(e);
                }}
            ></input>
        </form>
    );
};

export default InputElement;
