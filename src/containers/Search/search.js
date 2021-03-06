/**
 * Created by yongyuehuang on 2017/1/15.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './styles/search.less'

/*actions*/
import * as searchActions from 'actions/search';

import Header from 'components/Search/header';
import HotTag from 'components/Search/hotTag';

@connect(
    state => state,
    dispatch => bindActionCreators({...searchActions}, dispatch)
)
export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.hotClick = this.hotClick.bind(this);
    }

    componentWillMount() {
        console.log("进入搜索页面")
        this.props.hotTag();
    }

    componentDidMount() {
        console.log("渲染完成打印");
    }

    hotClick(text) {
        console.log(text)
    }

    render() {
        const { hotData } = this.props.search
        return (
            <div>
                <Header />
                <div>
                    <p className="search-hot-title">
                        <i className="fa fa-fire"></i>
                        <span>热门搜索</span>
                    </p>
                    <p className="style_div_p">
                        {
                            hotData.length > 0 &&
                                hotData.map((elem, index) => {
                                    return (
                                        <HotTag
                                            ref="hotSearch"
                                            key={index}
                                            hotText={elem.text}
                                            hotClick={() => this.hotClick(elem.text)}
                                            {...this.props}
                                        />
                                    )
                                })
                        }
                    </p>
                </div>
            </div>
        )
    }
}