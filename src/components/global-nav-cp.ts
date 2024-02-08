import { ref } from 'vue'

// 菜单数据最大层级
export type MaxLevel = 3

// 导航栏布局模式
export type GlobalNavMode = 'horizontal' | 'vertical'

// 菜单数据类型
export type MenuData = {
  id: string,
  name: string,
  icon?: string,
  path: string,
  component: string,
  children?: MenuData[]
}

// 菜单数据
export const menuData: MenuData[] = [
  {
    id: '1648956201174392833',
    name: '研究员工作台',
    icon: '',
    path: '/researcherWorkbench',
    component: '/researcherWorkbench'
  },
  {
    id: '8759750665809920',
    name: '品种',
    icon: '',
    path: '/researcherWorkbench',
    component: '/researcherWorkbench',
    children: [
      {
        id: '103124635736612864',
        name: '公司',
        icon: '',
        path: '/kap/katRe/variety_1',
        component: '/kap/katRe/variety_1'
      },
      {
        id: '103196160009445376',
        name: '债券',
        icon: '',
        path: '/kap/katRe/variety_2',
        component: '/kap/katRe/variety_2'
      }
    ]
  }
]

export let navMode = ref<GlobalNavMode>('vertical')
