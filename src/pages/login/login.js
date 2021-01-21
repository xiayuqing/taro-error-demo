import Nerv, { Component } from 'nervjs'
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components'
import './login.scss'

export default class Login extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onLogin = () => {
    Taro.switchTab({ url: '/pages/home/home' });
  }

  render() {
    return (
      <View className='index'>
        <Text>登录页</Text>
        <Button onClick={this.onLogin}>点击登录，进入首页</Button>
      </View>
    )
  }
}
