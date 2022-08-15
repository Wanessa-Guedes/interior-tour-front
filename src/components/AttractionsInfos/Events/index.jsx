import { MainBulletAttractions } from "./../../AttractionsInfos/style.jsx"

const Events = ({ attractions }) => {
    console.log(attractions)
    return(<>
            
            <MainBulletAttractions>
            <summary>Principais Eventos</summary>
            {
                attractions?.map((attraction) => {
                    return (
                            (attraction.type.type === 'event')?
                                    (
                                        <ul>
                                            <li>
                                                {
                                                    attraction.name
                                                }
                                            </li>
                                        </ul>
                                    ):(<></>)
                )})
            }
            </MainBulletAttractions>
    </>)
}

export default Events