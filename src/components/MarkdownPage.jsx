import PropTypes from 'prop-types';

import {
    ReactMarkdown
} from "react-markdown/lib/react-markdown";

function MarkdownPage(props) {
    return(
        <div className='markdown-page'>
            <h4 className='markdown-page-title'>{props.title}</h4>

            <ReactMarkdown>
                {props.content}
            </ReactMarkdown>
        </div>
    );
}

MarkdownPage.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default MarkdownPage;
