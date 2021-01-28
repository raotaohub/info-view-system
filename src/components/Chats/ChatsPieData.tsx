import { ChartsCard } from '../Card/charts-card';
import { Pie } from '@ant-design/charts';

var data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
        type: 'inner',
        offset: '-30%',
        content: function content(_ref:any) {
        var percent = _ref.percent;
        return ''.concat(String(percent * 100), '%');
        },
        style: {
        fontSize: 14,
        textAlign: 'center',
        },
    },
    interactions: [{ type: 'element-active' }],
};


export default function ChatsPieData() {
    return (
        <ChartsCard width={'46%'} height={400} title={"近十年异常数据"}>
            <Pie {...config} />
        </ChartsCard>
    )
} 