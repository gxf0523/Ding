import React, { Component } from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import AsyncComponent from "../common/js/AsyncComponent";
import styles from '../common/css/index.css'

/*页面*/
const Message = AsyncComponent(() => import("../view/Message")); //消息
const Work = AsyncComponent(() => import("../view/Work")); //工作
const AddressBook = AsyncComponent(() => import("../view/AddressBook")); //通讯录
const My = AsyncComponent(() => import("../view/My")); //我的

class RoutesIndex extends Component {
    render() {
        return (
            <div className={styles.DingWrapper}>
                <div className={styles.DingCenter}>
                    <Switch>
                        <Route exact path="/message" component={Message} />
                        <Route path="/work" component={Work} />
                        <Route path="/addressbook" component={AddressBook} />
                        <Route path="/my" component={My} />
                        <Redirect to="/message" />
                    </Switch>
                </div>
                <div className={styles.DingFooter}>
                    <NavLink to="/message">消息</NavLink>
                    <NavLink to="/work">工作</NavLink>
                    <NavLink to="/addressbook">通讯录</NavLink>
                    <NavLink to="/my">我的</NavLink>
                </div>
            </div>
        );
    }
}

export default RoutesIndex;


