
import { Input } from "@/components/ui/input"

type LoginProps = {
    isLogin: boolean
}

const LoginComp = ({isLogin}: LoginProps) => {
    
    const onSubmit = () => {

    }

    return (

        <form className="flex flex-col gap-5 font-bold" onSubmit={onSubmit}>
        {isLogin ? <div className="flex justify-center"><Input className="w-3/6" placeholder="Username"/></div> : null}
        <div className="flex justify-center"><Input className="w-3/6" placeholder="Email"/></div>
        <div className="flex justify-center"><Input className="w-3/6" placeholder="Password"/></div>
        </form>
    )
}

export {LoginComp}