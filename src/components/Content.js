import React, {Component} from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

class Content extends Component {
    message1 = {
        title: 'New sprint, tasks and intro information',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel gravida orci. Proin odio ex, elementum eu malesuada sit amet, congue eget dui. Suspendisse sem ligula, pharetra non aliquam non, tincidunt rutrum nunc. Suspendisse faucibus, diam et facilisis pellentesque, ligula justo posuere tellus, vitae viverra nunc erat ut quam. Praesent semper elit suscipit blandit iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in consequat nulla, sit amet semper augue. Donec cursus efficitur nibh, vel cursus velit faucibus et. Morbi sit amet augue tellus. Vivamus sapien justo, ullamcorper aliquet lectus a, interdum facilisis nulla. Suspendisse lobortis pulvinar mauris, pulvinar tempus dolor. Aliquam commodo gravida arcu, dictum gravida neque sagittis vel',
        author: 'Olga Nelson',
        created_at: '2022-10-21T07:52:38',
    }

    message2 = {
        title: 'Application has been accepted',
        content: 'Fusce tincidunt libero eget orci facilisis vulputate. In varius pretium scelerisque. Vestibulum leo arcu, dictum nec feugiat non, sagittis sit amet neque. Ut vulputate sem leo, eu placerat dolor ultricies at. Mauris et massa diam. Ut quis pulvinar dolor, vestibulum aliquet est. Fusce ut cursus lacus. Vestibulum accumsan gravida ornare. Maecenas mollis mattis elit, sed porttitor erat consectetur sit amet.',
        author: 'Kirsten Aniston',
        created_at: '2022-20-10T15:33:25'
    }

    message3 = {
        title: 'Welcome',
        content: 'Etiam malesuada tincidunt semper. Nunc dolor nulla, luctus id tempus ut, dignissim quis diam. Aliquam placerat ex at sapien pellentesque bibendum. Nam eget metus id mauris dapibus pharetra eu quis odio. Aliquam facilisis bibendum neque, feugiat consequat libero ultricies et. Ut tristique justo lobortis finibus gravida. Etiam sed arcu in augue efficitur maximus vitae sit amet tellus.',
        author: 'Olga Nelson',
        created_at: '2022-20-10T10:34:22'
    }
    render() {
        dayjs.extend(relativeTime);
        return (
            <div className="container">
                <div className="announces">
                    <div className="announcment">
                        <p>{this.message1.author}   •   {dayjs(this.message1.created_at).fromNow()}</p>
                        <h3>{this.message1.title}</h3> 
                        <p>{this.message1.content.substring(0, 140)}</p>
                    </div>
                    <div className="announcment">
                        <p>{this.message2.author}   •   {dayjs(this.message2.created_at).fromNow()}</p>
                        <h3>{this.message2.title}</h3> 
                        <p>{this.message2.content.substring(0, 140)}</p>
                    </div>
                    <div className="announcment">
                        <p>{this.message3.author}   •   {dayjs(this.message3.created_at).fromNow()}</p>
                        <h3>{this.message3.title}</h3> 
                        <p>{this.message3.content.substring(0, 140)}</p>
                    </div>
                </div>

                <div className="message">
                    
                </div>
            </div>
        );
    }
}

export default Content;