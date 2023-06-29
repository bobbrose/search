import React from "react";

const allHistory = new Set();

function History({ inputRef, searchHistory, setSearchTerm }) {

    function HistoryList() {
        return (
            <div>
                {Array.from(allHistory).reverse().map((item) => (
                    <div key={item} onClick={historyClick} className='historyItem'>{item}</div>
                ))}
            </div>
        );
    }
    function historyClick(event) {
        setSearchTerm(event.target.innerText);

        const enterKeyEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            which: 13,
            keyCode: 13,
            bubbles: true,
            cancelable: true,
        });
        inputRef.current.innerText = event.target.innerText;
        inputRef.current.value = event.target.innerText;
        inputRef.current.dispatchEvent(enterKeyEvent);
    }

    if (searchHistory != null) {
        allHistory.add(searchHistory);
    }
    return (
        <div className="history">
            <h3>History</h3>
            <h4><HistoryList /></h4>
        </div>
    );
}

export default History;
