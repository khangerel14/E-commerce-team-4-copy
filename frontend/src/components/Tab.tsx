import React from "react"

export interface TabProps{
    children: String;
}

export function Tab(props: TabProps){
    return(
        <button className="flex h-[56px] mx-[12px] align-middle items-center">{props.children}</button>
    )
}

export default Tab;