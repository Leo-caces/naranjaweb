import { cn } from "@/lib/utils"

interface Props {
    title: string
    highlighted: string
    description: string
    className?: string
}

export const TitleSection = ({title, highlighted, description, className}: Props) => {
  return <div className="flex flex-col items-center justify-center">
          <h2 className={cn('text-4xl font-semibold text-background', className)}>
            {title} 
            <span className={cn('text-4xl font-semibold text-primary')}> {highlighted}</span>
          </h2>
          <div className="h-0.5 bg-[#ffd43b] w-21 mt-1"></div>
          <p className="text-fontGray text-base mt-4 mx-auto text-center px-4">{description}</p>
        </div>
}
