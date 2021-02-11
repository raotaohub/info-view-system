import { Menu } from 'antd';

const { SubMenu } = Menu;




export function renderMenu(routeMap:any) {
    
    const create = (routeMap:any, el: any) => {
        for (let item of routeMap) {
            let children:any = [];
            if (item.isItem) {
                el.push(
                    <Menu.Item 
                    key={item.path}
                    icon={item.icon ? <item.icon /> : null}>
                    {item.title}</Menu.Item>
                )
            }else if (item.isSub) {
                if (item.children) {
                    create(item.children, children)
                }
                el.push(
                    <SubMenu 
                    key={item.key}
                    title={item.title}
                    icon={item.icon ? <item.icon /> : null}>
                        {children}
                    </SubMenu>
                )
            }else if (item.isGroup) {
                if (item.children) {
                    create(item.children, children)
                }
                el.push(
                    <Menu.ItemGroup 
                    key={item.key}
                    title={item.title}
                    >
                        {children}
                    </Menu.ItemGroup>
                )
            }
        }
        return el;
    }
    let menu = create(routeMap, [])
    return menu;
}