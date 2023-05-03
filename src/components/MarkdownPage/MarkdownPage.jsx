import './MarkdownPage.css';

import {
    ReactMarkdown
} from "react-markdown/lib/react-markdown";

export default function MarkdownPage(props) {
    return(
        <div className='MarkdownPage'>
            <h4 className='MarkdownPageTitle'>{props.title}</h4>

            <ReactMarkdown>
                {props.content}
            </ReactMarkdown>
        </div>
    );
}
