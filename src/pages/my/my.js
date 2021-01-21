import Nerv, { Component } from 'nervjs'
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components'
import './my.scss'

export default class My extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onClick = () => {
    Taro.redirectTo({ url: '/pages/login/login' });
  }

  render() {
    return (
      <View className='index'>
        <Text>我的页面</Text>
        <Button onClick={this.onClick}>点击退出，进入登录页</Button>
      </View>
    )
  }
}
