
export const SectionTitle = ({ title, className, children, weight = "bold", align="left" }: { title?: string, className?: string, children?: React.ReactNode, weight?: string, align?: string, size?: string }) => {
    return (
        <h1 className={`text-${align} font-${weight} text-lg text-black ${className} `}>
            {children ?
                children :
                title
            }
        </h1>
    )   
}