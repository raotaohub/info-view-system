
import { Layout } from '../layout';
function Home(props) {
    return (
        <div style={{height: '100%'}}>
            <Layout props={{...props}} />
        </div>
    )
}


// function beforeRoute(from, to, next) {
  
// }

export default Home;