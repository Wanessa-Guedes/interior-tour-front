import { MainBulletAttractions } from "./../../AttractionsInfos/style"

const Attractions = ({ attractions }) => {
    return(<>
            
            <MainBulletAttractions>
            <summary>Principais Atrações</summary>
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

export default Attractions