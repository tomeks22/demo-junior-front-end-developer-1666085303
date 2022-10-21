import CheckIcon from '@mui/icons-material/Check';

function Window () {
    return (
        <div className="window">
            <div className="header">
                YOUR TASKS
            </div>
            <hr></hr>
            <div className="tasksList">
                <ul>
                    <li><CheckIcon/>Application Setup</li>
                    <li>Administrator Panel</li>
                    <li>Connect Admin with Frontend</li>
                    <li>Book review status</li>
                </ul>
            </div>
        </div>
    );
}

export default Window;