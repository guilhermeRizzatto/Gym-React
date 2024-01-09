function RefreshButton(){


    const refresh = () => {
        window.location.reload();     
    }

    return(
        <div className="divRefresh">
            <button id="refreshButton" onClick={refresh}>Refresh</button>
        </div>
    )
}

export default RefreshButton;