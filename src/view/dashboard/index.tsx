import { Title } from '../../components/Title';
import { ChatsLineErrorData, ChatsPieData } from '../../components/Chats';
import './dashboard.scss';
const Dashborad = () => {
    return (
        <div className="g-dashboard">
            <Title title={'本日监控数据'} />
            <div className="g-dashboard-item">
                <ChatsLineErrorData />
                <ChatsLineErrorData />
                <ChatsPieData />
                <ChatsPieData />
            </div>
            
        </div>
    );
}

export default Dashborad;
