import { Button } from "react-bootstrap"
import { themeColors } from "../../data/Data"
import { useStateContext } from "../../context/ContextProvider"

const ThemeSetting = () => {

    const { setColor } = useStateContext();

    return (
        <>
            <div className="d-flex">
                {themeColors.map((item, index) => (
                    <div key={index} className="d-flex" >
                        <Button
                            className="p-3 rounded-circle cursor-pointer border-0 m-2"
                            style={{ backgroundColor: item.color }}
                            onClick={() => { setColor(item.color) }}
                        >
                        </Button>
                    </div>
                ))}

            </div>


        </>
    )
}

export default ThemeSetting