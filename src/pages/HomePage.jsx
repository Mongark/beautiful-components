import MarkdownPage from "../components/MarkdownPage";

// const sample_texts = "ason";

const sample_texts = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function HomePage() {
    return(
        <div className=".home">
            <MarkdownPage title="Nothing" content={sample_texts} />
        </div>
    );
}
