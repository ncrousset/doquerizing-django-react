import React from "react";

interface Props {
    title: string;
}

const Title: React.FC<Props> = ({title}) => {
    return (
        <h1 className="font-bold text-xl py-5">{title}</h1>
    )
}

export default Title;