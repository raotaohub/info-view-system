import './Title.scss';

interface TitleProps {
    title?: (string | number)
}
export const Title = (props:TitleProps) => {
    return (
        <div className="g-title">
            {props.title || '默认标题'}
        </div>
    )
}