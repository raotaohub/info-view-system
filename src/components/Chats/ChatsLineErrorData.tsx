import { ChartsCard } from '../Card/charts-card';
import { Line } from '@ant-design/charts';


export default function ChatsLineErrorData() {

    const data = [
        { year: '2012', value: 385 },
        { year: '2013', value: 401 },
        { year: '2014', value: 300 },
        { year: '2015', value: 355 },
        { year: '2016', value: 359 },
        { year: '2017', value: 320 },
        { year: '2018', value: 396 },
        { year: '2019', value: 310 },
        { year: '2020', value: 388 },
        { year: '2021', value: 29 },
    ];
    const config = {
        data,
        height: 400,
        xField: 'year',
        yField: 'value',
        point: {
            size: 5,
            shape: 'diamond',
        },
        label: {
            style: {
            fill: '#aaa',
            },
        },
        tooltip: {
            // showTitle: false,
            
            formatter: (datum:any) => {
            return { name: '异常数据', value: datum.value, title: datum.year + '年'};
            },
        }
        
    };


    return (
        <ChartsCard width={'46%'} height={400} title={"近十年异常数据"}>
            <Line {...config} />
        </ChartsCard>
    )
} 