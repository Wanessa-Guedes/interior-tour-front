import { MainBulletAttractions } from "./../../AttractionsInfos/style"

const Restaurants = ({ attractions }) => {
    return(<>
            
            <MainBulletAttractions>
            <summary>Principais Restaurantes</summary>
            {
                attractions?.map((attraction) => {
                    return (
                            (attraction.type.type === 'restaurant')?
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

export default Restaurants