import './findus.css';
import { Call, Place, Email } from '@mui/icons-material';

function FindUs () {
    return(
        <div className='findUsContainer'>
            <div className='location'>
                <p className='locationText'>
                    <Place style={{fontSize: '3vmin', color: '#004080', marginRight: '1vmin'}} />
                     Tasia New Cemetery Road Onitsha Anambra
                </p><br />
                <p className='locationText'> 
                    <Call style={{fontSize: '3vmin', color: '#004080', marginRight: '1vmin'}} />
                    08053018140
                </p><br />
                <p className='locationText'> 
                    <Email style={{fontSize: '3vmin', color: '#004080', marginRight: '1vmin'}} />
                    thebiotechnologylaboratory@gmail.com
                </p>
            </div>
            <div className='map'>
                <div style={{width: "100%", height: "100%"}}><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='bioTech' src="https://maps.google.com/maps?width=100%25&amp;height=50%25&amp;hl=en&amp;q=Tasia%20New%20Cemetery%20Road%20Onitsha+(BioTech%20Laboratory)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">Carte démographique</a></iframe></div>
            </div>
        </div>
    )
}

export default FindUs;