import { MainBulletAttractions } from ".";


const AttracttionsInfos = ({ city }) => {

    return(
        city.attractions?.map(attraction => {
            return (
                (attraction.type.type === 'restaurant')?
                    (<MainBulletAttractions>
                            <summary> Principais Restaurantes </summary>
                            <ul>
                                <li>
                                    {
                                        attraction.name
                                    }
                                </li>
                            </ul>
                    </MainBulletAttractions>):(<></>)
                (attraction.type.type === 'attraction')?
                (<MainBulletAttractions>
                        <summary> Principais Atrações </summary>
                        <ul>
                            <li>
                                {
                                    attraction.name
                                }
                            </li>
                        </ul>
                </MainBulletAttractions>):(<></>)
                (attraction.type.type === 'event')?
                (<MainBulletAttractions>
                        <summary> Principais Eventos </summary>
                        <ul>
                            <li>
                                {
                                    attraction.name
                                }
                            </li>
                        </ul>
                </MainBulletAttractions>):(<></>)
            )
        })
    )
}


export default AttracttionsInfos;