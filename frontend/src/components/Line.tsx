interface PropContentLine {
    children: React.ReactNode
    classname?: string
}

export default function Line(props:PropContentLine) {
  return (
    <p className={!props.classname?"text-lightgreen text-sm/3 tracking-[5px] font-bold h-5":props.classname}>{props.children}<br/></p>
  )
}
