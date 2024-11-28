import { Flex, Title } from "@mantine/core";
import classes from "./TypedTitle.module.css"
import { useEffect, useState } from "react";
const TypedTitle = () =>{

    let the_title = "Hello."

    const [curTitle, setTitle] = useState("")

    const type_title = ()=>{
        let curTitle = "";
        let i = 0;
        the_title.split('').forEach(c=>{
            i++;
            setTimeout(() => {
                curTitle = curTitle + c;
                setTitle(curTitle)
            }, 1000+100*i);
        })
    }

    useEffect(()=>{
        type_title();
    }, [])

    return(
        <>
        <Flex>
        <Title>{curTitle}</Title>
        <Title className={classes.blinkSpan}>&nbsp;</Title>
        </Flex>
        </>
    )
}

export default TypedTitle;