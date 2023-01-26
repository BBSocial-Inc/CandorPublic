export function Block({children, title}:any){
    return (
        <div className="mb-4">
            <h1 className="text-[17px] text-black text-bold">{title}</h1>
            <span className="text-[17px] text-[#888888] text-medium">{children}</span>
        </div>
    )
}