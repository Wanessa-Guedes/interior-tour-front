import { MainBulletAttractions } from "./../../AttractionsInfos/style"

const Events = ({ attractions }) => {
    console.log(attractions)
    return(<>
            
            <MainBulletAttractions>
            <summary>Principais Eventos</summary>
            {
                attractions?.map((attraction) => {
                    return (
                            (attraction.type.type === 'attraction')?
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