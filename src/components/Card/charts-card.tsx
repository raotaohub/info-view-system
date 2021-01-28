import './charts-card.scss';
interface CardProps {
    width?: number | string;
    height?: number | string;
    title?: string;
    children?: any;
}
export const ChartsCard = (props:CardProps) => {
    return (
        <div className="charts-card" 
        style={{
            width: props.width || 300,
            height: props.height || 300
        }}>
            <div className="charts-card-title">
                {props.title || '这是标题'}
            </div>
            <div className="charts-card-content">
                {props.children}
            </div>
        </div>
    )
}